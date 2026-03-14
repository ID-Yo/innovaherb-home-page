insert into public.products (slug, sku, category, price_cents, image_path, accent_class, published)
values
  ('lions-mane', 'IH-LM-001', 'Focus', 1998, '/brand_assets/Lions_mane_front.webp', 'text-brand-600', true),
  ('cordyceps', 'IH-CO-001', 'Energy', 1998, '/brand_assets/Cordycepts_front.webp', 'text-earth-500', true),
  ('reishi', 'IH-RE-001', 'Balance', 1998, '/brand_assets/Reishi_front.webp', 'text-brand-600', true),
  ('shiitake', 'IH-SH-001', 'Vitality', 1998, '/brand_assets/Shiitake_front.webp', 'text-earth-600', true),
  ('chaga', 'IH-CH-001', 'Shield', 1998, '/brand_assets/Chaga_front.webp', 'text-warm-600', true),
  ('mix', 'IH-MX-001', 'Complete', 1998, '/brand_assets/Mix_front.webp', 'text-brand-700', true)
on conflict (slug) do update
set price_cents = excluded.price_cents,
    published = excluded.published;

insert into public.inventory (product_slug, stock_on_hand)
values
  ('lions-mane', 34),
  ('cordyceps', 27),
  ('reishi', 19),
  ('shiitake', 22),
  ('chaga', 16),
  ('mix', 42)
on conflict (product_slug) do update
set stock_on_hand = excluded.stock_on_hand;
