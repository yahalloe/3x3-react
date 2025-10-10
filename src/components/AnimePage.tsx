// AnimePage.jsx
import { useParams, Link } from "react-router-dom";
import { animeList } from "./animeData";
import { Header } from "./Header";
import { BackButton } from "./BackButton";
import { Footer } from "./Footer";

export function AnimePage() {
  const { title } = useParams();
  const anime = animeList.find((a) => a.id === title);

  if (!anime) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-stone-200">
        <p className="text-xl mb-4">Anime not found 😢</p>
        <Link to="/" className="text-blue-400 hover:underline">
          ← Back to grid
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-3/4 black-333 flex flex-col items-center justify-center text-stone-200 pt-10">
        <img
          src={anime.image}
          alt={anime.title}
          title={anime.title}
          className="max-w-xl aspect-square object-cover rounded-2xl mb-6 shadow-lg "
        />
        <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold mb-3 text-center max-w-full sm:max-w-[80%] md:max-w-[50%] mx-auto">
          {anime.title}
        </h1>

        <p className="text-stone-300 text-base sm:text-lg md:text-2xl text-left sm:text-center md:text-left max-w-full sm:max-w-[90%] md:max-w-[50%] mb-6 pt-6 px-10 sm:pt-8 md:pt-10 mx-auto">
          Synopsis: {anime.description}
        </p>

        <p className="text-stone-300 text-base sm:text-lg md:text-2xl text-left sm:text-center md:text-left max-w-full sm:max-w-[90%] md:max-w-[50%] mb-6 px-6 mx-auto">
          {anime.reason}
        </p>

        <Link to="/" className="pb-10">
          <BackButton />
        </Link>
      </div>
      <Footer />
    </>
  );
}
