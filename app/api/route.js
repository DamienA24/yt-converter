import ytdl from "ytdl-core";
import { getVideoMP3Base64 } from "yt-get";
export async function POST(request) {
  const { videoUrl, format } = await request.json();

  if (ytdl.validateURL(videoUrl)) {
    let data;
    const info = await ytdl.getBasicInfo(videoUrl);

    if (format === "mp3") {
      const { base64, title } = await getVideoMP3Base64(videoUrl);
      data = Buffer.from(base64, "base64");
    } else {
      data = ytdl(videoUrl);
    }

    const titleVideo = info.videoDetails.title;

    return new Response(data, {
      headers: {
        "Content-Disposition": `attachment; filename="${titleVideo}.${format}"`,
        "Content-Type": format === "mp3" ? "audio/mpeg" : "video/mp4",
        "X-File-Name": `${titleVideo}.${format}`, // Custom header to include the file name
      },
    });
  }
  return new Response("Invalid URL", { status: 400 });
}
