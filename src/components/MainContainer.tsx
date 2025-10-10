import { Link } from "react-router-dom";

export function MainContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:gap-3 w-full max-w-[1000px] mx-auto p-2">
      <Link to="anime/hyouka">
        <img title="Hyouka" src="/hyouka.jpg" className="object-cover w-full aspect-square rounded-2xl" />
      </Link>
      <Link to="anime/edgerunner">
        <img title="Edgerunner" src="/edgerunner.gif" className="object-cover w-full aspect- rounded-2xl" />
      </Link>
      <Link to="anime/frieren">
        <img title="Frieren" src="/fern.png" className="object-cover w-full aspect- rounded-2xl w-[320px] h-[320px]" />
      </Link>
      <Link to="anime/monogatari">
        <img title="Monogatari series" src="/monogatari.jpg" className="object-cover w-full aspect- rounded-2xl" />
      </Link>
      <Link to="anime/suzumiya">
        <img title="Suzumiya Haruhi" src="/suzumiya.jpg" className="object-cover w-full aspect- rounded-2xl" />
      </Link>
      <Link to="anime/madeInAbyss1">
        <img title="Made in Abyss" src="/madeInAbyss1.jpg" className="object-cover w-full aspect- rounded-2xl" />
      </Link>
      <Link to="anime/hunter">
        <img title="Hunter x Hunter" src="/hunterhunter.avif" className="object-cover w-full aspect- rounded-2xl w-[320px] h-[320px]" />
      </Link>
      <Link to="anime/bunnyGirl">
        <img title="Bunny Girl Senpai" src="/bunnyGirl.jpg" className="object-cover w-full aspect- rounded-2xl" />
      </Link>
      <Link to="anime/86">
        <img title="86" src="/86-eighty-six-lena-shin-4k--78.0_d.jpg" className="object-cover w-full aspect- rounded-2xl" />
      </Link>
    </div>
  );
}
