'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Circle } from 'lucide-react';

interface Chat {
  id: string;
  username: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar: string;
}

export function ChatList() {
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      username: 'Urmi Sharma',
      lastMessage: 'Hey, how are you doing?',
      timestamp: '2m ago',
      unread: true,
      avatar: 'https://ucarecdn.com/47d651fd-eb74-4d74-b414-25c51f8ba5e8/iooi.jpg',
    },
    {
      id: '2',
      username: '<Code-Chm/>',
      lastMessage: 'The project looks great!',
      timestamp: '1h ago',
      unread: false,
      avatar: 'https://ucarecdn.com/4f244a22-9344-483c-9c21-7c0e06e32400/c.jpg',
    },
    {
      id: '3',
      username: 'Emma Thompson',
      lastMessage: 'See you tomorrow!',
      timestamp: '3h ago',
      unread: true,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    },
  ]);

  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <Card
          key={chat.id}
          className="p-4 hover:bg-accent cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-4">
            <img
              src={chat.avatar}
              alt={chat.username}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{chat.username}</h3>
                <span className="text-sm text-muted-foreground">{chat.timestamp}</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground truncate">
                  {chat.lastMessage}
                </p>
                {chat.unread && (
                  <Circle className="w-2 h-2 fill-primary text-primary" />
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}