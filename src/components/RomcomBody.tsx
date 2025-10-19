import { romcomList } from "./animeData";
import { BackButton } from "./BackButton";
import { MainContainer } from "./MainContainer";

export function RomcomBody() {
  return (
    <div className="black-333 flex items-center flex-col text-stone-300 text-3xl  pt-5">
        <MainContainer list={romcomList}/>
        <div className="flex flex-col max-w-[1000px] font-nunito items-center pt-30 pb-30 text-left text-zinc-300 sm:text-3xl md:text-4xl lg:text-3xl text-2xl px-5">
            These are peak shows in my peak watching experience.
        </div>
        <div className="min-w-5/6 flex justify-start pb-2 lg:min-w-1/2">
            <BackButton />
        </div>
    </div>
  )
}
