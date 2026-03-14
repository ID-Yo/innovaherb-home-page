create extension if not exists "pgcrypto";

create table if not exists public.products (
  slug text primary key,
  sku text not null unique,
  category text not null,
  price_cents integer not null,
  image_path text not null,
  accent_class text not null,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.product_localizations (
  product_slug text not null references public.products(slug) on delete cascade,
  locale text not null check (locale in ('en', 'bg')),
  name text not null,
  short_description text not null,
  hero_title text not null,
  hero_description text not null,
  tagline text not null,
  seo_title text not null,
  seo_description text not null,
  benefits text[] not null default '{}',
  ingredients text[] not null default '{}',
  usage text[] not null default '{}',
  primary key (product_slug, locale)
);

create table if not exists public.inventory (
  product_slug text primary key references public.products(slug) on delete cascade,
  stock_on_hand integer not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text not null,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.customer_addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  line_1 text not null,
  line_2 text,
  city text not null,
  postal_code text not null,
  country_code text not null check (country_code = 'BG'),
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  shipping_line_1 text not null,
  shipping_line_2 text,
  shipping_city text not null,
  shipping_postal_code text not null,
  shipping_country text not null check (shipping_country = 'BG'),
  locale text not null default 'en',
  status text not null default 'draft',
  payment_status text not null default 'pending',
  subtotal_cents integer not null default 0,
  shipping_cents integer not null default 0,
  total_cents integer not null default 0,
  item_count integer not null default 0,
  stripe_checkout_session_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_slug text not null references public.products(slug),
  product_name text not null,
  quantity integer not null,
  unit_price_cents integer not null
);

create table if not exists public.order_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  event_type text not null,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.stripe_checkout_sessions (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  session_id text not null unique,
  session_url text,
  status text,
  created_at timestamptz not null default now()
);

create table if not exists public.stripe_webhook_events (
  id uuid primary key default gen_random_uuid(),
  stripe_event_id text not null unique,
  event_type text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text not null,
  role text not null default 'admin',
  is_temporary_password boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.admin_notes (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  created_by uuid references public.admin_users(user_id) on delete set null,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.products enable row level security;
alter table public.product_localizations enable row level security;
alter table public.inventory enable row level security;
alter table public.customers enable row level security;
alter table public.customer_addresses enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.order_events enable row level security;
alter table public.stripe_checkout_sessions enable row level security;
alter table public.stripe_webhook_events enable row level security;
alter table public.admin_users enable row level security;
alter table public.admin_notes enable row level security;

create policy "Public can read published products"
on public.products for select
using (published = true);

create policy "Public can read localizations for published products"
on public.product_localizations for select
using (
  exists (
    select 1
    from public.products
    where products.slug = product_localizations.product_slug
      and products.published = true
  )
);

create policy "Public can read inventory for published products"
on public.inventory for select
using (
  exists (
    select 1
    from public.products
    where products.slug = inventory.product_slug
      and products.published = true
  )
);

create policy "Admins manage products"
on public.products for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage product localizations"
on public.product_localizations for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage inventory"
on public.inventory for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins view customers"
on public.customers for select
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins view addresses"
on public.customer_addresses for select
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage orders"
on public.orders for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage order items"
on public.order_items for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage order events"
on public.order_events for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage stripe session data"
on public.stripe_checkout_sessions for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins manage stripe events"
on public.stripe_webhook_events for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create policy "Admins view admins"
on public.admin_users for select
using (exists (select 1 from public.admin_users self where self.user_id = auth.uid()));

create policy "Admins manage notes"
on public.admin_notes for all
using (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()))
with check (exists (select 1 from public.admin_users where admin_users.user_id = auth.uid()));

create or replace function public.get_admin_order_detail(target_order_id uuid)
returns jsonb
language sql
security definer
set search_path = public
as $$
  with order_base as (
    select *
    from public.orders
    where id = target_order_id
  ),
  items as (
    select jsonb_agg(
      jsonb_build_object(
        'slug', product_slug,
        'productName', product_name,
        'quantity', quantity,
        'unitPriceCents', unit_price_cents
      )
      order by product_name
    ) as value
    from public.order_items
    where order_id = target_order_id
  ),
  timeline as (
    select jsonb_agg(
      jsonb_build_object(
        'type', event_type,
        'description', description,
        'createdAt', created_at
      )
      order by created_at desc
    ) as value
    from public.order_events
    where order_id = target_order_id
  ),
  notes as (
    select jsonb_agg(body order by created_at desc) as value
    from public.admin_notes
    where order_id = target_order_id
  )
  select jsonb_build_object(
    'id', order_base.id,
    'createdAt', order_base.created_at,
    'customerName', order_base.customer_name,
    'customerEmail', order_base.customer_email,
    'status', order_base.status,
    'paymentStatus', order_base.payment_status,
    'totalCents', order_base.total_cents,
    'itemCount', order_base.item_count,
    'shippingAddress', concat_ws(', ', order_base.shipping_line_1, order_base.shipping_line_2, order_base.shipping_city, order_base.shipping_postal_code, order_base.shipping_country),
    'items', coalesce(items.value, '[]'::jsonb),
    'timeline', coalesce(timeline.value, '[]'::jsonb),
    'stripeCheckoutUrl', (
      select session_url
      from public.stripe_checkout_sessions
      where order_id = order_base.id
      order by created_at desc
      limit 1
    ),
    'internalNotes', coalesce(notes.value, '[]'::jsonb)
  )
  from order_base, items, timeline, notes;
$$;

grant execute on function public.get_admin_order_detail(uuid) to authenticated;
