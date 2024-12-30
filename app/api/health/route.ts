import { NextResponse } from 'next/server';
import { testSupabaseConnection } from '@/lib/api/supabase-test';

export async function GET() {
  const isConnected = await testSupabaseConnection();
  
  if (!isConnected) {
    return NextResponse.json(
      { error: 'Database connection failed' },
      { status: 500 }
    );
  }

  return NextResponse.json({ status: 'healthy', database: 'connected' });
}