import { Metadata } from "next";

import InputVideo from "@/components/ui/inputVideo";
import Globe from "@/components/ui/globe";
import Features from "@/components/ui/features";
import TutorialGeneral from "@/components/ui/tutorialGeneral";
import FaqGeneral from "@/components/ui/faqGeneral";

export const metadata: Metadata = {
  title: "Free YouTube to MP3 Converter,Free YouTube to MP4 Converter",
  description:
    "Convert YouTube videos to MP3 and MP4 formats quickly and for free. Enjoy high-quality audio and video files with our easy-to-use converter.",
  applicationName: "YoutubeToMp3 Converter pro",
  keywords: [
    "YouTube to MP3 converter",
    "YouTube to MP4 converter",
    "Free YouTube converter",
    "youtube to mp4 converter --",
    "youtube to mp3 converter --",
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

      <Features />
      <TutorialGeneral />
      <FaqGeneral />
    </main>
  );
}
