import { MainContainer } from "./MainContainer";

export function Body() {
  return (
    <div className="black-333 flex items-center flex-col text-stone-300 text-3xl  pt-5">
        <MainContainer />
        <div className="flex flex-col font-nunito items-center pt-30 pb-30 text-center text-zinc-300 sm:text-3xl md:text-4xl lg:text-4xl text-2xl px-5">
            These are my top nine anime shows of all time. <br /> Click for more info.
        </div>
    </div>
  )
}
