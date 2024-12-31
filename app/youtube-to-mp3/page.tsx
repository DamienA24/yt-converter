import { Metadata } from "next";
import { generateMetaTags } from "../config/seo-keywords";
import InputVideo from "@/components/ui/inputVideo";
import Features from "@/components/ui/features";
import TutorialGeneral from "@/components/ui/tutorialGeneral";

export const metadata: Metadata = generateMetaTags('mp3');

export default function YouTubeToMP3() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col w-full items-center space-y-6 mt-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          YouTube to MP3 Converter
        </h1>
        
        <div className="max-w-2xl text-center">
          <p className="text-xl mb-6">
            Convert and download YouTube videos to high-quality MP3 audio files instantly.
            Our converter ensures the best audio quality for your music collection.
          </p>
        </div>

        <InputVideo />

        <section className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            How to Convert YouTube Videos to MP3
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="text-xl font-medium mb-2">1. Paste YouTube URL</h3>
              <p>Copy the YouTube video URL and paste it into the converter box above</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-medium mb-2">2. Select MP3 Format</h3>
              <p>Choose your preferred audio quality and format settings</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-medium mb-2">3. Download MP3</h3>
              <p>Click the download button and save your MP3 file</p>
            </div>
          </div>
        </section>

        <Features />
        <TutorialGeneral />
      </div>
    </main>
  );
}
