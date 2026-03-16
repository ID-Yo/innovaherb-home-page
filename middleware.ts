import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { DEFAULT_LOCALE, isLocale, stripLocalePrefix } from "@/lib/i18n";

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

function buildInternalUrl(request: NextRequest, pathname: string, locale: string) {
  const internal = request.nextUrl.clone();
  internal.pathname = pathname;
  internal.searchParams.set("lang", locale);
  return internal;
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/index.html") {
    return NextResponse.redirect(new URL("/", request.url), 308);
  }

  if (shouldBypass(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const queryLocale = request.nextUrl.searchParams.get("lang") ?? undefined;
  if (isLocale(queryLocale)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.searchParams.delete("lang");
    redirectUrl.pathname = queryLocale === DEFAULT_LOCALE ? stripLocalePrefix(redirectUrl.pathname) : `/${queryLocale}${stripLocalePrefix(redirectUrl.pathname) === "/" ? "" : stripLocalePrefix(redirectUrl.pathname)}`;
    return NextResponse.redirect(redirectUrl, 308);
  }

  const locale = localeFromPath(request.nextUrl.pathname);
  const strippedPathname = stripLocalePrefix(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-innovaherb-locale", locale);

  const response = NextResponse.rewrite(buildInternalUrl(request, strippedPathname, locale), {
    request: { headers: requestHeaders },
  });
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
