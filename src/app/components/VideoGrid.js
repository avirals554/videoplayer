import VideoCard from "./VideoCard";

function VideoGrid({ videos }) {
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
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
