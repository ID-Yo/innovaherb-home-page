"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/types";

export function LocaleToggle({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = (value: Locale) => {
    const params = typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

    if (value === "bg") {
      params.set("lang", "bg");
    } else {
      params.delete("lang");
    }

    const query = params.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const nextPath = query ? `${pathname}?${query}` : pathname;
    router.replace(`${nextPath}${hash}`);
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
