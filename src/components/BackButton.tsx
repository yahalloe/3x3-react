import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="flex items-end">
      <button
        onClick={() => navigate(-1)}
        className="group relative cursor-pointer gap-1.5 px-3 py-3 lg:px-4 lg:py-4 bg-[#222] rounded-full hover:bg-stone-950 transition-colors duration-200 text-stone-300 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>

        {/* Tooltip */}
        <span
          className="
            absolute left-full ml-3 top-1/2 -translate-y-1/2
            bg-stone-900 text-stone-200 text-sm px-2 py-1 rounded
            opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
            whitespace-nowrap
            before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2
            before:border-4 before:border-transparent before:border-r-stone-900   /* 👈 arrow */
          "
        >
          go back
        </span>
      </button>
    </div>
  );
}
