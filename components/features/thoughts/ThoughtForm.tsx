'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/lib/api/supabase-client';
import { useToast } from '@/hooks/use-toast';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';

export function ThoughtForm() {
  const [content, setContent] = useState('');
  const [posting, setPosting] = useState(false);
  const { toast } = useToast();
  const { user } = useSupabaseUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !user) return;

    try {
      setPosting(true);
      await supabase.from('posts').insert({
        user_id: user.id,
        type: 'thought',
        content: content.trim(),
      });

      setContent('');
      toast({
        title: 'Success',
        description: 'Thought posted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to post thought',
        variant: 'destructive',
      });
    } finally {
      setPosting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Share your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px]"
      />
      <Button type="submit" disabled={posting || !content.trim()}>
        {posting ? 'Posting...' : 'Post Thought'}
      </Button>
    </form>
  );
}