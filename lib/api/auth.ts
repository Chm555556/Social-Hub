import { supabase } from './supabase-client';
import { signUpSchema, signInSchema } from '../validations/auth';
import { z } from 'zod';

export async function signUp(data: z.infer<typeof signUpSchema>) {
  const { email, password, username } = signUpSchema.parse(data);

  const { data: existingUser, error: checkError } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single();

  if (existingUser) {
    throw new Error('Username already taken');
  }

  const { data: authData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (signUpError) {
    throw signUpError;
  }

  return authData;
}

export async function signIn(data: z.infer<typeof signInSchema>) {
  const { email, password } = signInSchema.parse(data);

  const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    throw signInError;
  }

  return authData;
}