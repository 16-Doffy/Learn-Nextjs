'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface MovieSchedule {
  id: number;
  title: string;
  originalTitle: string;
  genres: string[];
  duration: string;
  description?: string;
  format: string;
  rating: string;
  showtimes: Record<string, string[]>; // { date: times[] }
}

const CinemaSchedule = () => {
  // Ngày trong tuần (tuần hiện tại)
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      dateStr: date.toISOString().split('T')[0],
      display: date.toLocaleDateString('vi-VN', { weekday: 'short', day: '2-digit', month: '2-digit' })
    };
  });

  // Dữ liệu phim mẫu
  const movies: MovieSchedule[] = [
    {
      id: 1,
      title: "Lièo & Stitch",
      originalTitle: "Lilo & Stitch",
      genres: ["Action", "Adventure"],
      duration: "2h6'",
      format: "2D Phụ đề Việt",
      rating: "P - Phổ thông",
      showtimes: {
        [weekDays[0].dateStr]: ["10:00", "14:00", "18:00"],
        [weekDays[1].dateStr]: ["09:30", "13:30", "17:30", "21:00"],
        [weekDays[2].dateStr]: ["11:00", "15:00", "19:00"]
      }
    },
    {
      id: 2,
      title: "Tôi Đồ",
      originalTitle: "Sinners",
      genres: ["Action", "Adventure", "Animation"],
      duration: "1h59'",
      description: "Cổ gắng bỏ lại cuộc sống dây rắc rối của mình, hai anh em sinh đôi trở về quê hương để bất dầu lại, chỉ để phát hiện ra rằng một cái ác thậm chí còn lớn hơn đang chờ đợi để chào đón họ trở lại.",
      format: "2D Phụ đề Việt",
      rating: "T16 - Cấm dưới 16",
      showtimes: {
        [weekDays[0].dateStr]: ["12:00", "16:00", "20:00"],
        [weekDays[3].dateStr]: ["10:30", "14:30", "18:30", "22:00"],
        [weekDays[5].dateStr]: ["11:30", "15:30", "19:30"]
      }
    }
  ];

  const [selectedDate, setSelectedDate] = useState(weekDays[0].dateStr);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">Lịch chiếu phim</h1>

      {/* Thanh chọn ngày */}
      <div className="flex border-b-2 border-gray-200 mb-6">
        {weekDays.map(day => (
          <button
            key={day.dateStr}
            onClick={() => setSelectedDate(day.dateStr)}
            className={`px-4 py-2 text-center flex-1 ${selectedDate === day.dateStr ? 'border-b-4 border-red-500 font-bold' : ''}`}
          >
            {day.display}
          </button>
        ))}
      </div>

      {/* Danh sách phim */}
      <div className="space-y-8">
        {movies.map(movie => {
          const showtimes = movie.showtimes[selectedDate] || [];
          if (showtimes.length === 0) return null;

          return (
            <div key={movie.id} className="border rounded-lg overflow-hidden">
              {/* Tiêu đề phim */}
              <div className="bg-gray-100 p-4">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <div className="flex items-center mt-1">
                  <p className="text-gray-600 italic">{movie.originalTitle}</p>
                  <span className="mx-2">•</span>
                  <p>{movie.genres.join(' ')}</p>
                  <span className="mx-2">•</span>
                  <p>{movie.duration}</p>
                </div>
              </div>

              {/* Định dạng phim */}
              <div className="p-4 border-b">
                <h3 className="font-semibold">{movie.format}</h3>
              </div>

              {/* Mô tả phim (nếu có) */}
              {movie.description && (
                <div className="p-4 border-b">
                  <p className="text-gray-700">{movie.description}</p>
                </div>
              )}

              {/* Phân loại */}
              <div className="p-4 border-b">
                <span className={`px-2 py-1 rounded ${
                  movie.rating.includes('T16') ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {movie.rating}
                </span>
              </div>

              {/* Lịch chiếu */}
              <div className="p-4">
                <div className="flex flex-wrap gap-3">
                  {showtimes.map(time => (
                    <button
                      key={time}
                      className="px-4 py-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Thông báo nếu không có suất chiếu */}
        {movies.every(movie => !movie.showtimes[selectedDate]?.length) && (
          <div className="text-center py-10 text-gray-500">
            Không có suất chiếu nào vào ngày này
          </div>
        )}
      </div>
    </div>
  );
};

export default CinemaSchedule;