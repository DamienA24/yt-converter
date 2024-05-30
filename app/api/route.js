import ytdl from "ytdl-core";
import { getVideoMP3Base64 } from "yt-get";

export async function POST(request) {
  try {
    const { videoUrl, format } = await request.json();

    if (ytdl.validateURL(videoUrl)) {
      let data;
      const info = await ytdl.getBasicInfo(videoUrl);

      try {
        if (format === "mp3") {
          const { base64 } = await getVideoMP3Base64(videoUrl);
          data = Buffer.from(base64, "base64");
        } else {
          data = ytdl(videoUrl);
        }
      } catch (conversionError) {
        return new Response(
          `Error converting video to ${format}: ${conversionError.message}`,
          {
            status: 500,
          }
        );
      }

      let titleVideo = info.videoDetails.title;
      titleVideo = titleVideo.replace(/[^\x00-\x7F]/g, "");

      return new Response(data, {
        headers: {
          "Content-Disposition": `attachment; filename="${titleVideo}.${format}"`,
          "Content-Type": format === "mp3" ? "audio/mpeg" : "video/mp4",
          "X-File-Name": `${titleVideo}.${format}`, // Custom header to include the file name
        },
      });
    } else {
      return new Response("Invalid URL", { status: 400 });
    }
  } catch (error) {
    return new Response(`Error processing request: ${error.message}`, {
      status: 500,
    });
  }
}
