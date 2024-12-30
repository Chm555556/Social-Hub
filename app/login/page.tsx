'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuthRedirect } from '@/lib/hooks/use-auth-redirect';
import { Camera, MessageCircle, PenLine } from 'lucide-react';

export default function LoginPage() {
  useAuthRedirect();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">

{/*logo*/}
<div className="flex flex-col items-center justify-center space-y-8">
          {/* App Logo/Icon */}
          <div className="relative w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="relative w-24 h-24">
                {/* Camera Icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 bg-primary/90 p-3 rounded-full shadow-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                {/* Message Icon */}
                <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 bg-primary/90 p-3 rounded-full shadow-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                {/* Thought Icon */}
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-primary/90 p-3 rounded-full shadow-lg">
                  <PenLine className="w-6 h-6 text-white" />
                </div>
                {/* Connecting Lines */}
                <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
              </div>
            </div>
          </div>
          </div>
{/* end */}

          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>

        <AuthForm type="login" />

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}