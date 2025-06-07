import "swiper/swiper-bundle.css";
import "../styles/global.css";
import MoviesPage from "./MoviePage";
import SelectMovie from "./SelectMovie";

export default function App() {
  return (
    <div className="flex flex-col m-auto items-center my-10">
      <nav className="flex flex-col gap-4 !text-white">
        <MoviesPage />
        <SelectMovie />
      </nav>
    </div>
  );
}