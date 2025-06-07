import React, { useEffect, useState } from "react";
import useSWR from "swr";
import useDebounce from "../Hooks/useDebounce";
import MovieCard from "./MovieCard";
import { fetcher } from "../components/config/config";
import Link from "next/link";

export default function MoviesPage() {
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7&language=us"
  );
  const [fillter, setFillter] = useState("");
  const SearchDeboundce = useDebounce(fillter, 500);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFillter(e.target.value);
  };

  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];

  useEffect(() => {
    if (SearchDeboundce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${SearchDeboundce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7"
      );
    }
  }, [SearchDeboundce]);

  return (
    <div className="text-white page-container">
      <div className="flex flex-col-2 justify-center gap-20 text-xl mt-auto m-10 pt-5">
        <Link
          href="/MoviePage"
        >
          Movie
        </Link>
        <Link
          href="/SelectMovie"
        >
          Select-Movie
        </Link>
      </div>

      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-2 outline-none border text-white"
            placeholder="Search Movies..."
            onChange={handleSearch}
          />
        </div>
        <button className="b-4 bg-slate-500 text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 ? (
          movies.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))
        ) : (
          <p className="col-span-4 text-center text-2xl text-white">
            KHÔNG TÌM THẤY PHIM!!!!!!
          </p>
        )}
      </div>
    </div>
  );
}