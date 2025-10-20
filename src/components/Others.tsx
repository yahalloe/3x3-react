import { Link } from "react-router-dom";
import { others } from "./animeData";

export function Others() {
  return (
    <div className="w-full black-1a1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-3 max-w-[1000px] mx-auto px-2 pt-10 pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 text-center max-w-full sm:max-w-[80%] md:max-w-[50%] mx-auto text-stone-300 font-nunito col-span-full">
          Other 3x3s
        </h1>
        {others.map((anime) => (
          <div key={anime.id} className="flex flex-col items-center">
            <Link to={`/${anime.id}`}>
              <img
                src={anime.image}
                alt={anime.title}
                className="object-cover w-full aspect-square rounded-2xl border-2 border-transparent hover:border-stone-100 transition-all duration-200"
              />
            </Link>
            <h3 className="text-stone-300 mt-2 text-lg font-semibold">{anime.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

