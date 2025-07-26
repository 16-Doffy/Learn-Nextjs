'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPostBySlug, updatePost } from '../../../../lib/posts';
import { Post } from '../../../../types/posts';

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams() as { slug?: string | string[] } | null;

  const slug = params?.slug
    ? Array.isArray(params.slug) ? params.slug[0] : params.slug
    : null;

  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!slug) return;

    const foundPost = getPostBySlug(slug);
    if (foundPost) {
      setPost(foundPost);
      setTitle(foundPost.title);
      setContent(foundPost.content);
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !post) return;

    updatePost(post.id, title, content);
    router.push(`/blog/${post.id}`);
  };

  if (!slug) return <div>Invalid slug</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className='p-10 m-auto '>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col-2 gap-10'>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='flex flex-col-2 gap-5'>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
