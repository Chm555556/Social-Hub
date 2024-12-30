// 'use client';

// import { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Heart, MessageCircle, Share2 } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface Photo {
//   id: string;
//   imageUrl: string;
//   likes: number;
//   comments: number;
//   username: string;
// }

// export function PhotoGrid() {
//   const [photos] = useState<Photo[]>([
//     {
//       id: '1',
//       imageUrl: 'https://images.unsplash.com/photo-1693761935441-acd9e0c98f96',
//       // imageUrl: 'https://images.unsplash.com/photo-1693761935441-acd9e0c98f96',
//       likes: 234,
//       comments: 12,
//       username: '@photographer',
//     },
//     {
//       id: '2',
//       imageUrl: 'https://images.unsplash.com/photo-1693848186780-fec13758f06d',
//       likes: 156,
//       comments: 8,
//       username: '@creative',
//     },
//     {
//       id: '3',
//       imageUrl: 'https://images.unsplash.com/photo-1693761935723-63a6f06b398f',
//       likes: 89,
//       comments: 5,
//       username: '@artlover',
//     },
//   ]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {photos.map((photo) => (
//         <Card key={photo.id} className="overflow-hidden">
//           <img
//             src={photo.imageUrl}
//             alt={`Photo by ${photo.username}`}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-4">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm text-muted-foreground">{photo.username}</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <Button variant="ghost" size="sm" className="gap-2">
//                 <Heart className="w-4 h-4" /> {photo.likes}
//               </Button>
//               <Button variant="ghost" size="sm" className="gap-2">
//                 <MessageCircle className="w-4 h-4" /> {photo.comments}
//               </Button>
//               <Button variant="ghost" size="sm">
//                 <Share2 className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  username: string;
}

export function PhotoGrid() {
  const [photos] = useState<Photo[]>([
    {
      id: '1',
      imageUrl: 'https://ucarecdn.com/6f673b4c-2e9a-49e2-961b-5c6804b255d0/thomasdeluze7B23kRBDCEYunsplash.jpg',
      likes: 234,
      comments: 12,
      username: '@photographer',
    },
    {
      id: '2',
      imageUrl: 'https://ucarecdn.com/47d651fd-eb74-4d74-b414-25c51f8ba5e8/iooi.jpg',
      likes: 156,
      comments: 8,
      username: '@creative',
    },
    {
      id: '3',
      imageUrl: 'https://ucarecdn.com/5e545ae8-a6b9-4f46-9c32-bde1e01f9911/lorenjosephXoBWUBA3Amgunsplash.jpg',
      likes: 89,
      comments: 5,
      username: '@artlover',
    },
    {
      id: '4',
      imageUrl: 'https://ucarecdn.com/a9542fc9-21df-43f8-984c-f9d555fe9eea/debashisrcbiswasdyPFnxxUhYkunsplash.jpg',
      likes: 819,
      comments: 15,
      username: '@hamsachar',
    },
    {
      id: '5',
      imageUrl: 'https://ucarecdn.com/d5c9afd3-55ef-4000-9f3c-cab596018cc6/a.jpg',
      likes: 678,
      comments: 545,
      username: '@Lopaytbh',
    },
    {
      id: '6',
      imageUrl: 'https://ucarecdn.com/5a8b7d7d-36a7-43c5-98a1-8fe1906701a1/martinjernbergXI7lwAWzhZQunsplash.jpg',
      likes: 89,
      comments: 15,
      username: '@oneltyakalo',
    },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <Card key={photo.id} className="overflow-hidden">
          <img
            src={photo.imageUrl}
            alt={`Photo by ${photo.username}`}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{photo.username}</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="w-4 h-4" /> {photo.likes}
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" /> {photo.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
