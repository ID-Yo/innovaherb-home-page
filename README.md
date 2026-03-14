# InnoVAherb Storefront

Next.js storefront for InnoVAherb with:

- guest checkout
- Stripe Checkout integration
- Supabase-backed order data and admin auth
- admin console for orders, products, and customers
- SEO-managed route metadata and canonical URLs

## Setup

1. Copy `.env.example` to `.env.local`.
2. Create a new Supabase project.
3. Apply the SQL in `supabase/migrations/20260314_create_commerce_schema.sql`.
4. Apply `supabase/seed.sql`.
5. Run `node scripts/seed-admin.mjs` to create the temporary admin user.
6. Configure Stripe test keys and webhook secret.

## Commands

```bash
npm install
npm run dev
npm run build
npm run test:run
```
