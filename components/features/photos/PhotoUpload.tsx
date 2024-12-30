// 'use client';

// import { useState } from 'react';
// import { Upload } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
// import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';
// import { uploadFile } from '@/lib/utils/file-upload';
// import { supabase } from '@/lib/api/supabase-client';

// export function PhotoUpload() {
//   const [uploading, setUploading] = useState(false);
//   const { toast } = useToast();
//   const { user } = useSupabaseUser();

//   const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     try {
//       if (!user) return;
//       setUploading(true);
      
//       const file = event.target.files?.[0];
//       if (!file) return;

//       const publicUrl = await uploadFile(file, user.id);
      
//       await supabase.from('posts').insert({
//         user_id: user.id,
//         type: 'photo',
//         media_url: publicUrl,
//       });

//       toast({
//         title: 'Success',
//         description: 'Photo uploaded successfully',
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to upload photo',
//         variant: 'destructive',
//       });
//     } finally {
//       setUploading(false);
//     }
//   };

//   if (!user) return null;

//   return (
//     <Button
//       variant="outline"
//       className="relative"
//       disabled={uploading}
//     >
//       <input
//         type="file"
//         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//         onChange={handleUpload}
//         accept="image/*"
//       />
//       <Upload className="w-4 h-4 mr-2" />
//       {uploading ? 'Uploading...' : 'Upload Photo'}
//     </Button>
//   );
// }

'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';
import { uploadFile } from '@/lib/utils/file-upload';
import { supabase } from '@/lib/api/supabase-client';

export function PhotoUpload() {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const { user } = useSupabaseUser();

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!user) return;
      setUploading(true);
      
      const file = event.target.files?.[0];
      if (!file) return;

      const publicUrl = await uploadFile(file, user.id);
      
      await supabase.from('posts').insert({
        user_id: user.id,
        type: 'photo',
        media_url: publicUrl,
      });

      toast({
        title: 'Success',
        description: 'Photo uploaded successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload photo',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleButtonClick = () => {
    window.location.href = 'https://picsinsta.netlify.app/';
  };

  if (!user) return null;

  return (
    <Button
      variant="outline"
      className="relative"
      disabled={uploading}
      onClick={handleButtonClick}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleUpload}
        accept="image/*"
      />
      <Upload className="w-4 h-4 mr-2" />
      {uploading ? 'Uploading...' : 'Upload Photo'}
    </Button>
  );
}