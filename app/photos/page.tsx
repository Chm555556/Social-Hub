'use client';

import { PhotoGrid } from '@/components/features/photos/PhotoGrid';
import { PhotoUpload } from '@/components/features/photos/PhotoUpload';
import { useSupabaseUser } from '@/lib/hooks/use-supabase-user';

export default function PhotosPage() {
  const { user } = useSupabaseUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Photos</h1>
        {user && <PhotoUpload />}
      </div>
      <PhotoGrid />
    </div>
  );
}