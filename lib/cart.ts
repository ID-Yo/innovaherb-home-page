import { CartItem, Product } from "@/lib/types";
import { siteConfig } from "@/lib/site";

export function sanitizeCartItems(items: CartItem[]) {
  return items
    .filter((item) => item.quantity > 0)
    .map((item) => ({
      ...item,
      quantity: Math.min(12, Math.floor(item.quantity)),
    }))
    .filter((item) => item.quantity > 0);
}

export function getCartSubtotal(items: CartItem[], products: Product[]) {
  const productMap = new Map(products.map((product) => [product.slug, product]));
  return sanitizeCartItems(items).reduce((sum, item) => {
    const product = productMap.get(item.slug);
    return product ? sum + product.priceCents * item.quantity : sum;
  }, 0);
}

export function getShippingCents(subtotalCents: number) {
  return subtotalCents >= siteConfig.shippingThresholdCents ? 0 : 590;
}

export function getCartTotal(items: CartItem[], products: Product[]) {
  const subtotal = getCartSubtotal(items, products);
  return subtotal + getShippingCents(subtotal);
}
