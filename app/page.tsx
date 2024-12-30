import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Camera, MessageCircle, PenLine } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Social Hub
            </Link>
            <div className="space-x-2">
              <Link href="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">

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
          
            <h1 className="text-5xl font-bold mb-6">Connect, Share, Engage</h1>
            <h2 className="text-2xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to Social Hub
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our community to share your moments, express your thoughts, and connect with amazing people around the world.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Join Now
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Everything you need to connect</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-background p-6 rounded-lg text-center">
                <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Share Photos</h3>
                <p className="text-muted-foreground">Capture and share your precious moments with the world</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <PenLine className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Express Thoughts</h3>
                <p className="text-muted-foreground">Share your ideas and connect with like-minded people</p>
              </div>
              <div className="bg-background p-6 rounded-lg text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Chat Instantly</h3>
                <p className="text-muted-foreground">Stay connected with friends through real-time messaging</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}