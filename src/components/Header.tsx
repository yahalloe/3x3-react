import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="black-222">
      <div className="text-2xl sm:text-3xl flex justify-center p-6 sm:p-10 text-stone-300 font-nunito">
        23 11.2
      </div>

      <div className="text-5xl  hover:text-stone-600 sm:text-7xl md:text-9xl lg:max-w-6xl max-w-90 sm:max-w-90 mx-auto flex justify-center pb-6 sm:pb-10 text-stone-300 font-nunito text-center">
        <Link to="/" className="no-underline">
          {title}
        </Link>
      </div>
    </div>
  );
}
