// pages/index.js (or app/page.js if using app router)
"use client";
import React, { useState } from "react";
import VideoCard from "./components/VideoCard";
import VideoGrid from "./components/VideoGrid";
import VideoData from "./data/Videos.json";

export default function HomePage() {
  const [videos] = useState(VideoData);

  return <VideoGrid videos={videos} />;
}
