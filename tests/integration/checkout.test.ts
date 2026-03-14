import { describe, expect, it } from "vitest";
import { buildStripeLineItems, validateCheckoutPayload } from "@/lib/checkout";

describe("checkout validation", () => {
  it("accepts valid Bulgaria checkout payloads", () => {
    const payload = validateCheckoutPayload({
      items: [{ slug: "mix", quantity: 1 }],
      locale: "en",
      customer: {
        email: "customer@example.com",
        fullName: "Customer Example",
        phone: "+359888123456",
      },
      shippingAddress: {
        line1: "10 Vitosha Blvd",
        city: "Sofia",
        postalCode: "1000",
        country: "BG",
      },
    });

    expect(payload.customer.email).toBe("customer@example.com");
  });

  it("builds stripe line items from validated data", () => {
    const payload = validateCheckoutPayload({
      items: [{ slug: "mix", quantity: 2 }],
      locale: "en",
      customer: {
        email: "customer@example.com",
        fullName: "Customer Example",
        phone: "+359888123456",
      },
      shippingAddress: {
        line1: "10 Vitosha Blvd",
        city: "Sofia",
        postalCode: "1000",
        country: "BG",
      },
    });

    const lineItems = buildStripeLineItems(payload);
    expect(lineItems).toHaveLength(1);
    expect(lineItems[0].quantity).toBe(2);
  });
});
