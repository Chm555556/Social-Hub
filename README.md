# Social Hub - Connect, Share, Engage

Welcome to Social Hub This project is a full-stack social media web application designed to  Connect, Share, Engage . It enables users to create posts with images and captions, like/unlike posts, and add/view comments. Real-time updates are handled using Supabase.
## Live Demo

Check out the live application [here](https://socialhubs.netlify.app/).
## Features

- **Post Creation**: Users can create posts with images (via URL) and captions.
- **Real-Time Likes**: Like/unlike posts with real-time updates.
- **Comments**: Add comments to posts and view all comments in a modal.
- **Dark/Light Mode**: Toggle between dark and light modes with a blur transition effect and a centered message.
- **Responsive Design**: Works seamlessly on various devices.

## Tech Stack

### Frontend:
- React.js
- TailwindCSS

### Backend:
- Supabase (Database, Authentication, and Realtime Updates)

## Database Schema

### Tables

1. **posts**
    - `id` (uuid, primary key)
    - `image_url` (text)
    - `caption` (text)
    - `likes_count` (integer)
    - `created_at` (timestamp)

2. **comments**
    - `id` (uuid, primary key)
    - `post_id` (uuid, foreign key)
    - `content` (text)
    - `created_at` (timestamp)

3. **likes**
    - `id` (uuid, primary key)
    - `post_id` (uuid, foreign key)
    - `created_at` (timestamp)

### Security
- Row-Level Security (RLS) enabled for all tables.
- Public access policies added for creating posts, likes, and comments.

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chm555556/Social-Hub-clone.git
   cd instagram-clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Supabase**
   - Create a new project on [Supabase](https://supabase.com/).
   - Apply the following database migration script:
     ```sql
     -- Create posts table
     CREATE TABLE posts (
         id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
         image_url text NOT NULL,
         caption text NOT NULL,
         likes_count integer DEFAULT 0,
         created_at timestamp DEFAULT now()
     );

     -- Create comments table
     CREATE TABLE comments (
         id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
         post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
         content text NOT NULL,
         created_at timestamp DEFAULT now()
     );

     -- Create likes table
     CREATE TABLE likes (
         id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
         post_id uuid REFERENCES posts(id) ON DELETE CASCADE,
         created_at timestamp DEFAULT now()
     );
     ```

   - Enable RLS and add policies for public access.

4. **Create a `.env.local` File**
   Add your Supabase project URL and API key:
   ```env
   REACT_APP_SUPABASE_URL=your-supabase-url
   REACT_APP_SUPABASE_ANON_KEY=your-anon-key
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── PostCard.tsx      # Displays individual posts
│   │   ├── CreatePost.tsx    # Form for creating new posts
│   │   └── DarkModeToggle.tsx # Dark/Light mode toggle
│   ├── lib
│   │   └── supabase.ts       # Supabase client setup
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
├── tailwind.config.js        # TailwindCSS configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Usage

1. **Create Posts**: Use the "Create Post" form to upload an image URL and caption.
2. **Like Posts**: Click the like button on a post to increment the like count in real-time.
3. **Add Comments**: Click the comment button to view all comments and add a new one.
4. **Toggle Dark Mode**: Click the dark mode button to switch modes with a blur effect.

## Future Enhancements

- Add user authentication.
- Implement Video upload functionality.
- Add Share thought features.

---

Happy Coding!
