import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { getAdminOrderDetail, orderStatusLabel } from "@/lib/admin";

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getAdminOrderDetail(id);

  if (!order) {
    notFound();
  }

  return (
    <AdminShell>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] bg-white p-6 shadow-elevated">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Order detail</p>
              <h2 className="mt-3 font-display text-4xl text-grey-900">{order.id}</h2>
            </div>
            {order.stripeCheckoutUrl ? (
              <Link href={order.stripeCheckoutUrl} className="rounded-full border border-warm-200 px-4 py-2 text-sm font-semibold text-grey-900">
                Open Stripe
              </Link>
            ) : null}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-warm-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Customer</p>
              <p className="mt-3 font-semibold text-grey-900">{order.customerName}</p>
              <p className="text-sm text-grey-600">{order.customerEmail}</p>
            </div>
            <div className="rounded-[1.5rem] bg-warm-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Shipping address</p>
              <p className="mt-3 text-sm leading-7 text-grey-700">{order.shippingAddress}</p>
            </div>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-warm-200 p-5">
            <h3 className="font-display text-3xl text-grey-900">Items</h3>
            <div className="mt-4 space-y-4">
              {order.items.map((item) => (
                <div key={`${item.slug}-${item.productName}`} className="flex items-center justify-between border-b border-warm-100 pb-4">
                  <div>
                    <p className="font-semibold text-grey-900">{item.productName}</p>
                    <p className="text-xs text-grey-500">Qty {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-grey-900">€{(item.unitPriceCents / 100).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
            <h3 className="font-display text-3xl text-grey-900">Status</h3>
            <p className="mt-4 text-sm leading-7 text-grey-600">Order: {orderStatusLabel(order.status)}</p>
            <p className="text-sm leading-7 text-grey-600">Payment: {order.paymentStatus.replaceAll("_", " ")}</p>
            {order.isTemporaryPassword ? (
              <p className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">
                The seeded admin user still uses a temporary password and must rotate it on first full setup.
              </p>
            ) : null}
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
            <h3 className="font-display text-3xl text-grey-900">Timeline</h3>
            <div className="mt-5 space-y-4">
              {order.timeline.map((entry) => (
                <div key={`${entry.type}-${entry.createdAt}`} className="rounded-[1.5rem] bg-warm-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">{entry.type.replaceAll("_", " ")}</p>
                  <p className="mt-2 text-sm text-grey-700">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
