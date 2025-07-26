import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getPostBySlug } from '../../../lib/posts';
import { Post } from '../../../types/posts';

interface PostProps {
  post: Post;
}

const PostPage: NextPage<PostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.createdAt).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Trong thực tế, bạn nên lấy danh sách slugs từ database
  return {
    paths: [],
    fallback: true,
  };
};

export default PostPage;