'use client';

import useSupabase from "@/hooks/use-supabase";
import { signInWithGoogle } from "@/utils/auth";

export default function SignInButton() {
  const { supabase } = useSupabase();

  return (
    <button
      className="bg-sky-400 max-w-fit max-h-fit rounded px-4 py-2 text-sky-900"
      onClick={e => {
        e.preventDefault();
        signInWithGoogle(supabase);
      }}
    >
      Sign in with Google
    </button>
  );
}