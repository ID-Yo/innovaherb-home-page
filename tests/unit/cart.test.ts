import { describe, expect, it } from "vitest";
import { getCartSubtotal, getCartTotal, getShippingCents } from "@/lib/cart";
import { products } from "@/lib/products";

describe("cart calculations", () => {
  it("calculates subtotal correctly", () => {
    const subtotal = getCartSubtotal(
      [
        { slug: "lions-mane", quantity: 2 },
        { slug: "reishi", quantity: 1 },
      ],
      products,
    );

    expect(subtotal).toBe(5994);
  });

  it("keeps shipping free above threshold", () => {
    expect(getShippingCents(5000)).toBe(0);
  });

  it("adds shipping below threshold", () => {
    const total = getCartTotal([{ slug: "mix", quantity: 1 }], products);
    expect(total).toBe(2588);
  });
});
