'use client'
import { NextPage } from 'next';

import { useState } from 'react';
import { createPost } from '../../../lib/posts';
import { useRouter } from 'next/navigation';
//import { MoonStar } from 'lucide-react';

const CreatePost: NextPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const post = createPost(title, content);
    router.push(`/blog/${post.id}`);
  };

  return (
    <div className='p-10 text-center'>
      <h1>Create New Post </h1>
      <form onSubmit={handleSubmit}>
        <div  className='p-2 text-center'>
          <label htmlFor="title" className=' text-lg font-extralight shadow-2xl'>Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='border ml-2 rounded-sm px-2 py-3 p-1'
          />
        </div>
        <div>
          <label htmlFor="content" className=' text-lg font-extralight shadow-2xl'>Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='border ml-2 rounded-sm px-2 py-3 p-1'
          />
        </div>
        <button type="submit" className='border bg-green-300 p-1 font-extrabold hover:bg-blue-400 rounded-sm'>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;