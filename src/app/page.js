"use client";
import React from "react";
import VideoGrid from "./components/VideoGrid";
import VideoData from "./data/Videos.json";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            <a href="http://localhost:3000/">video archive </a>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing content from our curated collection
          </p>
        </header>

        {/* Video Grid */}
        <VideoGrid videos={VideoData} />
      </div>
    </div>
  );
}
