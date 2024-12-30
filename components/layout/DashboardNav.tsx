// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Camera, MessageCircle, PenLine, LogOut, MessageCircleCode } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';
// import { supabase } from '@/lib/api/supabase-client';
// import { cn } from '@/lib/utils';

// const navItems = [
//   { href: '/photos', label: 'Photos', icon: Camera },
//   { href: '/thoughts', label: 'Thoughts', icon: PenLine },
//   { href: '/chat', label: 'Messages', icon: MessageCircleCode },
// ];

// export function DashboardNav() {
//   const pathname = usePathname();
//   const { user } = useSupabaseUser();

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//   };

//   if (!user) return null;

//   return (
//     <nav className="flex items-center gap-1 lg:gap-2">
//       {navItems.map(({ href, label, icon: Icon }) => (
//         <Link key={href} href={href}>
//           <Button
//             variant={pathname === href ? 'default' : 'ghost'}
//             className={cn(
//               'gap-2',
//               pathname === href ? 'bg-primary text-primary-foreground' : ''
//             )}
//           >
//             <Icon className="w-4 h-4" />
//             <span className="hidden lg:inline">{label}</span>
//           </Button>
//         </Link>
//       ))}
//       <Button variant="ghost" className="gap-2" onClick={handleSignOut}>
//         <LogOut className="w-4 h-4" />
//         <span className="hidden lg:inline">Sign Out</span>
//       </Button>
//     </nav>
//   );
// }

'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Camera, MessageCircle, PenLine, LogOut, MessageCircleCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';
import { supabase } from '@/lib/api/supabase-client';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/photos', label: 'Photos', icon: Camera },
  { href: '/thoughts', label: 'Thoughts', icon: PenLine },
  { href: '/chat', label: 'Messages', icon: MessageCircleCode },
];

export function DashboardNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useSupabaseUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/'); // Redirect to the home page after signing out
  };

  if (!user) return null;

  return (
    <nav className="flex items-center gap-1 lg:gap-2">
      {navItems.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href}>
          <Button
            variant={pathname === href ? 'default' : 'ghost'}
            className={cn(
              'gap-2',
              pathname === href ? 'bg-primary text-primary-foreground' : ''
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden lg:inline">{label}</span>
          </Button>
        </Link>
      ))}
      <Button variant="ghost" className="gap-2" onClick={handleSignOut}>
        <LogOut className="w-4 h-4" />
        <span className="hidden lg:inline">Sign Out</span>
      </Button>
    </nav>
  );
}