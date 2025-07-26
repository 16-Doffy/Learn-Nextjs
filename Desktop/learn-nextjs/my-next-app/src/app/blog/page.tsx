'use client';

import { NextPage } from 'next';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllPosts } from '../../lib/posts';
import { Post } from '../../types/posts';
import styles from '../styles/home.module.css';

const BlogHome: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(getAllPosts());
  }, []);

  return (
    <div className={styles.container}>
 

      <main className={styles.main}>
        <h1 className={styles.title}>My Garden Blog</h1>

        <Link href="/blog/create">
          <p className={styles.createButton}>Create New Post</p>
        </Link>

        <div className={styles.posts}>
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <Link href={`/blog/${post.id}`}>
                <span>
                  <h2>{post.title}</h2>
                  <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogHome;
