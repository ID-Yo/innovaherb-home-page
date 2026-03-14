import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="bg-grey-900 pb-8 pt-16 text-warm-200">
      <Container>
        <div className="grid gap-12 border-b border-grey-700/50 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <img
              src="/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
              alt="InnoVAherb logo"
              className="mb-4 h-8 w-auto brightness-0 invert opacity-80"
            />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-warm-300">
              Nature's Intelligence, Perfected. Premium Bulgarian mushroom sprays designed for modern daily rituals.
            </p>
            <div className="flex gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grey-800 text-xs font-bold">IG</div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-grey-800 text-xs font-bold">FB</div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold tracking-heading text-white">Shop</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="text-warm-300 transition-colors hover:text-white">
                    {product.localized.en.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold tracking-heading text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-warm-300 transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="/blog" className="text-warm-300 transition-colors hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-warm-300 transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold tracking-heading text-white">Support</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/shipping-returns" className="text-warm-300 transition-colors hover:text-white">Shipping and Returns</Link></li>
              <li><Link href="/privacy-policy" className="text-warm-300 transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-warm-300 transition-colors hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-xs text-grey-400">Copyright 2026 InnoVAherb. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
