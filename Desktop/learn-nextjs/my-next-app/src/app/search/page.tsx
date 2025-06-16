'use client';
import React, { useState } from "react";
import { fetcher, useDebounce } from "@/lib/hook";
import useSWR from "swr";
import MovieCard from "@/components/search/MovieCard";


interface Movie {
  id: number;
  title: string;
  overview?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
  [key: string]: unknown;
}

export default function MoviePages() {
  const [filter, setFilter] = useState("");
  const [showAdult, setShowAdult] = useState(false);
  const debounceSearch = useDebounce(filter, 1000);

  const url = debounceSearch
    ? `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${debounceSearch}&include_adult=${showAdult}`
    : `https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7&include_adult=${showAdult}`;

  const { data, error } = useSWR(url, fetcher);
  const movies: Movie[] = data?.results || [];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(debounceSearch.toLowerCase()) ||
    (movie.overview?.toLowerCase().includes(debounceSearch.toLowerCase()))
  );

  return (
    <div className="w-full">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Movies..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded w-full max-w-xl text-white"
        />
        <button
          onClick={() => document.querySelector("input")?.focus()}
          className="ml-2 p-2 bg-slate-500 text-white rounded"
        >
        </button>
      </div>
      <div className="flex justify-center mb-6">
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={showAdult}
            onChange={() => setShowAdult(!showAdult)}
          />
          Include Adult Content
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} item={movie} />
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            {error ? "Error loading movies" : "No movies found"}
          </p>
        )}
      </div>
    </div>
  );
}
