import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { getAdminOrders, orderStatusLabel } from "@/lib/admin";

export default async function AdminOrdersPage() {
  const orders = await getAdminOrders();

  return (
    <AdminShell>
      <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
        <h2 className="font-display text-3xl text-grey-900">Orders</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-grey-500">
              <tr>
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Items</th>
                <th className="pb-3">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-100">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-4">
                    <Link href={`/admin/orders/${order.id}`} className="font-semibold text-brand-600">{order.id}</Link>
                  </td>
                  <td className="py-4">
                    <p className="font-semibold text-grey-900">{order.customerName}</p>
                    <p className="text-xs text-grey-500">{order.customerEmail}</p>
                  </td>
                  <td className="py-4 capitalize">{orderStatusLabel(order.status)}</td>
                  <td className="py-4 capitalize">{order.paymentStatus.replaceAll("_", " ")}</td>
                  <td className="py-4">{order.itemCount}</td>
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
