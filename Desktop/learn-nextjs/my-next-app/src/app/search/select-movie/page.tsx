'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

interface MovieItem {
  id: number;
  title: string;
  original_title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview: string;
  runtime: number;
  genres: { id: number; name: string }[];
  certification?: string;
}

const CinemaSchedule = () => {
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [confirmedBooking, setConfirmedBooking] = useState(false);

  // Generate dates for the next 7 days
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  // Mock showtimes
  const movieShowtimes: Record<number, string[]> = {
    1: ['10:00', '13:00', '16:00', '19:00'],
    2: ['11:00', '14:00', '17:00', '20:00'],
    3: ['12:00', '15:00', '18:00', '21:00'],
  };

  const certifications: Record<string, string> = {
    P: 'Phổ thông',
    K: 'Khuyến nghị',
    T13: 'C13 - Cấm dưới 13',
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=733d08f3b55d5c3b516692a4f30a1ff7&language=vi-VN&region=VN'
        );

        const moviesWithDetails = res.data.results.slice(0, 3).map((movie: any, index: number) => ({
          ...movie,
          runtime: [126, 119, 105][index % 3],
          genres: [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Adventure' },
          ].slice(0, 2),
          certification: ['P', 'K', 'T13'][index % 3],
        }));

        setMovies(moviesWithDetails);
        setSelectedDate(availableDates[0]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h${mins}'`;
  };

  if (loading) return <div className="text-center py-10">Đang tải lịch chiếu...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Lịch chiếu phim</h1>

      {/* Date selector */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
        {availableDates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedDate === date ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {new Date(date).toLocaleDateString('vi-VN', {
              weekday: 'short',
              day: 'numeric',
              month: 'numeric',
            })}
          </button>
        ))}
      </div>

      {/* Movies list */}
      <div className="space-y-8">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Movie poster (Link to detail) */}
                <Link 
                  href={`/search/${movie.id}`} 
                  className="w-full md:w-1/4 lg:w-1/5 hover:opacity-90 transition-opacity"
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Movie info */}
                <div className="flex-1">
                  <Link href={`/movies/${movie.id}`}>
                    <h2 className="text-2xl font-bold hover:text-blue-600">{movie.title}</h2>
                  </Link>
                  <p className="text-gray-600 italic">{movie.original_title}</p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span key={genre.id} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {genre.name}
                      </span>
                    ))}
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {formatRuntime(movie.runtime)}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {certifications[movie.certification || 'P']}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-700 line-clamp-3">{movie.overview}</p>

                  {/* Showtimes */}
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">2D Phụ đề Việt</h3>
                    <div className="flex flex-wrap gap-2">
                      {movieShowtimes[movie.id]?.map((time) => (
                        <button
                          key={time}
                          onClick={() => {
                            setSelectedMovie(movie);
                            setSelectedTime(time);
                            setConfirmedBooking(false);
                          }}
                          className={`px-4 py-2 rounded ${
                            selectedMovie?.id === movie.id && selectedTime === time
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking form */}
      {selectedMovie && selectedTime && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Đặt vé xem phim</h2>

            <div className="mb-4">
              <h3 className="font-bold">{selectedMovie.title}</h3>
              <p className="text-gray-600">
                {new Date(selectedDate).toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
                {' • '}
                {selectedTime}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {certifications[selectedMovie.certification || 'P']}
              </p>
            </div>

            {!confirmedBooking ? (
              <>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Tên của bạn</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập họ tên đầy đủ"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedMovie(null);
                      setSelectedTime('');
                    }}
                    className="flex-1 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                  >
                    Hủy
                  </button>
                  <button
                    onClick={handleBooking}
                    className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                  >
                    Tiếp tục
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="mb-4 p-4 bg-green-100 rounded-lg">
                  <p className="font-bold text-green-800">Đặt vé thành công!</p>
                  <p className="mt-1">{name}</p>
                </div>

                <Link
                  href={{
                    pathname: '/seat',
                    query: {
                      movieId: selectedMovie.id,
                      movieTitle: selectedMovie.title,
                      date: selectedDate,
                      time: selectedTime,
                      name: name,
                    },
                  }}
                  className="inline-block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                >
                  Chọn ghế ngồi
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CinemaSchedule;
