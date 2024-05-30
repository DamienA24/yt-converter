import { Meteors } from "@/components/ui/meteors";

const data = [
  {
    question: "How do I convert YouTube videos to MP3 using this app ?",
    response:
      "Simply paste the YouTube video URL into the input field on our homepage and select 'Convert to MP3.' Our YouTube to MP3 converter will quickly process your request and provide a high-quality MP3 file for download.",
  },
  {
    question: "Is the YouTube to MP3 converter free to use ?",
    response:
      "Yes, our YouTube to MP3 converter is completely free. You can convert and download unlimited YouTube videos to MP3 without any cost.",
  },
  {
    question: "Can I convert YouTube videos to MP4 as well ?",
    response:
      "Absolutely! Our app allows you to convert YouTube videos to both MP3 and MP4 formats. Just paste the video URL, choose your preferred format, and click 'Convert.'",
  },
  {
    question:
      "What is the difference between this MP3 YouTube converter and others ?",
    response:
      "Our MP3 YouTube converter is designed for speed and ease of use. With a user-friendly interface and fast processing times, you can convert videos to MP3 quickly and without hassle. Additionally, our service is free and doesn't require any software installation.",
  },
  {
    question: "Are there any limits on the number of conversions ?",
    response:
      "No, there are no limits on the number of conversions you can perform. You can use our YouTube MP3 converter as many times as you need, for free.",
  },
  {
    question: "Is it safe to use this YouTube to MP3 converter ?",
    response:
      "Yes, our YouTube to MP3 converter is safe and secure. We prioritize user privacy and ensure that all conversions are done without compromising your data.",
  },
];
export default function Faq() {
  return (
    <div className="mt-10 flex flex-col" id="faq">
      <h1 className="text-xl font-bold text-center">
        A Free YouTube to MP3 Converter
      </h1>
      <div className="grid lg:grid-cols-3  lg:grid-rows-2 gap-y-4 justify-items-center mt-10">
        {data.map((value, index) => {
          return (
            <div className="w-11/12 sm:w-full relative max-w-md" key={index}>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  {value.question}
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  {value.response}
                </p>

                <Meteors number={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
