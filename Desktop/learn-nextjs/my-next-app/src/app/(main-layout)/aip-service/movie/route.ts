// src/app/api/movies/route.ts
import { NextResponse } from 'next/server';
import { getUpcomingMovies, searchMovies } from '../search.services';


export const dynamic = 'force-dynamic'; // Bắt buộc dynamic rendering

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const query = searchParams.get('query');
  

  try {
    const movies = type === 'search'
      ? await searchMovies(query || '', )
      : await getUpcomingMovies();

    return NextResponse.json({ results: movies });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}