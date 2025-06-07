import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { pageContainer } from "../styles/theme";
import useSWR from "swr";
import { fetcher } from "../components/config/config"; // Đảm bảo đường dẫn chính xác
import Link from 'next/link';
import Image from "next/image";

export default function Banner() {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <section
      className="banner w-full h-[650px] bg-white mb-20 rounded-lg"
      style={{ ...pageContainer }}
    >
      <Swiper grabCursor="true" slidesPerView="auto" className="h-full">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

function BannerItem({ item }) {
  const { title, poster_path, original_title, vote_average, release_date} = item;
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(124,98,98,0.5)] to-[rgba(74,149,235,0.62)] rounded-lg"></div>
      <Image
        src={imageUrl}
        alt={title}
        layout="fill" // Sử dụng layout fill để hình ảnh tự động chiếm không gian
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-2 border border-white rounded-md">{original_title}</span>
          <span className="p-2 border border-white rounded-md">{release_date}</span>
          <span className="p-2 border border-white rounded-md">{vote_average} MDB</span>
        </div>
        <div className="flex gap-2">
          <Link href={`/movies/${item.id}`} className="bg-pink-500 border border-amber-200 rounded-sm font-sans flex justify-center items-center py-3 px-6">   Watch Now</Link>
        
          {/* Uncomment if needed
          <Link href="/ticket">
            <a className="bg-blue-400 border border-amber-200 rounded-sm font-sans flex justify-center items-center py-3 px-6">
              Booking Ticket
            </a>
          </Link>
          */}
        </div>
      </div>
    </div>
  );
}