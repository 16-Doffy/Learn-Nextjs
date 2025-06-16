import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';
import Image from "next/image";
import { fetcher } from "@/lib/api/fetcher";
import theme from '@/lib/theme';
import useSWR from "swr";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  original_title: string;
  vote_average: number;
  release_date: string;
}

interface BannerItemProps {
  item: Movie;
}

export default function Banner() {
  const { data,  } = useSWR<{ results: Movie[] }>(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section
      className="banner w-full h-[650px] bg-white mb-20 rounded-lg"
      style={{ 
        maxWidth: theme.pageContainer.maxWidth,
        marginLeft: theme.pageContainer.marginLeft,
        marginRight: theme.pageContainer.marginRight
      }}
    >
      <Swiper 
        grabCursor={true} 
        slidesPerView="auto" 
        className="h-full"
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function BannerItem({ item }: BannerItemProps) {
  const { title, poster_path, original_title, vote_average, release_date } = item;
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="w-full h-full rounded-lg relative bg-linear-to-l from-black  to-red-900 ">
      <div className="overlay absolute inset-0   rounded-lg"></div>
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover  rounded-lg  w-full h-auto p-2"
        //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute left-5 bottom-5 w-full text-white font-sans p-3">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-2 border border-white rounded-md">{original_title}</span>
          <span className="p-2 border border-white rounded-md">{release_date}</span>
          <span className="p-2 border border-white rounded-md">{vote_average} MDB</span>
        </div>
        <div className="flex gap-2 text-white ">
          <Link 
            href={'/search/' +  item.id} key={item?.id} 
            className="bg-gradient-to-r from-black to-red text-xl   rounded-sm font-sans !text-white flex justify-center items-center py-3 px-6 hover:bg-red-600 "
          >
            Watch Now
          </Link>
        <Link
          href='/search/select-movie'
          className="  rounded-sm font-sans !text-black flex justify-center items-center py-2 px-5 "
        >
          Showtimes
        </Link>
        </div>
      </div>
    </div>
  );
}