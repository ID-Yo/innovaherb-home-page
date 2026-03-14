import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-grey-900 py-14 text-warm-200">
      <Container className="grid gap-10 lg:grid-cols-4">
        <div className="space-y-4">
          <img
            src="/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
            alt="InnoVAherb"
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="max-w-xs text-sm leading-6 text-warm-100/80">
            Premium Bulgarian mushroom extract sprays for focus, energy, vitality, balance, and everyday support.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl text-white">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/#products">All products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/checkout">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/shipping-returns">Shipping & Returns</Link></li>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl text-white">Admin</h3>
          <p className="mt-4 text-sm text-warm-100/80">
            Secure internal access for order operations, stock updates, and customer support.
          </p>
          <Link href="/admin/login" className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-grey-900">
            Admin login
          </Link>
        </div>
      </Container>
    </footer>
  );
}
