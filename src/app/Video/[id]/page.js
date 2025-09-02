import Videos from "./data/Videos.json";

export default function VideoPage({ params }) {
  const videoId = parseInt(params.id, 10);

  function getVideoById(id) {
    return Videos.find((v) => v.id === id) || null;
  }

  const video = getVideoById(videoId);
  if (!video) {
    return <div>Video not found</div>;
  }

  function getEmbedUrl(url) {
    const match = url.match(/v=([a-zA-Z0-9_-]{11})/);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url; // fallback
  }

  const embedUrl = getEmbedUrl(video.videoUrl);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Video Player Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Video Info Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {video.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CH</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {video.channelName || "Unknown Channel"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  1.2M subscribers
                </p>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Description
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {video.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}
