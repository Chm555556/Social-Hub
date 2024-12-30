'use client';

import { ChatList } from '@/components/features/chat/ChatList';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';

export default function ChatPage() {
  const { user } = useSupabaseUser();

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">Stay connected with your friends</p>
      </div>
      {user ? (
        <ChatList />
      ) : (
        <p className="text-center text-muted-foreground">
          Please sign in to access messages
        </p>
      )}
    </div>
  );
}