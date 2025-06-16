'use client';
import React from 'react';
import { fetcher } from '@/lib/hook';
import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Banner from '@/components/search/Banner';
import MovieCard from '@/components/search/MovieCard';
import Footer from '@/components/footer';
import MoviePages from './search/page';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
}

//{ type = "now_playing" }
export default function Home() {
  const { data, error } = useSWR<{ results: Movie[] }>(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher,
  );

  if (error) return <div>Error loading movies.</div>;
  if (!data) return <div>Loading...</div>;

  const movies = data.results || [];
  console.log(movies); // Kiểm tra dữ liệu
  console.log('data', data);
  return (
    <div className="bg-gradient-to-l from-red-900 to-black min-h-screen">
      <section className="w-full h-auto rounded-lg flex-col space-y-2 ">
        <div className="m-2 flex flex-col items-center ">
          <h1 className="text-5xl font-sans text-red-500 mt-15">Featured Movies</h1>
          <p className="text-3xl w-300 text-center font-sans text-white mt-5 mb-5">
            Discover the latest blockbusters and timeless classics. From heart-pounding action to
            thought-provoking dramas, we have something for every movie lover.
          </p>
        </div>
        <Banner />
        <MoviePages />
        <Swiper spaceBetween={5} slidesPerView={5}>
          {movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex text-white items-center justify-center">-------------------------</div>

        <Footer></Footer>
      </section>
    </div>
  );
}
