export const seoKeywords = {
  mp3Converter: {
    main: [
      "YouTube to MP3 converter",
      "convert YouTube to MP3",
      "YouTube audio downloader",
    ],
    longTail: [
      "how to convert YouTube to MP3 high quality",
      "best YouTube to MP3 converter 320kbps",
      "download YouTube music to MP3 free",
      "convert YouTube playlist to MP3",
      "YouTube to MP3 converter without losing quality",
      "convert YouTube music to MP3 offline",
      "YouTube to MP3 converter for iPhone",
      "YouTube to MP3 converter for Android",
      "safe YouTube to MP3 converter online",
      "convert YouTube shorts to MP3",
    ],
  },
  mp4Converter: {
    main: [
      "YouTube to MP4 converter",
      "download YouTube videos",
      "YouTube video downloader",
    ],
    longTail: [
      "download YouTube videos in 4K quality",
      "convert YouTube to MP4 1080p free",
      "YouTube to MP4 converter high resolution",
      "download YouTube playlist to MP4",
      "YouTube to MP4 converter without watermark",
      "convert YouTube shorts to MP4",
      "YouTube to MP4 converter for mobile",
      "download YouTube videos with subtitles",
      "batch YouTube to MP4 converter",
      "YouTube to MP4 offline converter",
    ],
  },
  general: {
    main: [
      "free YouTube converter",
      "online video converter",
      "YouTube downloader",
    ],
    longTail: [
      "fastest YouTube converter online",
      "unlimited YouTube converter free",
      "YouTube converter without registration",
      "YouTube converter with custom quality",
      "YouTube converter for multiple formats",
      "secure YouTube converter no virus",
      "YouTube converter for social media",
      "professional YouTube converter tool",
      "YouTube converter with video editor",
      "YouTube converter for podcasts",
    ],
  },
};

export const generateMetaTags = (type: 'mp3' | 'mp4' | 'general') => {
  const keywords = type === 'general' ? seoKeywords.general : seoKeywords[`${type}Converter`];
  return {
    keywords: [...keywords.main, ...keywords.longTail],
    title: `${keywords.main[0]} - Free Online Tool`,
    description: `Convert and download ${type === 'mp3' ? 'audio' : type === 'general' ? 'videos and audio' : 'videos'} from YouTube with our free ${type === 'general' ? 'YouTube' : type.toUpperCase()} converter. High quality, fast, and secure. No registration required.`,
  };
};
