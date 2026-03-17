import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { DEFAULT_LOCALE, isLocale, stripLocalePrefix } from "@/lib/i18n";

const LOCALE_COOKIE = "innovaherb_locale";

function shouldBypass(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand_assets") ||
    pathname.startsWith("/icons") ||
    pathname === "/favicon.ico"
  );
}

function localeFromPath(pathname: string) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

function hasLocalePrefix(pathname: string) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return isLocale(firstSegment);
}

function localizedPathname(pathname: string, locale: string) {
  const normalizedPath = stripLocalePrefix(pathname);
  return locale === DEFAULT_LOCALE ? normalizedPath : `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}

function buildInternalUrl(request: NextRequest, pathname: string, locale: string) {
  const internal = request.nextUrl.clone();
  internal.pathname = pathname;
  internal.searchParams.set("lang", locale);
  internal.searchParams.set("__i18n", "1");
  return internal;
}

function setLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

function localeFromCountry(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  if (country === "BG") {
    return "bg";
  }
  if (country === "SE") {
    return "sv";
  }
  return undefined;
}

function localeFromAcceptLanguage(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) {
    return undefined;
  }

  const parts = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const part of parts) {
    if (part === "bg" || part.startsWith("bg-")) {
      return "bg";
    }
    if (part === "sv" || part.startsWith("sv-")) {
      return "sv";
    }
    if (part === "ru" || part.startsWith("ru-")) {
      return "ru";
    }
    if (part === "en" || part.startsWith("en-")) {
      return "en";
    }
  }

  return undefined;
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/index.html") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  if (shouldBypass(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const queryLocale = request.nextUrl.searchParams.get("lang") ?? undefined;
  const isInternalLocaleRewrite = request.nextUrl.searchParams.get("__i18n") === "1";
  const switchLocale = request.nextUrl.searchParams.get("setLocale") ?? undefined;

  if (isLocale(queryLocale) && !isInternalLocaleRewrite) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.searchParams.delete("lang");
    redirectUrl.pathname = localizedPathname(redirectUrl.pathname, queryLocale);
    return setLocaleCookie(NextResponse.redirect(redirectUrl, 308), queryLocale);
  }

  if (isLocale(switchLocale)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.searchParams.delete("setLocale");
    redirectUrl.pathname = localizedPathname(redirectUrl.pathname, switchLocale);
    return setLocaleCookie(NextResponse.redirect(redirectUrl, 308), switchLocale);
  }

  const locale = localeFromPath(request.nextUrl.pathname);
  const strippedPathname = stripLocalePrefix(request.nextUrl.pathname);
  const preferredLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const shouldDetectLocale = !hasLocalePrefix(request.nextUrl.pathname) && strippedPathname !== "/admin" && !strippedPathname.startsWith("/admin/");

  if (shouldDetectLocale) {
    const fallbackLocale = isLocale(preferredLocale)
      ? preferredLocale
      : localeFromCountry(request) ?? localeFromAcceptLanguage(request) ?? DEFAULT_LOCALE;

    if (fallbackLocale !== DEFAULT_LOCALE) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = localizedPathname(request.nextUrl.pathname, fallbackLocale);
      return setLocaleCookie(NextResponse.redirect(redirectUrl, 307), fallbackLocale);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-innovaherb-locale", locale);

  const response = NextResponse.rewrite(buildInternalUrl(request, strippedPathname, locale), {
    request: { headers: requestHeaders },
  });
  setLocaleCookie(response, locale);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    if (strippedPathname.startsWith("/admin") && !strippedPathname.startsWith("/admin/login")) {
      const url = new URL("/admin/login", request.url);
      url.searchParams.set("redirectedFrom", strippedPathname);
      return NextResponse.redirect(url);
    }

    return response;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options as never));
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (strippedPathname.startsWith("/admin") && !strippedPathname.startsWith("/admin/login")) {
    if (!user) {
      const url = new URL("/admin/login", request.url);
      url.searchParams.set("redirectedFrom", strippedPathname);
      return NextResponse.redirect(url);
    }
  }

  return response;
}

export const config = {
  matcher: ["/:path*"],
};
