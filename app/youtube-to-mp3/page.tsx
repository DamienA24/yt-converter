import { Metadata } from "next";

import ExplainConvert from "@/components/ui/explain-convert";
import ResumeExplain from "@/components/ui/resume-explain";
import InputVideo from "@/components/ui/inputVideo";
import Globe from "@/components/ui/globe";
import Faq from "@/components/ui/faq";

export const metadata: Metadata = {
  title: "YouTube to MP3 Converter - Free",
  description:
    "Convert YouTube videos to MP3 quickly and easily with our free YouTube to MP3 converter. Enjoy high-quality audio files instantly.",
  applicationName: "YoutubeToMp3 Converter pro - YouTube to MP3 Converter",
  keywords: [
    "YouTube to MP3 converter",
    "Free YouTube MP3 converter",
    "Convert YouTube to MP3",
    "youtube to mp3 converter -- free",
    "youtube converter -- mp3",
    "convert youtube to mp3",
    "youtube mp3 converter --",
    "ytmp3 converter --",
    "mp3 youtube converter --",
  ],
  creator: "YoutubeToMp3 Converter pro Team",
  publisher: "YoutubeToMp3 Converter pro",
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col w-full items-center space-x-2 mt-40">
        <p className="text-3xl sm:text-6xl font-bold text-center">
          YTMP3 converter <br />
          for the best YouTube to MP3 experience!
        </p>
        <InputVideo />
        <Globe />
      </div>

      <ExplainConvert format={"mp3"} />
      <Faq format={"mp3"} />
      <ResumeExplain format={"mp3"} />
    </main>
  );
}
