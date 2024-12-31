import ytdl from "ytdl-core";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { videoUrl, format } = await request.json();
    const info = await ytdl.getInfo(videoUrl);

    console.log("Processing URL:", videoUrl, "Format:", format);

    if (ytdl.validateURL(videoUrl)) {
      try {
        if (format === "mp3") {
          console.log("Getting video info...");
          console.log("Got video info");

          const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
          console.log("Available audio formats:", audioFormats.length);

          // Choisir le meilleur format audio
          const audioFormat = audioFormats.reduce((prev, curr) => {
            return (prev.audioBitrate || 0) > (curr.audioBitrate || 0)
              ? prev
              : curr;
          });

          console.log("Selected audio format:", audioFormat.itag);

          const stream = ytdl(videoUrl, {
            format: audioFormat,
            filter: "audioonly",
            quality: "highestaudio",
            requestOptions: {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
              },
            },
          });

          return new NextResponse(stream, {
            status: 200,
            headers: {
              "Content-Type": "audio/mpeg",
              "Content-Disposition": `attachment; filename="${info.videoDetails.title.replace(
                /[^\x00-\x7F]/g,
                ""
              )}.mp3"`,
              "X-File-Name": `${info.videoDetails.title.replace(
                /[^\x00-\x7F]/g,
                ""
              )}.mp3`,
            },
          });
        } else {
          const stream = ytdl(videoUrl, {
            quality: "highest",
            filter: "audioandvideo",
            requestOptions: {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
              },
            },
          });
          console.log("info", info.videoDetails.title);

          return new NextResponse(stream, {
            status: 200,
            headers: {
              "Content-Type": "video/mp4",
              "Content-Disposition": `attachment; filename="${info.videoDetails.title.replace(
                /[^\x00-\x7F]/g,
                ""
              )}.mp4"`,
              "X-File-Name": `${info.videoDetails.title.replace(
                /[^\x00-\x7F]/g,
                ""
              )}.mp4`, // Custom header to include the file name
            },
          });
        }
      } catch (error) {
        console.error("Error in processing:", error);
        return NextResponse.json(
          { error: "Error processing video: " + error.message },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Invalid YouTube URL" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the request" },
      { status: 500 }
    );
  }
}
