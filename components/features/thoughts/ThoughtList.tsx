'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle, Repeat2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Thought {
  id: string;
  content: string;
  username: string;
  likes: number;
  comments: number;
  reposts: number;
  timestamp: string;
}

export function ThoughtList() {
  const [thoughts] = useState<Thought[]>([
    {
      id: '1',
      content: 'Just launched my new portfolio website! Check it out 🚀',
      username: '@webdev',
      likes: 145,
      comments: 23,
      reposts: 12,
      timestamp: '2h ago',
    },
    {
      id: '2',
      content: 'The sunrise this morning was absolutely breathtaking! 🌅',
      username: '@nature_lover',
      likes: 89,
      comments: 7,
      reposts: 4,
      timestamp: '4h ago',
    },
    {
      id: '3',
      content: 'Learning Next.js has been an amazing journey so far!',
      username: '@coder',
      likes: 234,
      comments: 15,
      reposts: 8,
      timestamp: '6h ago',
    },
  ]);

  return (
    <div className="space-y-4">
      {thoughts.map((thought) => (
        <Card key={thought.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-semibold">{thought.username}</p>
              <p className="text-sm text-muted-foreground">{thought.timestamp}</p>
            </div>
          </div>
          <p className="mb-4">{thought.content}</p>
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="w-4 h-4" /> {thought.likes}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="w-4 h-4" /> {thought.comments}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Repeat2 className="w-4 h-4" /> {thought.reposts}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}