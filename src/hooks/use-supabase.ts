import { SupabaseContext } from "@/components/providers/supabase-provider";
import { useContext } from "react";

export default function useSupabase() {
  const supabaseContext = useContext(SupabaseContext);

  if (supabaseContext === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return supabaseContext;
}