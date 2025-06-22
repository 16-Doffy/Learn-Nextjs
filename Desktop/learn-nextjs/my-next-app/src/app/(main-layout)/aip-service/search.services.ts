// src/api-service/movie.service.ts
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';


export const getUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7`
  );
  if (!response.ok) throw new Error('Failed to fetch movies');
  return (await response.json()).results;
};

export const searchMovies = async (query: string, includeAdult: boolean = false) => {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}&include_adult=${includeAdult}`
  );
  if (!response.ok) throw new Error('Failed to search movies');
  return (await response.json()).results;
};