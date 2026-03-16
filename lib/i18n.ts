import { Locale } from "@/lib/types";

export const PUBLIC_LOCALES = ["en", "bg", "ru", "sv"] as const satisfies readonly Locale[];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value?: string): value is Locale {
  return Boolean(value && PUBLIC_LOCALES.includes(value as Locale));
}

export function getLocale(searchParams?: Record<string, string | string[] | undefined>): Locale {
  const value = searchParams?.lang;
  const candidate = Array.isArray(value) ? value[0] : value;
  return isLocale(candidate) ? candidate : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}` || "/";
  }
  return pathname || "/";
}

export function withLocale(path: string, locale: Locale) {
  const [pathnameWithQuery, hash = ""] = path.split("#");
  const [pathname, query = ""] = pathnameWithQuery.split("?");
  const normalizedPath = stripLocalePrefix(pathname || "/");
  const localizedPath = locale === DEFAULT_LOCALE ? normalizedPath : `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
  const suffix = query ? `?${query}` : "";
  return `${localizedPath}${suffix}${hash ? `#${hash}` : ""}`;
}

export function localePath(path: string, locale: Locale) {
  return withLocale(path, locale);
}

export function commerceLocale(locale: Locale): Locale {
  return locale === "bg" ? "bg" : "en";
}
