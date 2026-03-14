import Stripe from "stripe";
import { z } from "zod";
import { products } from "@/lib/products";
import type { CheckoutRequest } from "@/lib/types";
import { absoluteUrl } from "@/lib/site";

export const checkoutRequestSchema = z.object({
  items: z.array(
    z.object({
      slug: z.enum(["lions-mane", "cordyceps", "reishi", "shiitake", "chaga", "mix"]),
      quantity: z.number().int().positive().max(12),
    }),
  ).min(1),
  locale: z.enum(["en", "bg"]),
  customer: z.object({
    email: z.string().email(),
    fullName: z.string().min(2),
    phone: z.string().min(6),
  }),
  shippingAddress: z.object({
    line1: z.string().min(3),
    line2: z.string().optional(),
    city: z.string().min(2),
    postalCode: z.string().min(3),
    country: z.literal("BG"),
  }),
});

export function validateCheckoutPayload(input: unknown) {
  return checkoutRequestSchema.parse(input);
}

export function createStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is missing.");
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia",
  });
}

export function buildStripeLineItems(payload: CheckoutRequest) {
  return payload.items.map((item) => {
    const product = products.find((entry) => entry.slug === item.slug);

    if (!product || !product.published) {
      throw new Error(`Unknown or unpublished product: ${item.slug}`);
    }

    return {
      quantity: item.quantity,
      price_data: {
        currency: "eur",
        unit_amount: product.priceCents,
        product_data: {
          name: product.localized[payload.locale].name,
          description: product.localized[payload.locale].shortDescription,
          images: [absoluteUrl(product.image)],
          metadata: {
            slug: product.slug,
            sku: product.sku,
          },
        },
      },
    };
  });
}
