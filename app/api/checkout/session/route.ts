import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { buildStripeLineItems, createStripeClient, validateCheckoutPayload } from "@/lib/checkout";
import { getCartSubtotal, getShippingCents } from "@/lib/cart";
import { products } from "@/lib/products";
import type { CheckoutResponse } from "@/lib/types";
import { absoluteUrl } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const payload = validateCheckoutPayload(await request.json());
    const subtotal = getCartSubtotal(payload.items, products);
    const shipping = getShippingCents(subtotal);
    const total = subtotal + shipping;
    const orderId = randomUUID();

    let storedOrderId = orderId;

    if (process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createAdminClient();
      const { error } = await supabase.from("orders").insert({
        id: orderId,
        status: "awaiting_payment",
        payment_status: "pending",
        subtotal_cents: subtotal,
        shipping_cents: shipping,
        total_cents: total,
        customer_name: payload.customer.fullName,
        customer_email: payload.customer.email,
        customer_phone: payload.customer.phone,
        shipping_line_1: payload.shippingAddress.line1,
        shipping_line_2: payload.shippingAddress.line2 || null,
        shipping_city: payload.shippingAddress.city,
        shipping_postal_code: payload.shippingAddress.postalCode,
        shipping_country: payload.shippingAddress.country,
        locale: payload.locale,
        item_count: payload.items.reduce((sum, item) => sum + item.quantity, 0),
      });

      if (error) {
        throw error;
      }

      storedOrderId = orderId;

      const orderItems = payload.items.map((item) => {
        const product = products.find((entry) => entry.slug === item.slug)!;
        return {
          order_id: orderId,
          product_slug: item.slug,
          quantity: item.quantity,
          unit_price_cents: product.priceCents,
          product_name: product.localized[payload.locale].name,
        };
      });

      const orderItemsResult = await supabase.from("order_items").insert(orderItems);
      if (orderItemsResult.error) {
        throw orderItemsResult.error;
      }
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      const fallbackUrl = absoluteUrl(`/checkout/success?orderId=${storedOrderId}`);
      const response: CheckoutResponse = {
        checkoutUrl: fallbackUrl,
        orderId: storedOrderId,
      };
      return NextResponse.json(response);
    }

    const stripe = createStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: absoluteUrl(`/checkout/success?orderId=${storedOrderId}`),
      cancel_url: absoluteUrl(`/checkout/cancel?orderId=${storedOrderId}`),
      customer_email: payload.customer.email,
      shipping_address_collection: {
        allowed_countries: ["BG"],
      },
      billing_address_collection: "required",
      line_items: buildStripeLineItems(payload),
      metadata: {
        orderId: storedOrderId,
        locale: payload.locale,
      },
      custom_text: {
        submit: {
          message: "Your payment confirms the InnoVAherb order and triggers fulfillment review.",
        },
      },
    });

    if (process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const supabase = createAdminClient();
      await supabase.from("stripe_checkout_sessions").insert({
        order_id: storedOrderId,
        session_id: session.id,
        session_url: session.url,
        status: session.status,
      });
    }

    const response: CheckoutResponse = {
      checkoutUrl: session.url || absoluteUrl(`/checkout/success?orderId=${storedOrderId}`),
      orderId: storedOrderId,
    };

    return NextResponse.json(response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create checkout session.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
