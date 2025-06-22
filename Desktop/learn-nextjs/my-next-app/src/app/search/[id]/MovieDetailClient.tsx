'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetcher } from '@/lib/api/fetcher';
import Image from 'next/image';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  backdrop_path: string;
  genres: {
    id: number;
    name: string;
  }[];
}

interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          setLoading(true);
          
          // Fetch movie details
          const movieData = await fetcher(
            `https://api.themoviedb.org/3/movie/${id}?api_key=733d08f3b55d5c3b516692a4f30a1ff7&page=2`
          );
          setMovie(movieData);
          
          // Fetch cast
          const creditsData = await fetcher(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=733d08f3b55d5c3b516692a4f30a1ff7`
          );
          setCast(creditsData.cast || []);
          
          // Fetch videos
          const videosData = await fetcher(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=733d08f3b55d5c3b516692a4f30a1ff7`
          );
          setVideos(videosData.results || []);
          
        } catch (err) {
          setError('Failed to load movie details');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) return <div className="text-white text-center py-20">Loading...</div>;
  if (error) return <div className="text-white text-center py-20">Error: {error}</div>;
  if (!movie) return <div className="text-white text-center py-20">No movie found</div>;

  return (
    <div className="bg-linear-to-l from-red-500  to-black py-10">
      {/* Background with overlay */}
      <div className="relative w-full h-[500px] mb-30">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className=" inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 -mt-[420px] relative z-20 flex flex-col items-center">
        {/* Poster */}
        <div className="w-[350px] mb-8 shadow-lg rounded overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="w-full h-full object-cover rounded p-1 bg-blue-200"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white font-sans text-center mb-4">{movie.title}</h1>

        {/* Genres */}
        {movie.genres.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {movie.genres.map((item) => (
              <span
                key={item.id}
                className="px-3 py-2 border border-amber-300 bg-pink-600  text-white  rounded-full text-xl font-sans"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}

        {/* Overview */}
        <p className="text-white leading-relaxed text-center max-w-2xl font-sans text-2xl">
          {movie.overview}
        </p>

        {/* Cast section */}
        {cast.length > 0 && (
          <div className="mt-16 w-full">
            <h2 className="text-center text-5xl mb-8 text-white font-sans">Casts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
              {cast.slice(0, 4).map((item) => (
                <div className="cast-item text-center" key={item.id}>
                  {item.profile_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                      alt={item.name}
                      width={200}
                      height={300}
                      className="w-full h-auto rounded-lg mb-2 border border-amber-200"
                    />
                  ) : (
                    <div className="w-full h-[300px] bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                      <span>No Image</span>
                    </div>
                  )}
                  <h3 className="text-2xl text-white font-sans font-medium">{item.name}</h3>
                  <p className="text-gray-300 text-2xl">{item.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos section */}
        {videos.length > 0 && (
          <div className="mt-16 w-full">
            <div className="flex flex-col items-center">
              {videos.slice(0, 1).map((item) => (
                <div key={item.id} className="w-full max-w-4xl">
                  <h3 className="mb-5  font-sans text-white text-center text-3xl">
                    {item.name}
                  </h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      width="100%"
                      height="500"
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title={item.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg border border-amber-200"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Showtimes section */}
      </div>
            <div className="m-2 w-full ">
  <div className='flex flex-col-2 gap-2  ml-auto'>
       <h1 className='w-2 h-7 bg-slate-600'></h1>         
  <h2 className="text-2xl text-white mb-6 font-sans">Lịch chiếu</h2>
  </div>
  
<div className='flex flex-col ml-auto'>
  <div className='  font-sans text-2xl m-2 bg-linear-to-b from-red-500 to-purple-300 bg-clip-text text-transparent'><h1>Galaxy Cypher Punk Cinema</h1></div>
    <div className="flex flex-wrap  gap-4 m-2 ml-20">
    {Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      return (
        <button
          key={dateStr}
          className="bg-slate-600 font-sans text-white px-2 py-2 rounded-sm hover:bg-blue-800"
              onClick={() =>
          alert(`Bạn đã chọn suất chiếu lúc ${dateStr}`)
        }
       >
          {dateStr}
        </button>
      );
    })}
  </div>

  <div className="flex flex-wrap  gap-4 ml-20">
    {["10:00", "14:00", "18:00", "21:00"].map((time) => (
      <button
        key={time}
          className=" bg-slate-600 font-sans text-white px-2 py-2 rounded-sm hover:bg-blue-800"
        onClick={() =>
          alert(`Bạn đã chọn suất chiếu lúc ${time}`)
        }
      >
        {time}
      </button>
    ))}
  </div>
</div>
</div>
    </div>
   
  );
};

export default MovieDetail;