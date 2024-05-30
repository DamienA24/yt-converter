import Image from "next/image";

import { Button } from "@/components/ui/button";

import step1 from "@/public/step1.png";

const data = [
  {
    title: "Step 1",
    description: "Enter the URL of the YouTube video you want to download.",
    image: step1,
  },
  {
    title: "Step 2",
    description: "Select your format desired, mp3 or mp4",
    image: step1,
  },
  {
    title: "Step 3",
    description: `Click on "convert" and voila!`,
    image: step1,
  },
];
export default function ExplainConvert() {
  return (
    <div className="mt-10 flex flex-col w-screen  bg-[#fef5fc]" id="about">
      <h1 className="mt-10 text-center text-xl font-bold">
        How use the converter ?
      </h1>
      <div className="flex mt-10 flex justify-around">
        {data.map((value) => {
          return (
            <div className="flex flex-col items-center" key={value.title}>
              <h2 className="font-semibold">{value.title}</h2>
              <p>{value.description}</p>
              <Image
                src={value.image}
                alt="Picture of the author"
                className="mt-5"
                width={500}
                height={500}
              />
            </div>
          );
        })}
      </div>

      <Button className="ml-2 bg-[#f9120a] w-28 my-10 mx-auto">Convert</Button>
    </div>
  );
}
