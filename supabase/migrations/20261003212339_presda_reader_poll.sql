create table public.reader_polls (
  id text primary key,
  casablanca bigint not null default 0 check (casablanca >= 0),
  madrid bigint not null default 0 check (madrid >= 0)
);
insert into public.reader_polls(id) values ('world-cup-final-2030');
create table public.reader_poll_votes (
  poll_id text not null references public.reader_polls(id),
  voter_hash text not null check (voter_hash ~ '^[a-f0-9]{64}$'),
  choice text not null check (choice in ('casablanca','madrid')),
  created_at timestamptz not null default now(),
  primary key(poll_id, voter_hash)
);
create table public.reader_poll_events (
  poll_id text not null references public.reader_polls(id),
  voter_hash text not null check (voter_hash ~ '^[a-f0-9]{64}$'),
  event text not null check (event in ('poll_view','vote_casablanca','vote_madrid','poll_completed')),
  locale text not null check (locale in ('en','fr','ar','es')),
  created_at timestamptz not null default now(),
  primary key(poll_id, voter_hash, event)
);
create table public.reader_poll_limits (
  network_hash text not null check (network_hash ~ '^[a-f0-9]{64}$'),
  bucket timestamptz not null,
  attempts integer not null default 0,
  votes integer not null default 0,
  primary key(network_hash,bucket)
);
create index reader_poll_limits_expiry on public.reader_poll_limits(bucket);
alter table public.reader_polls enable row level security;
alter table public.reader_poll_votes enable row level security;
alter table public.reader_poll_events enable row level security;
alter table public.reader_poll_limits enable row level security;
revoke all on public.reader_polls, public.reader_poll_votes, public.reader_poll_events, public.reader_poll_limits from public, anon, authenticated;
grant select, insert, update, delete on public.reader_polls, public.reader_poll_votes, public.reader_poll_events, public.reader_poll_limits to service_role;

create function public.presda_poll_status(p_poll text, p_voter text)
returns jsonb language sql stable security invoker set search_path = '' as $$
  select jsonb_build_object('casablanca',p.casablanca,'madrid',p.madrid,
    'total',p.casablanca+p.madrid,'choice',v.choice)
  from public.reader_polls p left join public.reader_poll_votes v
    on v.poll_id=p.id and v.voter_hash=p_voter where p.id=p_poll;
$$;

create function public.presda_poll_submit(p_poll text, p_voter text, p_network text, p_action text, p_locale text)
returns jsonb language plpgsql security invoker set search_path = '' as $$
declare
  hour_bucket timestamptz := date_trunc('hour',now());
  used public.reader_poll_limits%rowtype;
  inserted integer;
begin
  if p_voter is null or p_voter !~ '^[a-f0-9]{64}$' or p_network is null or p_network !~ '^[a-f0-9]{64}$'
    or p_action is null or p_action not in ('view','casablanca','madrid')
    or p_locale is null or p_locale not in ('en','fr','ar','es') then
    raise exception 'Invalid poll input' using errcode='22023';
  end if;
  -- Serialize attempts from the same network, including simultaneous requests.
  insert into public.reader_poll_limits(network_hash,bucket,attempts)
    values(p_network,hour_bucket,1)
    on conflict(network_hash,bucket) do update set attempts=public.reader_poll_limits.attempts+1
    returning * into used;
  delete from public.reader_poll_limits where bucket < now()-interval '48 hours';
  if used.attempts > 120 then
    return jsonb_build_object('limited',true);
  end if;
  if p_action='view' then
    insert into public.reader_poll_events(poll_id,voter_hash,event,locale)
      values(p_poll,p_voter,'poll_view',p_locale) on conflict do nothing;
    return public.presda_poll_status(p_poll,p_voter);
  end if;
  -- Serialize counter updates. Cookie uniqueness is also enforced by the PK.
  perform 1 from public.reader_polls where id=p_poll for update;
  if not found then raise exception 'Unknown poll' using errcode='22023'; end if;
  if exists(select 1 from public.reader_poll_votes where poll_id=p_poll and voter_hash=p_voter) then
    return public.presda_poll_status(p_poll,p_voter) || jsonb_build_object('accepted',false);
  end if;
  if used.votes >= 10 then return jsonb_build_object('limited',true); end if;
  insert into public.reader_poll_votes(poll_id,voter_hash,choice)
    values(p_poll,p_voter,p_action) on conflict do nothing;
  get diagnostics inserted = row_count;
  if inserted=1 then
    update public.reader_polls set
      casablanca=casablanca+case when p_action='casablanca' then 1 else 0 end,
      madrid=madrid+case when p_action='madrid' then 1 else 0 end where id=p_poll;
    update public.reader_poll_limits set votes=votes+1 where network_hash=p_network and bucket=hour_bucket;
    insert into public.reader_poll_events(poll_id,voter_hash,event,locale) values
      (p_poll,p_voter,'vote_'||p_action,p_locale),(p_poll,p_voter,'poll_completed',p_locale)
      on conflict do nothing;
  end if;
  return public.presda_poll_status(p_poll,p_voter) || jsonb_build_object('accepted',inserted=1);
end;
$$;
revoke all on function public.presda_poll_status(text,text), public.presda_poll_submit(text,text,text,text,text) from public, anon, authenticated;
grant execute on function public.presda_poll_status(text,text), public.presda_poll_submit(text,text,text,text,text) to service_role;
