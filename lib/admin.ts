import { createAdminClient } from "@/lib/supabase/admin";
import type { AdminOrderDetail, AdminOrderSummary, OrderStatus } from "@/lib/types";
import { formatEuro } from "@/lib/format";

const fallbackOrders: AdminOrderDetail[] = [
  {
    id: "ord_demo_1001",
    createdAt: new Date().toISOString(),
    customerName: "Demo Customer",
    customerEmail: "demo.customer@example.com",
    status: "paid",
    paymentStatus: "paid",
    totalCents: 4586,
    itemCount: 2,
    shippingAddress: "10 Vitosha Blvd, Sofia 1000, Bulgaria",
    items: [
      {
        slug: "lions-mane",
        productName: "Lion's Mane",
        quantity: 1,
        unitPriceCents: 1998,
      },
      {
        slug: "mix",
        productName: "5-Mushroom Mix",
        quantity: 1,
        unitPriceCents: 1998,
      },
    ],
    timeline: [
      { type: "order_created", description: "Draft order created before checkout session.", createdAt: new Date().toISOString() },
      { type: "payment_confirmed", description: "Stripe webhook marked the order as paid.", createdAt: new Date().toISOString() },
    ],
    stripeCheckoutUrl: "https://dashboard.stripe.com/test/payments",
    internalNotes: ["Fallback demo data is shown because Supabase env is missing."],
    isTemporaryPassword: true,
  },
];

export async function getAdminOrders(): Promise<AdminOrderSummary[]> {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return fallbackOrders.map((order) => ({
      id: order.id,
      createdAt: order.createdAt,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      status: order.status,
      paymentStatus: order.paymentStatus,
      totalCents: order.totalCents,
      itemCount: order.itemCount,
    }));
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("orders")
    .select("id,created_at,status,payment_status,total_cents,customer_name,customer_email,item_count")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return (data || []).map((order) => ({
    id: order.id,
    createdAt: order.created_at,
    customerName: order.customer_name,
    customerEmail: order.customer_email,
    status: order.status,
    paymentStatus: order.payment_status,
    totalCents: order.total_cents,
    itemCount: order.item_count,
  })) as AdminOrderSummary[];
}

export async function getAdminOrderDetail(orderId: string): Promise<AdminOrderDetail | null> {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return fallbackOrders.find((order) => order.id === orderId) || fallbackOrders[0];
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase.rpc("get_admin_order_detail", { target_order_id: orderId });
  if (error) {
    throw error;
  }
  return data as AdminOrderDetail | null;
}

export async function updateOrderStatus(orderId: string, status: OrderStatus) {
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("orders")
    .update({ status })
    .eq("id", orderId);

  if (error) {
    throw error;
  }
}

export function orderStatusLabel(status: OrderStatus) {
  return status.replaceAll("_", " ");
}

export function describeRevenue(orders: AdminOrderSummary[]) {
  const total = orders.reduce((sum, order) => sum + order.totalCents, 0);
  return formatEuro(total);
}
