-- Operational hardening for production commerce and enquiry traffic.
-- Review locally and apply through the Supabase migration workflow.

create index if not exists enquiries_created_status_idx
  on public.enquiries(created_at desc, status);

create index if not exists stripe_events_status_created_idx
  on public.stripe_events(processing_status, created_at desc);

create index if not exists orders_payment_intent_idx
  on public.orders(stripe_payment_intent_id)
  where stripe_payment_intent_id is not null;

create index if not exists orders_checkout_session_idx
  on public.orders(stripe_checkout_session_id)
  where stripe_checkout_session_id is not null;

alter table public.enquiries
  add constraint enquiries_service_length check (char_length(service) between 2 and 100);

alter table public.stripe_events
  add constraint stripe_events_attempt_limit check (attempt_count <= 100);
