"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/storefront/CartProvider";
import { products } from "@/lib/products";
import { getCartTotal } from "@/lib/cart";
import type { CheckoutRequest } from "@/lib/types";

const initialForm = {
  email: "",
  fullName: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  postalCode: "",
};

export function CheckoutForm() {
  const router = useRouter();
  const { items } = useCart();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const total = useMemo(() => getCartTotal(items, products), [items]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload: CheckoutRequest = {
      items,
      locale: "en",
      customer: {
        email: form.email,
        fullName: form.fullName,
        phone: form.phone,
      },
      shippingAddress: {
        line1: form.line1,
        line2: form.line2,
        city: form.city,
        postalCode: form.postalCode,
        country: "BG",
      },
    };

    const response = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error ?? "Checkout setup failed.");
      setSubmitting(false);
      return;
    }

    router.push(data.checkoutUrl);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="space-y-6 rounded-[2rem] border border-warm-200 bg-white p-6 shadow-elevated">
        <div>
          <h2 className="font-display text-3xl text-grey-900">Guest checkout</h2>
          <p className="mt-2 text-sm text-grey-600">Enter your delivery details below. We currently ship within Bulgaria.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["fullName", "Full name"],
            ["email", "Email address"],
            ["phone", "Phone number"],
            ["city", "City"],
            ["line1", "Address line 1"],
            ["line2", "Address line 2"],
            ["postalCode", "Postal code"],
          ].map(([key, label]) => (
            <label key={key} className="space-y-2 text-sm font-medium text-grey-700">
              <span>{label}</span>
              <input
                required={key !== "line2"}
                value={form[key as keyof typeof form]}
                onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
                className="w-full rounded-2xl border border-warm-200 bg-warm-50 px-4 py-3 outline-none ring-brand-200 focus:ring"
              />
            </label>
          ))}
        </div>
        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      </div>
      <aside className="rounded-[2rem] border border-warm-200 bg-white p-6 shadow-elevated">
        <h2 className="font-display text-3xl text-grey-900">Order total</h2>
        <p className="mt-4 text-4xl font-semibold text-grey-900">EUR {(total / 100).toFixed(2)}</p>
        <p className="mt-4 text-sm text-grey-600">Secure card payments are handled by Stripe Checkout.</p>
        <button
          type="submit"
          disabled={!items.length || submitting}
          className="mt-8 inline-flex w-full justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-brand-300"
        >
          {submitting ? "Preparing checkout..." : "Continue to Stripe"}
        </button>
      </aside>
    </form>
  );
}
