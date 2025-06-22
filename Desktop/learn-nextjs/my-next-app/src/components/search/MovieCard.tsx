import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Định nghĩa interface cho movie item
interface MovieItem {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

interface MovieCardProps {
  item: MovieItem;
}

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  if (!item) return null;
  const { title, vote_average, release_date, poster_path } = item;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  
  return (
    <div className="movie-card flex flex-col gap-2 rounded-lg p-2 bg-slate-800 text-white h-full w-full select-none">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={750}
        className="object-cover rounded-lg mb-5 items-center"
      />
      <div className="flex flex-col justify-between">
        <h3 className="text-xl text-white p-2 border border-pink-400 items-center m-auto mb-5 font-bold">
          {title}
        </h3>
        <div className="flex justify-between text-md text-2xl">
          <span>{release_date ? new Date(release_date).getFullYear() : 'N/A'}</span>
          <span>
            {vote_average.toFixed(1)}
            <span className="text-yellow-400">&#9733;</span>
          </span>
        </div>
      </div>
    {/*   <div className="m-2 w-full">
  <h2 className="text-center text-4xl text-white mb-6 font-sans">Suất chiếu</h2>
  <div className="flex flex-wrap justify-center gap-4 mb-4">
    {Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      return (
        <button
          key={dateStr}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-800"
        >
          {dateStr}
        </button>
      );
    })}
  </div> */}

  {/* <div className="flex flex-wrap justify-center gap-4">
    {["10:00", "14:00", "18:00", "21:00"].map((time) => (
      <button
        key={time}
        className="bg-slate-700 text-white px-2 py-1 rounded-xl hover:bg-blue-500"
        onClick={() =>
          alert(`Bạn đã chọn suất chiếu lúc ${time}`)
        }
      >
        {time}
      </button>
    ))}
  </div> 
</div>*/}
      <div className="flex gap-2 justify-between p-1">
        <Link
          href={'/search/' + item.id}
          key={item?.id}
          className="bg-gradient-to-r from-blue to-slate-700 text-lg   rounded-sm font-sans !text-white flex justify-center items-center py-2 px-5 hover:bg-blue-700 "
        >
          Watch Now
        </Link>
        <Link
          href='/search/select-movie'
                   className="bg-gradient-to-r from-blue to-slate-500 text-lg   rounded-sm font-sans !text-white flex justify-center items-center py-2 px-5 hover:bg-red-700 "
        >
          Showtimes
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
