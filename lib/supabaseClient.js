import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const isSupabaseConfigured = Boolean(url && (serviceKey || anonKey));

export function getSupabaseAdmin() {
  if (!url || !(serviceKey || anonKey)) return null;
  return createClient(url, serviceKey || anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
