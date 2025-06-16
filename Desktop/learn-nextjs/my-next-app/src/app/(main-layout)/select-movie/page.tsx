'use client'; 
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function SelectMovie() {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovieId, setSelectedMovieId] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7"
      );
      setMovies(res.data.results);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!selectedMovieId) return;
    const today = new Date();
    const dates = Array.from({ length: 5 }, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d.toISOString().split("T")[0];
    });
    setAvailableDates(dates);
    setSelectedDate("");
    setSelectedTime("");
  }, [selectedMovieId]);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableTimes([]);
      return;
    }
    setAvailableTimes(["10:00", "14:00", "18:00", "21:00"]);
  }, [selectedDate]);

  const handleBooking = () => {
    if (!selectedMovieId) return alert("Vui lòng chọn phim");
    if (!selectedDate) return alert("Vui lòng chọn ngày chiếu");
    if (!selectedTime) return alert("Vui lòng chọn giờ chiếu");
    if (!name.trim()) return alert("Vui lòng nhập tên của bạn");

    const bookingInfo = {
      movieId: selectedMovieId,
      movieTitle: movies.find((m) => m.id == selectedMovieId)?.title,
      date: selectedDate,
      time: selectedTime,
      name: name.trim(),
    };

    alert(
      `Đặt vé thành công! Bạn đã chọn phim "${bookingInfo.movieTitle}" vào ngày ${bookingInfo.date} lúc ${bookingInfo.time}.`
    );
  };

  return (
    <div className="max-w-xl h-auto m-auto p-10 bg-blue-520 shadow-sm rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Đặt vé xem phim</h2>

      <div className="mb-4">
        <label className="block mb-1">Chọn phim:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedMovieId}
          onChange={(e) => setSelectedMovieId(e.target.value)}
        >
          {movies.map((movie) => (
            <option key={movie.id} value={movie.id} className="bg-slate-800">
              {movie.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Ngày chiếu:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          disabled={!selectedMovieId}
        >
          {availableDates.map((date) => (
            <option key={date} value={date} className="bg-slate-800">
              {date}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Giờ chiếu:</label>
        <select
          className="border rounded p-2 w-full"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          disabled={!selectedDate}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time} className="bg-slate-800">
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Tên của bạn:</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="text-white rounded flex gap-4">
        <button
          onClick={handleBooking}
          className="bg-red-400 m-auto font-semibold justify-center w-40 rounded-xl h-10 hover:bg-green-600"
        >
          Chọn phim
        </button>

        <Link
          href="/"
          className="bg-blue-600 m-auto font-semibold justify-center align-middle w-40 rounded-xl h-10 hover:bg-gray-700 cursor-pointer"
        >
          <span className="flex justify-center items-center text-md p-2">
            Về trang chủ
          </span>
        </Link>
      </div>
    </div>
  );
}
