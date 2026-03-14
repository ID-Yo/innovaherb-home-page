import Link from "next/link";
import { PropsWithChildren } from "react";
import { Container } from "@/components/ui/Container";

export function AdminShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-grey-50">
      <header className="border-b border-warm-200 bg-white">
        <Container className="flex items-center justify-between py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">InnoVAherb ops</p>
            <h1 className="font-display text-3xl text-grey-900">Admin console</h1>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium text-grey-700">
            <Link href="/admin">Overview</Link>
            <Link href="/admin/orders">Orders</Link>
            <Link href="/admin/products">Products</Link>
            <Link href="/admin/customers">Customers</Link>
          </nav>
        </Container>
      </header>
      <Container className="py-10">{children}</Container>
    </div>
  );
}
