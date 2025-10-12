import { BackButton } from "../components/BackButton";

export function AboutmeBody() {
  return (
    // I feel like the min-h-[70] will break on weird screen sizes but idk how to fix it.
    <div className="min-h-[70vh] black-333 text-stone-300 text-left flex flex-col items-center pt-10 px-5 py-5 sm:px-10 md:px-10 lg:px-7">
      <div className="max-w-5xl text-lg sm:text-xl lg:text-3xl">
        <p className="pt-6">
          Hello, I am Yahallo. I am a huge anime fan and I have been watching
          anime for around 5 years now. I have watched over 400 or so anime
          series and movies. I have a deep love for the art and storytelling of
          anime. I created this site to share my top nine favorite anime series
          of all time. I hope you enjoy my selections and find some new
          favorites to watch! <br /> <br />
          I was such a weeb that I even studied Japanese. <br /> <br />
          I also made an open source anime picker that let you find something to rewatch
          from your own list of anime. If you're interested, you can check it out <a href="https://animepicker.yahallo.tech" target="blacnk" className="text-blue-300 hover:text-blue-500 font-bold">here</a>.
        </p>
        <p className="pt-6">
          Feel free to reach out to me on{" "}
          <a
            className="text-blue-300 hover:text-blue-500 font-bold"
            href="https://github.com/yahalloe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github.
          </a>
        </p>
      </div>
      <div className="min-w-5/6 flex justify-start pb-2 pt-10 lg:min-w-1/2">
            <BackButton />
        </div>
    </div>
    
  );
}
