import { Locale } from "@/lib/types";

export function getLocale(searchParams?: Record<string, string | string[] | undefined>): Locale {
  const value = searchParams?.lang;
  if (value === "bg" || (Array.isArray(value) && value[0] === "bg")) {
    return "bg";
  }
  return "en";
}

export function withLocale(path: string, locale: Locale) {
  if (locale !== "bg") {
    return path;
  }

  const [pathname, hash = ""] = path.split("#");
  const separator = pathname.includes("?") ? "&" : "?";
  return `${pathname}${separator}lang=bg${hash ? `#${hash}` : ""}`;
}
