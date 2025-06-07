import React from "react";
import Image from "next/image";

const MovieCard: React.FC<{ item: any }> = ({ item }) => {
  if (!item) return null; 
  const { title, vote_average, release_date, poster_path } = item;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={500} 
        height={750} 
        className="object-cover rounded-lg mb-5" 
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-3xl text-white font-bold mb-2 mt-1">{title}</h3>
        <div className="flex items-center justify-between text-md mb-10 text-2xl">
          <span>{release_date ? new Date(release_date).getFullYear() : "N/A"}</span>
          <span>
            {vote_average.toFixed(1)}
            <span className="text-yellow-400 text-2xl">&#9733;</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;