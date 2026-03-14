import { AdminShell } from "@/components/admin/AdminShell";

const customers = [
  {
    name: "Demo Customer",
    email: "demo.customer@example.com",
    lastOrder: "ord_demo_1001",
  },
];

export default function AdminCustomersPage() {
  return (
    <AdminShell>
      <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
        <h2 className="font-display text-3xl text-grey-900">Customers</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-grey-500">
              <tr>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Latest order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-100">
              {customers.map((customer) => (
                <tr key={customer.email}>
                  <td className="py-4 font-semibold text-grey-900">{customer.name}</td>
                  <td className="py-4">{customer.email}</td>
                  <td className="py-4">{customer.lastOrder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
