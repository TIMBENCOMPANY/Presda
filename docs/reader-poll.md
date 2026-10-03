# World Cup 2030 reader poll

Only `casablanca-madrid-2030-world-cup-final` renders the poll, in all four existing editions. All editions share `world-cup-final-2030`. Article text, SEO metadata, schema, canonical URLs and hreflang are unchanged. The unofficial, self-selected result panel uses `data-nosnippet`; it is not a FIFA decision or a representative survey.

## Data and security

Apply the committed Supabase migration before publishing the component. The server reuses `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` already configured for the newsletter. Neither is added to client code. Changing the service key invalidates existing poll cookies, so preserve a key rotation plan if rotating credentials.

Votes use an HMAC-signed HttpOnly, SameSite=Lax browser cookie, Secure on HTTPS, valid for one year. Only hashed voter identifiers are stored. A unique database key prevents duplicate or concurrent submissions from counting twice. Votes cannot be changed. The same cookie works across language routes. Clearing cookies or switching devices can bypass browser identity, so this is reasonable abuse protection, not verified-person voting.

The server uses Vercel's trusted client IP header, HMAC-hashes it, and applies durable database limits of 10 new votes and 120 submissions/views per network per hour. Shared networks can reach this limit. Raw IPs are never stored by this feature. Rate buckets expire after 48 hours and are removed on subsequent submissions. Same-origin JSON, input allowlists, a 1 KiB body limit and timeouts protect the API. Database tables have RLS with no public policies and no anon/authenticated grants. RPCs are security-invoker and executable only by service_role. All vote, counter and completion-event writes are atomic.

Results refresh every 15 seconds only after voting while the poll and tab are visible. Failures preserve confirmed results with a stale notice; no fabricated values or optimistic votes. Animated bars use a common 0 to 100 percent scale, numeric counts and reduced-motion support.

## Analytics

Events are persisted in Supabase, avoiding Vercel's paid custom-event requirement. `poll_view` means the poll was visible and its connection initialized, once per browser across reloads/locales. `vote_casablanca` or `vote_madrid` and `poll_completed` are recorded once for a successful database insert, never for a rejected duplicate. No raw IP, cookie or browser fingerprint is included in analytics.

Use the Supabase SQL editor to inspect totals:

```sql
select event, locale, count(*) as events
from public.reader_poll_events
where poll_id = 'world-cup-final-2030'
group by event, locale order by event, locale;
```

## Validation

Run `node tools/test-reader-poll.cjs`, execute `tools/test-reader-poll.sql` (transactional rollback, no published test votes), and run the production build. Browser checks should cover selection, submission, results, duplicate/reload, language changes, network failure, keyboard controls, reduced motion, mobile widths and no horizontal overflow. Use a local mocked database for browser submissions, never seed fake production votes.
