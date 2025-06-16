import { NextResponse } from 'next/server';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '@/api-services/movie.service';

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  const [movieId, endpoint] = params.slug;

  try {
    let data;
    switch (endpoint) {
      case 'credits':
        data = await getMovieCredits(Number(movieId));
        break;
      case 'videos':
        data = await getMovieVideos(Number(movieId));
        break;
      default:
        data = await getMovieDetails(Number(movieId));
    }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}