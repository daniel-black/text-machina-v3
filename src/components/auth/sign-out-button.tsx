'use client';

import useSupabase from "@/hooks/use-supabase";
import { signOut } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const { supabase } = useSupabase();
  const router = useRouter();

  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const signOutError = await signOut(supabase);

    if (signOutError) {
      throw signOutError;
    }

    router.push('/');
  }

  return (
    <button
      className="bg-zinc-400 max-w-fit max-h-fit rounded px-4 py-2 text-zinc-900"
      onClick={handleClick}
    >
      Sign out
    </button>
  );
}