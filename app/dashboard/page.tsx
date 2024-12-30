'use client';

import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';
import { Card } from '@/components/ui/card';
import { Camera, MessageCircle, PenLine } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useSupabaseUser();

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome Back!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/photos">
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center space-y-4">
              <Camera className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Photos</h2>
                <p className="text-muted-foreground">Share your moments</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/thoughts">
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center space-y-4">
              <PenLine className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Thoughts</h2>
                <p className="text-muted-foreground">Express yourself</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/chat">
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center space-y-4">
              <MessageCircle className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Messages</h2>
                <p className="text-muted-foreground">Connect with friends</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}