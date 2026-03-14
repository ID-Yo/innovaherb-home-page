"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/types";

export function LocaleToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (value: Locale) => {
    router.replace(value === "bg" ? `${pathname}?lang=bg` : pathname);
  };

  return (
    <div className="flex rounded-full border border-warm-200 bg-white/90 p-1 text-xs font-semibold">
      {(["en", "bg"] as Locale[]).map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          className={`rounded-full px-3 py-1 ${locale === value ? "bg-brand-600 text-white" : "text-grey-600"}`}
        >
          {value.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
