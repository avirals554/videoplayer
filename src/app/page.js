"use client";
import React from "react";
import VideoGrid from "./components/VideoGrid";
import VideoData from "./data/VideoData.json";
import id from "./data/ids2.json";
import background_image from "./data/background_imgae.png";
export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900"
      style={{
        backgroundImage:
          "url('https://w.wallhaven.cc/full/g8/wallhaven-g8yx37.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Header Section */}
        <header className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            My Videos search git branch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-black-400 max-w-2xl mx-auto leading-relaxed">
            Discover amazing content from our curated collection
          </p>
        </header>

        {/* Video Grid */}
        <div className="relative">
          <VideoGrid videos={id} />
        </div>
      </div>
    </div>
  );
}
