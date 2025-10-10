export function BackButton() {
  return (
    <button className="group relative cursor-pointer flex items-center gap-1.5 px-4 py-4 bg-[#222] rounded-full hover:bg-stone-950 transition-colors duration-200 text-stone-300 hover:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
      <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-stone-900 text-stone-200 text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">go back</span>
    </button>
  );
}
