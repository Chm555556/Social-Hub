import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Allow access to home page
  if (req.nextUrl.pathname === '/') {
    return res;
  }

  // Redirect to login if accessing protected routes without auth
  if (!session && (
    req.nextUrl.pathname.startsWith('/dashboard') ||
    req.nextUrl.pathname.startsWith('/photos') ||
    req.nextUrl.pathname.startsWith('/thoughts') ||
    req.nextUrl.pathname.startsWith('/chat')
  )) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirect to dashboard if accessing auth pages while logged in
  if (session && (
    req.nextUrl.pathname.startsWith('/login') ||
    req.nextUrl.pathname.startsWith('/signup')
  )) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/photos/:path*',
    '/thoughts/:path*',
    '/chat/:path*',
    '/login',
    '/signup',
  ],
};