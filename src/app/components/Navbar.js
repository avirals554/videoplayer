"use client";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white/80 opacity-100 dark:bg-gray-900/80 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Left Section: Logo + Search */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            <a href="/">video archive</a>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search videos..."
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
