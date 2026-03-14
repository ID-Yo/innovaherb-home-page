import { AdminShell } from "@/components/admin/AdminShell";
import { products } from "@/lib/products";

export default function AdminProductsPage() {
  return (
    <AdminShell>
      <div className="rounded-[2rem] bg-white p-6 shadow-elevated">
        <h2 className="font-display text-3xl text-grey-900">Products</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-grey-500">
              <tr>
                <th className="pb-3">Product</th>
                <th className="pb-3">SKU</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Stock</th>
                <th className="pb-3">Published</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-warm-100">
              {products.map((product) => (
                <tr key={product.slug}>
                  <td className="py-4 font-semibold text-grey-900">{product.localized.en.name}</td>
                  <td className="py-4">{product.sku}</td>
                  <td className="py-4">€{(product.priceCents / 100).toFixed(2)}</td>
                  <td className="py-4">{product.stock}</td>
                  <td className="py-4">{product.published ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
