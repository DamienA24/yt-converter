"use client";
import { useState } from "react";

import { Clapperboard, Music } from "lucide-react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InputVideo() {
  const { toast } = useToast();
  const [videoUrl, setVideoUrl] = useState("");
  const [format, setFormat] = useState("mp3");
  const handleVideoUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleSubmit = async () => {
    if (!validateYouTubeUrl(videoUrl)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid YouTube URL.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Processing",
      description: "Your request is being processed.",
      className: "bg-white",
    });

    const body = {
      videoUrl,
      format,
    };

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const blob = await response.blob();

      const downloadUrl = URL.createObjectURL(blob);
      const contentDisposition = response.headers.get("X-File-Name");

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${contentDisposition}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(downloadUrl);
      return;
    }
    toast({
      title: "Conversion error ",
      description: "Try again",
      variant: "destructive",
    });
  };

  const validateYouTubeUrl = (url: string) => {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  };

  const handleFormat = (value: string) => {
    setFormat(value);
  };
  return (
    <>
      <div className="flex w-full mt-10 justify-center">
        <Input
          type="video"
          placeholder="Paste your Youtube video url"
          className="w-1/2  bg-white"
          onChange={handleVideoUrl}
        />
        <Button onClick={handleSubmit} className="ml-2 bg-[#f9120a]">
          Convert
        </Button>
      </div>
      <div className="flex w-full justify-center mt-2">
        <Button
          className={`${format === "mp3" ? "" : "bg-white"}`}
          variant={format === "mp3" ? "default" : "outline"}
          onClick={() => handleFormat("mp3")}
        >
          <Music className="mr-2 h-4 w-4 " /> Audio/mp3
        </Button>
        <Button
          className={`ml-2 ${format === "mp4" ? "" : "bg-white"}`}
          variant={format === "mp4" ? "default" : "outline"}
          onClick={() => handleFormat("mp4")}
        >
          <Clapperboard className="mr-2 h-4 w-4" /> Video/mp4
        </Button>
        <Toaster />
      </div>
    </>
  );
}
