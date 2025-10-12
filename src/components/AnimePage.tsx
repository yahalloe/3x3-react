// AnimePage.jsx
import { useParams } from "react-router-dom";
import { animeList, romcomList } from "./animeData";
import { Header } from "./Header";
import { BackButton } from "./BackButton";
import { Footer } from "./Footer";
import { NotFound } from "../pages/NotFound";

export function AnimePage() {
  const { id } = useParams();
  let anime = romcomList.find((a) => a.id === id);

  if (!anime)
    anime = animeList.find((a) => a.id === id);

  if (!anime) return <NotFound />;

  return (
    <>
      <Header title={anime.title} />
      <div className="min-h-3/4 w-full black-333 flex flex-col items-center justify-center text-stone-200 pt-10">
        <img
          src={anime.image1}
          alt={anime.title}
          title={anime.title}
          className="w-sm sm:w-2/3 md:w-1/2 lg:max-w-xl aspect-square object-cover rounded-2xl mb-6 shadow-lg"
        />

        <p className="text-stone-300 text-base sm:text-lg md:text-2xl text-left sm:text-center md:text-left max-w-full sm:max-w-[90%] md:max-w-[50%] mb-6 pt-6 px-10 sm:pt-8 md:pt-10 mx-auto">
          Synopsis: {anime.description}
        </p>

        <p className="text-stone-300 text-base sm:text-lg md:text-2xl text-left sm:text-center md:text-left max-w-full sm:max-w-[90%] md:max-w-[50%] mb-6 px-6 mx-auto">
          {anime.reason}
        </p>

        <div className="min-w-5/6 flex justify-start pb-2 pt-10 lg:min-w-1/2">
            <BackButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
