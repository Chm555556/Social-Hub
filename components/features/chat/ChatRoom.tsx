'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/api/supabase-client';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface Message {
  id: string;
  content: string;
  sender_id: string;
  created_at: string;
}

export function ChatRoom({ receiverId }: { receiverId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const { user } = useSupabaseUser();

  useEffect(() => {
    if (!user) return;

    const fetchMessages = async () => {
      const { data } = await supabase
        .from('chats')
        .select('*')
        .or(`sender_id.eq.${user.id},receiver_id.eq.${user.id}`)
        .order('created_at', { ascending: true });

      if (data) setMessages(data);
    };

    fetchMessages();

    const subscription = supabase
      .channel('chats')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chats' }, 
        payload => {
          setMessages(current => [...current, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [user, receiverId]);

  const sendMessage = async () => {
    if (!user || !newMessage.trim()) return;

    try {
      setSending(true);
      await supabase.from('chats').insert({
        content: newMessage.trim(),
        sender_id: user.id,
        receiver_id: receiverId,
      });
      setNewMessage('');
    } finally {
      setSending(false);
    }
  };

  if (!user) return null;

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            content={message.content}
            isReceived={message.sender_id === receiverId}
          />
        ))}
      </div>
      <ChatInput
        value={newMessage}
        onChange={setNewMessage}
        onSubmit={sendMessage}
        disabled={sending}
      />
    </div>
  );
}