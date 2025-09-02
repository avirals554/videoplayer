"use client";

import React from "react";

export default function Navbar() {
  // This function handles the form submission, but currently just prevents the page from reloading.
  // You could add search logic here in the future.
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted!");
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* App Title/Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            Home kitchen
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-sm">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="search"
                placeholder="Search videos..."
                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
