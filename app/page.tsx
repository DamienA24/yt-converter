import { SquarePlay } from "lucide-react";

import ExplainConvert from "@/components/ui/explain-convert";
import ResumeExplain from "@/components/ui/resume-explain";
import InputVideo from "@/components/ui/inputVideo";
import Globe from "@/components/ui/globe";
import Faq from "@/components/ui/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex items-center ml-8 mt-8">
        <SquarePlay className="mr-2 h-6 w-6 text-[#f9120a]" />
        <h1 className="text-xl font-bold">Convert Video</h1>
      </div>

      <div className="flex flex-col w-full items-center space-x-2 mt-40">
        <p className="text-6xl font-bold text-center">
          Download video from YouTube <br />
          in mp3 or mp4 format.
        </p>
        <InputVideo />
        <Globe />
      </div>

      <ExplainConvert />
      <Faq />
      <ResumeExplain />
    </main>
  );
}
