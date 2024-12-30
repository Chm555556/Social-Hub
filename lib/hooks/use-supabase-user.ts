'use client';

import { useSupabase } from '../providers/supabase-provider';

export function useSupabaseUser() {
  const context = useSupabase();
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
}