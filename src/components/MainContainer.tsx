import { Link } from "react-router-dom";

interface MainContainerProps {
  list: {
    id: string;
    title: string;
    image: string;
    image1: string;
  }[];
}

export function MainContainer({ list }: MainContainerProps) {
  return (
    <div className="bg-black-111 w-full flex flex-col items-center justify-center text-stone-300 pt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-3 w-full max-w-[1000px] mx-auto p-2">
        {list.map((anime) => (
          <Link key={anime.id} to={`/anime/${anime.id}`}>
            <img
              title={anime.title}
              src={anime.image}
              alt={anime.title}
              className="object-cover w-full aspect-square rounded-2xl border-2 border-transparent hover:border-stone-100 transition-all duration-200"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
