// import { supabase } from './supabase-client';
// import { signUpSchema, signInSchema } from '../validations/auth';
// import { z } from 'zod';

// export async function signUp(data: z.infer<typeof signUpSchema>) {
//   const { email, password, username } = signUpSchema.parse(data);

//   const { data: existingUser, error: checkError } = await supabase
//     .from('profiles')
//     .select('username')
//     .eq('username', username)
//     .single();

//   if (existingUser) {
//     throw new Error('Username already taken');
//   }

//   const { data: authData, error: signUpError } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         username,
//       },
//     },
//   });

//   if (signUpError) {
//     throw signUpError;
//   }

//   return authData;
// }

// export async function signIn(data: z.infer<typeof signInSchema>) {
//   const { email, password } = signInSchema.parse(data);

//   const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (signInError) {
//     throw signInError;
//   }

//   return authData;
// }

// lib/api/auth.ts
import { supabase } from './supabase-client';
import { z } from 'zod';

// Validation schemas
export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Sign Up Function
export async function signUp(data: z.infer<typeof signUpSchema>) {
  try {
    const { email, password, username } = signUpSchema.parse(data);

    // Check if the username is already taken
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('username')
      .eq('username', username)
      .single();

    if (existingUser) {
      throw new Error('Username already taken');
    }

    // Sign up with Supabase Auth
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
      console.error('Supabase Auth Error:', signUpError);
      throw new Error(signUpError.message);
    }

    // Insert user data into the `users` table
    const { data: userData, error: userError } = await supabase
      .from('users')
      .insert([
        {
          id: authData.user?.id, // Use the user ID from Supabase Auth
          email,
          password_hash: password, // In a real app, hash the password before storing it
          username,
        },
      ])
      .select();

    if (userError) {
      console.error('Database Insert Error:', userError);
      throw new Error(userError.message);
    }

    return authData;
  } catch (err) {
    console.error('Sign Up Error:', err);
    throw err;
  }
}

// Sign In Function
export async function signIn(data: z.infer<typeof signInSchema>) {
  try {
    const { email, password } = signInSchema.parse(data);

    // Sign in with Supabase Auth
    const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      console.error('Supabase Auth Error:', signInError);
      throw new Error(signInError.message);
    }

    return authData;
  } catch (err) {
    console.error('Sign In Error:', err);
    throw err;
  }
}