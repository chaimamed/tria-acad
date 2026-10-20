create table if not exists public.course_registrations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  course_id text not null,
  course_title text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.course_registrations enable row level security;

drop policy if exists "Allow public course registration inserts" on public.course_registrations;
create policy "Allow public course registration inserts"
  on public.course_registrations
  for insert
  to anon, authenticated
  with check (true);
