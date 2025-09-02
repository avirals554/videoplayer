import { useState } from "react";
import { useRouter } from "next/navigation";

const VideoCard = ({ video }) => {
  const { id, title, channelName, videoUrl } = video;

  const videoid = (Url) => {
    return Url.split("v=")[1]?.split("&")[0] || Url.split("/").pop();
  };
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoid(videoUrl)}/maxresdefault.jpg`;
  return (
    <div
      style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}
    >
      {isPlaying ? (
        // Show YouTube player
        <iframe
          width="100%"
          height="200"
          src={`https://www.youtube.com/embed/${videoid(videoUrl)}`}
          title={title}
        ></iframe>
      ) : (
        // Show thumbnail - click to play
        <img
          src={thumbnail}
          alt={title}
          style={{ width: "100%", height: "200px", cursor: "pointer" }}
          onClick={() => router.push(`/Video/${id}`)} // lowercase "router" and backticks
        />
      )}

      <h3>{title}</h3>
      <p>{channelName}</p>
    </div>
  );
};
export default VideoCard;
