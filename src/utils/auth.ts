import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export async function signInWithGoogle(supabase: SupabaseClient) {
  const res = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (res.error) {
    throw res.error;
  }

  return res.data;
}

export async function signOut(supabase: SupabaseClient) {
  const { error } = await supabase.auth.signOut();
  return error;
}