create extension if not exists citext with schema public;

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  status text not null default 'pending',
  source text not null default 'newsletter',
  created_at timestamptz not null default now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  constraint subscribers_status_check
    check (status in ('pending', 'confirmed', 'unsubscribed'))
);

alter table public.subscribers enable row level security;

revoke all on table public.subscribers from anon, authenticated;

drop policy if exists "No public subscriber reads" on public.subscribers;
drop policy if exists "No public subscriber writes" on public.subscribers;
