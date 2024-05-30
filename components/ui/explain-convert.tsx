import Image from "next/image";

import { Button } from "@/components/ui/button";

import step1 from "@/public/step.png";

import step2 from "@/public/step2.png";
import step3 from "@/public/step3.png";

const data = [
  {
    title: "Step 1",
    description:
      "Enter the URL of the video you want to convert using our YTMP3 converter.",
    image: step1,
  },
  {
    title: "Step 2",
    description:
      "Select your desired format: MP3 for audio or MP4 for video using our YTMP3 converter.",
    image: step2,
  },
  {
    title: "Step 3",
    description: `Click on "Convert" and download your video in the chosen format with our YTMP3 converter.`,
    image: step3,
  },
];

export default function ExplainConvert() {
  return (
    <div className="mt-10 flex flex-col w-screen  bg-[#F1F1F1]" id="about">
      <h1 className="mt-10 text-center text-xl font-bold">
        How to use the YouTube to MP3 Converter ?
      </h1>
      <div className="flex flex-col lg:flex-row mt-10 justify-around">
        {data.map((value) => {
          return (
            <div
              className="flex flex-col items-center w-4/12"
              key={value.title}
            >
              <h2 className="font-semibold">{value.title}</h2>
              <p className="text-center">{value.description}</p>
              <Image
                src={value.image}
                alt="Picture of youtube to mp3 converter"
                className="mt-5"
                width={400}
                height={250}
              />
            </div>
          );
        })}
      </div>

      <a className="mx-auto my-10" href="http://localhost:3000/#inputVideo">
        <Button className="ml-2 bg-[#f9120a] w-28  ">Convert</Button>
      </a>
    </div>
  );
}
