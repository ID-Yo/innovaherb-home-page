"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localePath } from "@/lib/i18n";
import { Locale } from "@/lib/types";

export function LocaleToggle({
  locale,
  availableLocales,
}: {
  locale: Locale;
  availableLocales: readonly Locale[];
}) {
  const pathname = usePathname() || "/";

  function localeHref(value: Locale) {
    const target = localePath(pathname, value);
    return `${target}${target.includes("?") ? "&" : "?"}setLocale=${value}`;
  }

  return (
    <div className="flex rounded-full border border-warm-200 bg-white/90 p-1 text-xs font-semibold">
      {availableLocales.map((value) => (
        <Link
          key={value}
          href={localeHref(value)}
          className={`rounded-full px-3 py-1 ${locale === value ? "bg-brand-600 text-white" : "text-grey-600"}`}
        >
          {value.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
