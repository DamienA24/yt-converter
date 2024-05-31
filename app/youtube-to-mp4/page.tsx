import ExplainConvert from "@/components/ui/explain-convert";
import ResumeExplain from "@/components/ui/resume-explain";
import InputVideo from "@/components/ui/inputVideo";
import Globe from "@/components/ui/globe";
import Faq from "@/components/ui/faq";

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
