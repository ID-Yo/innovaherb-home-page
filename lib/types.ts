export type Locale = "en" | "bg" | "ru" | "sv";

export type ProductSlug =
  | "lions-mane"
  | "cordyceps"
  | "reishi"
  | "shiitake"
  | "chaga"
  | "mix";

export type CartItem = {
  slug: ProductSlug;
  quantity: number;
};

export type ProductCopy = {
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  tagline: string;
  benefits: string[];
  ingredients: string[];
  usage: string[];
  seoTitle: string;
  seoDescription: string;
};

export type Product = {
  slug: ProductSlug;
  sku: string;
  priceCents: number;
  category: string;
  image: string;
  accentClass: string;
  stock: number;
  published: boolean;
  localized: Record<Locale, ProductCopy>;
};

export type OrderStatus =
  | "draft"
  | "awaiting_payment"
  | "paid"
  | "packing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded"
  | "payment_failed"
  | "oversold_review";

export type PaymentStatus =
  | "pending"
  | "paid"
  | "failed"
  | "refunded"
  | "partially_refunded";

export type CheckoutRequest = {
  items: CartItem[];
  locale: Locale;
  customer: {
    email: string;
    fullName: string;
    phone: string;
  };
  shippingAddress: {
    line1: string;
    line2?: string;
    city: string;
    postalCode: string;
    country: "BG";
  };
};

export type CheckoutResponse = {
  checkoutUrl: string;
  orderId: string;
};

export type AdminOrderSummary = {
  id: string;
  createdAt: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  totalCents: number;
  itemCount: number;
};

export type AdminOrderDetail = AdminOrderSummary & {
  shippingAddress: string;
  items: Array<{
    slug: ProductSlug;
    productName: string;
    quantity: number;
    unitPriceCents: number;
  }>;
  timeline: Array<{
    type: string;
    description: string;
    createdAt: string;
  }>;
  stripeCheckoutUrl?: string | null;
  internalNotes: string[];
  isTemporaryPassword?: boolean;
};
