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
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
  // Thêm các trường khác nếu cần
}

interface CreditResponse {
  cast: Cast[];
}

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface VideoResponse {
  results: Video[];
}

interface Video {
  id: string;
  key: string;
  name: string;
  type: string;
}

// Hàm fetch chung
const fetchTmdb = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

// Movie Services
export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const data = await fetchTmdb<MovieListResponse>('/movie/upcoming');
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const data = await fetchTmdb<MovieListResponse>(`/search/movie?query=${encodeURIComponent(query)}`);
  return data.results;
};

export const getMovieDetails = async (movieId: number): Promise<Movie> => {
  return fetchTmdb<Movie>(`/movie/${movieId}`);
};

export const getMovieCredits = async (movieId: number): Promise<CreditResponse> => {
  return fetchTmdb<CreditResponse>(`/movie/${movieId}/credits`);
};

export const getMovieVideos = async (movieId: number): Promise<VideoResponse> => {
  return fetchTmdb<VideoResponse>(`/movie/${movieId}/videos`);
};

// Helper function để lấy URL ảnh
export const getImageUrl = (path: string | null, size: string = 'w500') => {
  return path 
    ? `https://image.tmdb.org/t/p/${size}${path}`
    : '/no-image-available.jpg';
};