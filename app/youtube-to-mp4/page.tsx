import { Metadata } from "next";

import ExplainConvert from "@/components/ui/explain-convert";
import ResumeExplain from "@/components/ui/resume-explain";
import InputVideo from "@/components/ui/inputVideo";
import Globe from "@/components/ui/globe";
import Faq from "@/components/ui/faq";

export const metadata: Metadata = {
  title: "YouTube to MP4 Converter",
  description:
    "Convert YouTube videos to MP4 format with our easy-to-use YouTube to MP4 converter. Download high-definition videos quickly and for free.",
  applicationName: "YoutubeToMp3 Converter pro - YouTube to MP4 Converter",
  keywords: [
    "YouTube to MP4 converter",
    "Convert YouTube to MP4",
    "Free YouTube MP4 converter",
    "youtube to mp4 converter --",
    "youtube mp4 converter",
    "convert youtube to mp4",
    "youtube converter mp4",
    "youtube converter -- mp4",
  ],
  creator: "YoutubeToMp3 Converter pro Team",
  publisher: "YoutubeToMp3 Converter pro",
};
export default function Youtube2MP4() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col w-full items-center space-x-2 mt-40">
        <p className="text-3xl sm:text-6xl font-bold text-center">
          YTMP3 converter <br />
          for the best YouTube to MP4 experience!
        </p>
        <InputVideo />
        <Globe />
      </div>

      <ExplainConvert format={"mp4"} />
      <Faq format={"mp4"} />
      <ResumeExplain format={"mp4"} />
    </main>
  );
}
