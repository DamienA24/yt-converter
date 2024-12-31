import { Metadata } from "next";
import InputVideo from "@/components/ui/inputVideo";
import Features from "@/components/ui/features";
import TutorialGeneral from "@/components/ui/tutorialGeneral";

export const metadata: Metadata = {
  title: "YouTube to MP4 Converter - Download Videos in HD Quality | Free Online Tool",
  description: "Download YouTube videos in MP4 format with HD quality. Fast, free, and secure video converter. No registration needed. Convert YouTube videos to MP4 in just a few clicks.",
  keywords: [
    "YouTube to MP4 converter",
    "download YouTube videos",
    "YouTube video downloader",
    "convert YouTube to MP4",
    "HD video converter",
    "free YouTube to MP4",
    "best video converter",
    "online video converter"
  ],
  alternates: {
    canonical: "https://www.youtubetomp3converterpro.com/youtube-to-mp4"
  }
};

export default function YouTubeToMP4() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col w-full items-center space-y-6 mt-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          YouTube to MP4 Converter
        </h1>
        
        <div className="max-w-2xl text-center">
          <p className="text-xl mb-6">
            Download YouTube videos in high-quality MP4 format instantly.
            Choose your preferred quality, from 720p up to 4K resolution.
          </p>
        </div>

        <InputVideo />

        <section className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            How to Convert YouTube Videos to MP4
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="text-xl font-medium mb-2">1. Paste Video URL</h3>
              <p>Copy your YouTube video URL and paste it into the converter box above</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-medium mb-2">2. Choose Quality</h3>
              <p>Select your desired video quality (720p, 1080p, 4K)</p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-medium mb-2">3. Download MP4</h3>
              <p>Click download and get your high-quality MP4 video</p>
            </div>
          </div>
        </section>

        <Features />
        <TutorialGeneral />
      </div>
    </main>
  );
}
