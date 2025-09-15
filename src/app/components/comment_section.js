"use client";
import { useState } from "react";
export default function Commentsection() {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User typed:", comment);
    setComment(""); // clear textarea after submit
  };
  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
        Add a comment
      </label>
      <textarea
        id="comment"
        placeholder="Write your thoughts..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full h-28 resize-none rounded-2xl border border-gray-300
                       focus:border-blue-300 focus:ring-2 focus:ring-blue-400
                       focus:outline-none p-3 text-black-800 shadow-sm
                       placeholder-gray-400 transition duration-200 ease-in-out"
      ></textarea>
      <button
        // onClick()=>{setnewcomment() }
        className="mt-3 px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold
                       hover:bg-blue-600 focus:ring-2 focus:ring-blue-300
                       transition-all shadow-sm"
      >
        post
      </button>
    </div>
  );
}
