import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-stone-200 bg-[#333]">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <p className="text-xl mb-4">Anime not found 😢</p>
      <Link to="/" className="text-blue-300 hover:underline">
        ← Back to grid
      </Link>
    </div>
  );
}
