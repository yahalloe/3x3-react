import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="black-111">
      
      <div className="text-lg lg:text-xl font-nunito flex justify-center pt-5 text-zinc-700 gap-5">
        <Link to="/about" className="hover:text-stone-300">about me</Link>
        <a href="https://github.com/yahalloe/3x3-react" target="_blank" className="hover:text-stone-300">source</a>
        <a href="https://myanimelist.net/profile/yahalloe" target="_blank" className="hover:text-stone-300">MAL</a>
        <a href="https://animepicker.yahallo.tech" target="_blank" className="hover:text-stone-300">anime picker</a>
      </div>
      <div className="text-lg lg:text-xl font-nunito flex justify-center pb-5 pt-3 text-zinc-700">
        © 2023-2025 YAHALLOE'S 3X3
      </div>
    </div>
  );
}
