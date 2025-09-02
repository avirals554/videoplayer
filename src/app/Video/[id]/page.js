export default function VideoPage({ params }) {
  const videoId = params.id;
  return (
    <div>
      <h1>Video Player</h1>
      <iframe
        width="1615"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Video"
      ></iframe>
    </div>
  );
}
