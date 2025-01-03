// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { signIn, signUp } from '@/lib/api/auth';
// import { useToast } from '@/hooks/use-toast';

// interface AuthFormProps {
//   type: 'login' | 'signup';
// }

// export function AuthForm({ type }: AuthFormProps) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       const formData = new FormData(e.currentTarget);
//       const data = {
//         email: formData.get('email') as string,
//         password: formData.get('password') as string,
//         ...(type === 'signup' && { username: formData.get('username') as string }),
//       };

//       if (type === 'signup') {
//         await signUp(data);
//         toast({
//           title: 'Account created successfully',
//           description: 'Please sign in with your new account',
//         });
//         router.push('/login');
//       } else {
//         await signIn(data);
//         toast({
//           title: 'Welcome back!',
//           description: 'You have successfully signed in',
//         });
//         router.push('/dashboard');
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'An error occurred');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {error && (
//         <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
//           {error}
//         </div>
//       )}

//       {type === 'signup' && (
//         <div className="space-y-2">
//           <Input
//             name="username"
//             type="text"
//             placeholder="Username"
//             required
//             minLength={3}
//             maxLength={20}
//             pattern="^[a-zA-Z0-9_]+$"
//             title="Username can only contain letters, numbers, and underscores"
//           />
//         </div>
//       )}

//       <div className="space-y-2">
//         <Input
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//         />
//       </div>

//       <div className="space-y-2">
//         <Input
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           minLength={8}
//           pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$"
//           title="Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
//         />
//       </div>

//       <Button type="submit" className="w-full" disabled={loading}>
//         {loading
//           ? type === 'login' ? 'Signing in...' : 'Creating account...'
//           : type === 'login' ? 'Sign in' : 'Create account'}
//       </Button>
//     </form>
//   );
// }
'use client'; // Move this to the top of the file

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn, signUp } from '@/lib/api/auth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';

interface AuthFormProps {
  type: 'login' | 'signup';
}

interface SignUpData {
  email: string;
  password: string;
  username: string;
}

interface SignInData {
  email: string;
  password: string;
}

export function AuthForm({ type }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      if (type === 'signup') {
        const signUpData: SignUpData = {
          email: formData.get('email') as string,
          password: formData.get('password') as string,
          username: formData.get('username') as string,
        };

        await signUp(signUpData);
        toast({
          title: 'Account created successfully',
          description: 'Please sign in with your new account',
        });
        router.push('/login');
      } else {
        const signInData: SignInData = {
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        };

        await signIn(signInData);
        toast({
          title: 'Welcome back!',
          description: 'You have successfully signed in',
        });
        router.push('/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      toast({
        title: 'Error',
        description: err instanceof Error ? err.message : 'An error occurred',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}

      {type === 'signup' && (
        <div className="space-y-2">
          <Input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
            pattern="^[a-zA-Z0-9_]+$"
            title="Username can only contain letters, numbers, and underscores"
          />
        </div>
      )}

      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>

      <div className="space-y-2">
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={8}
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$"
          title="Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading
          ? type === 'login' ? 'Signing in...' : 'Creating account...'
          : type === 'login' ? 'Sign in' : 'Create account'}
      </Button>
    </form>
  );
}