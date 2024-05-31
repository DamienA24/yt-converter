import { Link2 } from "lucide-react";

export default function ResumeExplain({ format }: { format: string }) {
  return (
    <div className="px-2 sm:px-0 mt-10 flex flex-col w-screen bg-[#F1F1F1] items-center">
      <h1 className="text-xl font-bold mt-10 text-center">
        Free YouTube to {format} Converter for All Platforms
      </h1>
      <p className="font-bold text-center">
        Simple, fast, and anonymous, our application converts YouTube videos to
        {format} effortlessly.
      </p>
      <div>
        <div className="mt-10">
          <p>Downloading YouTube videos to {format} has never been easier:</p>
          <ul className="list-disc mt-5 ml-5">
            <li>
              Paste your YouTube video URL into our YouTube to
              {format} converter.
            </li>
            <li>Choose the right format ({format})</li>
            <li>
              Download your video, playlist, or short in the chosen format using
              our {format} YouTube converter.
            </li>
          </ul>
        </div>

        <div className="mt-10 mb-10">
          <p>Power and Simplicity:</p>
          <ul className="list-disc mt-5 ml-5">
            <li>
              Compatible with all devices (smartphones, tablets, computers).
            </li>
            <li>
              Uses the latest technologies for fast conversions with our YouTube
              to {format} converter.
            </li>
            <li>
              No sign-up, and anonymous with our free YouTube {format}{" "}
              converter.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
