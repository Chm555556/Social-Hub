'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabaseUser } from './use-supabase-user';

export function useAuthRedirect(redirectTo: string = '/dashboard') {
  const { user, loading } = useSupabaseUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push(redirectTo);
    }
  }, [user, loading, redirectTo, router]);

  return { user, loading };
}