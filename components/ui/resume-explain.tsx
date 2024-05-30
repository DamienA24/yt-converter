import { Link2 } from "lucide-react";

export default function ResumeExplain() {
  return (
    <div className="px-2 sm:px-0 mt-10 flex flex-col w-screen bg-[#F1F1F1] items-center">
      <h1 className="text-xl font-bold mt-10 text-center">
        Free YouTube to MP3 Converter for All Platforms
      </h1>
      <p className="font-bold text-center">
        Simple, fast, and anonymous, our application converts YouTube videos to
        MP3 or MP4 effortlessly.
      </p>
      <div>
        <div className="mt-10">
          <p>Downloading YouTube videos to MP3 or MP4 has never been easier:</p>
          <ul className="list-disc mt-5 ml-5">
            <li>
              Enter keywords or paste your YouTube video URL into our YouTube to
              MP3 converter.
            </li>
            <li>Choose the format (MP3 or MP4)</li>
            <li>
              Download your video, playlist, or short in the chosen format using
              our MP3 YouTube converter.
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
              to MP4 converter.
            </li>
            <li>
              No sign-up, and anonymous with our free YouTube MP3 converter.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
