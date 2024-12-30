'use client';

import { ThoughtList } from '@/components/features/thoughts/ThoughtList';
import { ThoughtForm } from '@/components/features/thoughts/ThoughtForm';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';

export default function ThoughtsPage() {
  const { user } = useSupabaseUser();

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Thoughts</h1>
        <p className="text-muted-foreground">Share what's on your mind</p>
      </div>
      {user && (
        <div className="mb-8">
          <ThoughtForm />
        </div>
      )}
      <ThoughtList />
    </div>
  );
}