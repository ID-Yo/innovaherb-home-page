import { Locale } from "@/lib/types";

export function getLocale(searchParams?: Record<string, string | string[] | undefined>): Locale {
  const value = searchParams?.lang;
  if (value === "bg" || (Array.isArray(value) && value[0] === "bg")) {
    return "bg";
  }
  return "en";
}
