"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function AdminLoginForm({ redirectedFrom }: { redirectedFrom?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState(process.env.NEXT_PUBLIC_DEFAULT_ADMIN_EMAIL || "admin-test@innovaherb.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError(signInError.message);
      setSubmitting(false);
      return;
    }

    router.push(redirectedFrom || "/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[2rem] border border-warm-200 bg-white p-8 shadow-elevated">
      <div>
        <h2 className="font-display text-3xl text-grey-900">Admin login</h2>
        <p className="mt-2 text-sm text-grey-600">Use the seeded temporary admin credentials from the environment handoff.</p>
      </div>
      <label className="block space-y-2 text-sm font-medium text-grey-700">
        <span>Email</span>
        <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-2xl border border-warm-200 bg-warm-50 px-4 py-3" />
      </label>
      <label className="block space-y-2 text-sm font-medium text-grey-700">
        <span>Password</span>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-2xl border border-warm-200 bg-warm-50 px-4 py-3" />
      </label>
      {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}
      <button type="submit" disabled={submitting} className="w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white">
        {submitting ? "Signing in..." : "Open admin"}
      </button>
    </form>
  );
}
