
import PostContent from './PostContent';

export default function PostPage({ params }: { params: { slug: string } }) {
  return <PostContent slug={params.slug} />;
}
