import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { describeRevenue, getAdminOrders, orderStatusLabel } from "@/lib/admin";

export default async function AdminOverviewPage() {
  const orders = await getAdminOrders();
  const paidOrders = orders.filter((order) => order.paymentStatus === "paid").length;

  return (
    <AdminShell>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Revenue</p>
          <p className="mt-4 font-display text-5xl text-grey-900">{describeRevenue(orders)}</p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Paid orders</p>
          <p className="mt-4 font-display text-5xl text-grey-900">{paidOrders}</p>
        </div>
        <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-600">Open actions</p>
          <p className="mt-4 font-display text-5xl text-grey-900">{orders.filter((order) => order.status !== "delivered").length}</p>
        </div>
      </div>
      <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-elevated">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl text-grey-900">Recent orders</h2>
          <Link href="/admin/orders" className="text-sm font-semibold text-brand-600">View all</Link>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-grey-500">
              <tr>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-100">
              {orders.slice(0, 6).map((order) => (
                <tr key={order.id}>
                  <td className="py-4">
                    <Link href={`/admin/orders/${order.id}`} className="font-semibold text-grey-900">{order.customerName}</Link>
                    <p className="text-xs text-grey-500">{order.customerEmail}</p>
                  </td>
                  <td className="py-4 capitalize">{orderStatusLabel(order.status)}</td>
                  <td className="py-4 capitalize">{order.paymentStatus.replaceAll("_", " ")}</td>
                  <td className="py-4">€{(order.totalCents / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
