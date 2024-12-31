import { Metadata } from "next";
import Script from "next/script";
import { generateMetaTags } from "./config/seo-keywords";

import InputVideo from "@/components/ui/inputVideo";
import Globe from "@/components/ui/globe";
import Features from "@/components/ui/features";
import TutorialGeneral from "@/components/ui/tutorialGeneral";
import FaqGeneral from "@/components/ui/faqGeneral";

export const metadata: Metadata = generateMetaTags('general');

export default function Home() {
  return (
    <>
      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "YouTube Converter Pro",
          "applicationCategory": "Multimedia",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "featureList": [
            "YouTube to MP3 conversion",
            "YouTube to MP4 conversion",
            "High quality audio extraction",
            "Multiple video quality options",
            "Fast download speed",
            "No registration required"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
          }
        })}
      </Script>

      <main className="flex min-h-screen flex-col">
        <div className="flex flex-col w-full items-center space-x-2 mt-40">
          <h1 className="text-3xl sm:text-6xl font-bold text-center mb-4">
            YouTube to MP3 Converter
          </h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Convert your favorite YouTube videos to high-quality MP3 and MP4 files
            instantly. Free, fast, and no registration required.
          </p>
          <InputVideo />
          <Globe />
        </div>

        <section className="py-12 px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Why Choose Our YouTube Converter?
          </h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="mb-4">
              Our YouTube to MP3 and MP4 converter offers the highest quality
              conversion available online. Whether you need audio for your
              playlist or video for offline viewing, we have got you covered.
            </p>
          </div>
        </section>

        <Features />
        <TutorialGeneral />
        <FaqGeneral />
      </main>
    </>
  );
}
