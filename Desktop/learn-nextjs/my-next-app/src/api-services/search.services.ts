// src/api-services/movie.service.ts
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
  // ... thêm các fields khác nếu cần
}

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/upcoming?api_key=${API_KEY}`
    );
    const data: MovieListResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw new Error('Failed to fetch upcoming movies');
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data: MovieListResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw new Error('Failed to search movies');
  }
}