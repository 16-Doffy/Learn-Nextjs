'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

interface MovieItem {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  overview?: string;
}

const MovieBookingSystem = () => {
  // State cho danh sách phim
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState(true);

  // State cho booking
  const [selectedMovieId, setSelectedMovieId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [confirmedBooking, setConfirmedBooking] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'booking'>('list');

  // Fetch danh sách phim
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          'https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7&language=vi-VN',
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Cập nhật ngày chiếu khi chọn phim
  useEffect(() => {
    if (!selectedMovieId) return;

    const today = new Date();
    const dates = Array.from({ length: 5 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d.toISOString().split('T')[0];
    });

    setAvailableDates(dates);
    setSelectedDate('');
    setSelectedTime('');
    setConfirmedBooking(false);
  }, [selectedMovieId]);

  // Cập nhật giờ chiếu khi chọn ngày
  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimes([]);
      return;
    }
    setAvailableTimes(['10:00', '14:00', '18:00', '21:00']);
    setSelectedTime('');
    setConfirmedBooking(false);
  }, [selectedDate]);

  const handleBooking = () => {
    if (!selectedMovieId) return alert('Vui lòng chọn phim');
    if (!selectedDate) return alert('Vui lòng chọn ngày chiếu');
    if (!selectedTime) return alert('Vui lòng chọn giờ chiếu');
    if (!name.trim()) return alert('Vui lòng nhập tên của bạn');

    setConfirmedBooking(true);
  };

  const selectedMovie = movies.find((m) => m.id == selectedMovieId);

  if (loading) return <div className="text-center py-10">Đang tải phim...</div>;

  return (
    <div className=" w-full max-h-[850px] bg-amber-200 mt-3 p-2">
      {viewMode === 'list' ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-8">Danh sách phim sắp chiếu</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="movie-card flex flex-col gap-2 rounded-lg p-4 bg-slate-800 text-white h-full select-none shadow-lg"
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-col flex-grow pt-3">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">{movie.title}</h3>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="bg-blue-500 px-2 py-1 rounded text-sm">
                      {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
                    </span>
                    <div className="flex items-center">
                      <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
                      <span className="text-yellow-400 ml-1 text-sm">/10 IMDb</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 grid-row gap-2 m-2">
                    <button
                      onClick={() => {
                        setSelectedMovieId(movie.id.toString());
                        setViewMode('booking');
                      }}
                      className="flex-grow  text-white border rounded text-center hover:from-blue-700 transition-colors"
                    >
                     10:00
                    </button>
                    <button
                      onClick={() => {
                        setSelectedMovieId(movie.id.toString());
                        setViewMode('booking');
                      }}
                      className="flex-grow  text-white border rounded text-center hover:from-blue-700 transition-colors"
                    >
                      12:00
                    </button>
                    <button
                      onClick={() => {
                        setSelectedMovieId(movie.id.toString());
                        setViewMode('booking');
                      }}
                      className="flex-grow  text-white border rounded text-center hover:from-blue-700 transition-colors"
                    >
                      14:00
                    </button>
                    <button
                      onClick={() => {
                        setSelectedMovieId(movie.id.toString());
                        setViewMode('booking');
                      }}
                      className="flex-grow  text-white border rounded text-center hover:from-blue-700 transition-colors"
                    >
                      16:00
                    </button>
                    <button
                      onClick={() => {
                        setSelectedMovieId(movie.id.toString());
                        setViewMode('booking');
                      }}
                      className="flex-grow  text-white border rounded text-center hover:from-blue-700 transition-colors"
                    >
                      18:00
                    </button>
                    <button
                      onClick={() => {
                        setSelectedMovieId(movie.id.toString());
                        setViewMode('booking');
                      }}
                      className="flex-grow border text-white  rounded text-center hover:from-blue-700 transition-colors"
                    >
                      21:00
                    </button>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => {
                      setSelectedMovieId(movie.id.toString());
                      setViewMode('booking');
                    }}
                    className="flex-grow bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 rounded text-center hover:from-blue-700 transition-colors"
                  >
                    Đặt vé
                  </button>
                  <Link
                    href={`/search/${movie.id}`}
                    className="flex-grow bg-gradient-to-r from-blue-900 to-red-900 !text-white py-2 rounded text-center hover:from-blue-700 transition-colors"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-xl mx-auto p-6 bg-slate-800 rounded-lg shadow-lg text-black">
          <button
            onClick={() => setViewMode('list')}
            className="mb-4 flex items-center text-blue-400 hover:text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Quay lại danh sách phim
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center text-black">Đặt vé xem phim</h2>

          {selectedMovie && (
            <div className="flex items-center mb-6 p-4 bg-slate-700 rounded-lg">
              <div className="relative w-20 h-28 flex-shrink-0">
                <Image
                  src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold">{selectedMovie.title}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{selectedMovie.vote_average.toFixed(1)}/10</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block mb-2">Ngày chiếu:</label>
              <select
                className="w-full p-2 rounded bg-slate-700 border border-slate-600"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                disabled={!selectedMovieId}
              >
                <option value="">-- Chọn ngày --</option>
                {availableDates.map((date) => (
                  <option key={date} value={date}>
                    {new Date(date).toLocaleDateString('vi-VN')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Giờ chiếu:</label>
              <select
                className="w-full p-2 rounded bg-slate-700 border border-slate-600"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                disabled={!selectedDate}
              >
                <option value="">-- Chọn giờ --</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2">Tên của bạn:</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-slate-700 border border-slate-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ tên đầy đủ"
              />
            </div>
          </div>
          <button
            onClick={handleBooking}
            className="w-full mt-6 bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold transition-colors"
            disabled={confirmedBooking}
          >
            {confirmedBooking ? 'Đã xác nhận' : 'Xác nhận đặt vé'}
          </button>

          {confirmedBooking && selectedMovie && (
            <div className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-400">Đặt vé thành công!</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Phim:</span> {selectedMovie.title}
                </p>
                <p>
                  <span className="font-semibold">Ngày:</span>{' '}
                  {new Date(selectedDate).toLocaleDateString('vi-VN')}
                </p>
                <p>
                  <span className="font-semibold">Suất chiếu:</span> {selectedTime}
                </p>
                <p>
                  <span className="font-semibold">Người đặt:</span> {name}
                </p>
              </div>

              <Link
                href={`/seat?movie=${selectedMovie.id}&date=${selectedDate}&time=${selectedTime}`}
                className="inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
              >
                Chọn ghế ngồi
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieBookingSystem;
