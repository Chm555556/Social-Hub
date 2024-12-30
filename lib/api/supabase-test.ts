import { supabase } from './supabase-client';

export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase.from('profiles').select('count').single();
    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Supabase connection error:', error);
    return false;
  }
}