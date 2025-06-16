import MovieDetail from "./MovieDetailClient";


export default function MoviePage({ params }: { params: { movieId: string } }) {
  return <MovieDetail movieId={params.movieId} />;
}