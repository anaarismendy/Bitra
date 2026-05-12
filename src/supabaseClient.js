/** Cliente Supabase del front: solo flujos de sesión (p. ej. signIn). Sin signUp en esta app. */
import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function getSupabase() {
  return createClient(url ?? '', anonKey ?? '', {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}

export function supabaseConfigured() {
  return Boolean(url && anonKey);
}
