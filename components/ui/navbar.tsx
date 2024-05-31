import { Clapperboard, SquarePlay, Music } from "lucide-react";
export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 sm:m-8">
      <a className="flex items-center cursor-pointer" href="/">
        <SquarePlay className="mr-2 h-6 w-6 text-[#f9120a] hidden sm:block" />
        <h1 className="text-xl font-bold">YouTubeToMP3 Converter Pro</h1>
      </a>
      <div className="flex">
        <div className="flex items-center  hover:underline">
          <Music className="h-4 w-4 " strokeWidth={3} />
          <a
            className="flex items-center cursor-pointer font-bold"
            href="/youtube-to-mp3"
          >
            YouTubeToMP3
          </a>
        </div>

        <div className="flex items-center ml-2  hover:underline">
          <Clapperboard className="h-4 w-4" strokeWidth={3} />
          <a
            className="flex items-center cursor-pointer font-bold"
            href="/youtube-to-mp4"
          >
            YouTubeToMP4
          </a>
        </div>
      </div>
    </div>
  );
}
