'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPostBySlug, deletePost } from '../../../lib/posts';
import { Post } from '../../../types/posts';
import {  CloudCheck, Eye, Heart,  MoveLeft } from 'lucide-react';

export default function PostContent({ slug }: { slug: string }) {
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    setPost(foundPost || null);
  }, [slug]);

  if (!post) return <div>Post not found</div>;

  const handleDelete = () => {
    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      deletePost(post.id);
      router.push('/blog');
    }
  };

  const handleEdit = () => {
    router.push(`/blog/${post.id}/edit`);
  };
 const handleBack = () => {
  router.push(`/blog`);
 }
  return (
       
    <div className='p-10 text-xl text-center'>
      <button  onClick={handleBack}className='flex mr-auto border-r shadow  hover:bg-blue-400 rounded-2xl'> <MoveLeft /></button>
        <h1 className='text-2xl  text-black font-bold'>{post.title}</h1>
          <span className=' text-center flex flex-col justify-around'>
               <span className='flex flex-col-3 m-auto gap-10 hover:text-red-500'> <span><CloudCheck/>200 </span> <span><Heart />150</span>   <span><Eye />100</span></span>
            <span className='text-lg underline shadow-2xl'>{new Date(post.createdAt).toLocaleDateString()}</span>
          </span>
    
  
      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />

      <div className='flex flex-col-3 justify-center gap-5 p-1 text-white/70'>
        <button onClick={handleEdit} className='p-1 bg-green-400 rounded-sm'>Edit</button>
        <button onClick={handleDelete} className='p-1 bg-red-400 rounded-sm'>
          Delete
        </button>
        <button onClick={() => router.push('/blog')} className='p-1 bg-sky-500 rounded-sm'>
          Back to Home
        </button>
      </div>
    </div>
    
  );
}

