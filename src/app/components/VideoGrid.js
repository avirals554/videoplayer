import VideoCard from "./VideoCard";
import videos_with_ids from "./data/videos_with_ids.json";
//import ids from "./data/ids.json";
function getVideodata() {}
function VideoGrid({ videos }) {
  const videoMap = videos_with_ids.reduce((acc, video) => {
    acc[video.id] = video;
    return acc;
  }, {});

  // Map over the incoming IDs and find their full data
  const matchedVideos = videos.map((id) => videoMap[id]).filter(Boolean);
  return (
    <div>
      <h1 className="text-4xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-black mb-6">
        My Videos
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {" "}
        {matchedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
