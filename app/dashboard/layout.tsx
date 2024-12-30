import Link from 'next/link';
import { DashboardNav } from '@/components/layout/DashboardNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Social Hub
            </Link>
            <DashboardNav />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}