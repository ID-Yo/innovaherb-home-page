import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { createStripeClient } from "@/lib/checkout";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = createStripeClient().webhooks.constructEvent(body, signature, secret);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook verification failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return NextResponse.json({ ok: true, eventId: event.id });
  }

  const supabase = createAdminClient();
  const existing = await supabase
    .from("stripe_webhook_events")
    .select("id")
    .eq("stripe_event_id", event.id)
    .maybeSingle();

  if (existing.data?.id) {
    return NextResponse.json({ ok: true, duplicated: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const orderId = session.metadata?.orderId;

  await supabase.from("stripe_webhook_events").insert({
    stripe_event_id: event.id,
    event_type: event.type,
    payload: event,
  });

  if (orderId && event.type === "checkout.session.completed") {
    await supabase.from("orders").update({
      status: "paid",
      payment_status: "paid",
      stripe_checkout_session_id: session.id,
    }).eq("id", orderId);

    await supabase.from("order_events").insert({
      order_id: orderId,
      event_type: "payment_confirmed",
      description: "Stripe webhook confirmed the checkout session payment.",
    });
  }

  if (orderId && event.type === "checkout.session.expired") {
    await supabase.from("orders").update({
      status: "payment_failed",
      payment_status: "failed",
      stripe_checkout_session_id: session.id,
    }).eq("id", orderId);
  }

  return NextResponse.json({ ok: true, eventId: event.id });
}
