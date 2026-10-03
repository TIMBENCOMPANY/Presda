-- Run in the Supabase SQL editor or execute_sql. ALL test writes roll back.
begin;
set local role service_role;
do $$
declare r jsonb; before_count bigint; i integer;
begin
  select casablanca+madrid into before_count from public.reader_polls where id='world-cup-final-2030';
  perform public.presda_poll_submit('world-cup-final-2030',repeat('a',64),repeat('b',64),'view','en');
  perform public.presda_poll_submit('world-cup-final-2030',repeat('a',64),repeat('b',64),'view','ar');
  r := public.presda_poll_submit('world-cup-final-2030',repeat('a',64),repeat('b',64),'casablanca','en');
  assert (r->>'accepted')::boolean and (r->>'total')::bigint=before_count+1, 'Vote persisted and counted';
  r := public.presda_poll_submit('world-cup-final-2030',repeat('a',64),repeat('b',64),'madrid','fr');
  assert not (r->>'accepted')::boolean and r->>'choice'='casablanca' and (r->>'total')::bigint=before_count+1, 'Duplicate cannot count or switch sides';
  assert (select count(*) from public.reader_poll_events where voter_hash=repeat('a',64))=3, 'One view, vote and completed event';
  for i in 1..9 loop
    r := public.presda_poll_submit('world-cup-final-2030',md5(i::text)||md5(i::text),repeat('b',64),'madrid','es');
    assert (r->>'accepted')::boolean, 'Ten network votes allowed';
  end loop;
  r := public.presda_poll_submit('world-cup-final-2030',repeat('c',64),repeat('b',64),'madrid','ar');
  assert (r->>'limited')::boolean, 'Eleventh network vote is blocked';
  r := public.presda_poll_status('world-cup-final-2030',repeat('a',64));
  assert (r->>'total')::bigint=before_count+10, 'Counters stay consistent';
  assert not has_table_privilege('anon','public.reader_poll_votes','select'), 'Anon cannot read voters';
  assert not has_function_privilege('anon','public.presda_poll_submit(text,text,text,text,text)','execute'), 'Anon cannot bypass server';
  assert not has_function_privilege('authenticated','public.presda_poll_submit(text,text,text,text,text)','execute'), 'Logged-in users cannot bypass server';
end $$;
rollback;
