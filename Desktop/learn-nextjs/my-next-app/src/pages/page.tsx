import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import styles from '../styles/Home.module.css';

const BlogHome: NextPage = () => {
  const posts = getAllPosts();

  return (
    <div className={styles.container}>
      <Head>
        <title>My Simple Blog</title>
        <meta name="description" content="A simple blog created with Next.js" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Simple Blog</h1>

        <Link href="/posts/create">
          <a className={styles.createButton}>Create New Post</a>
        </Link>

        <div className={styles.posts}>
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <h2>{post.title}</h2>
                  <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogHome;