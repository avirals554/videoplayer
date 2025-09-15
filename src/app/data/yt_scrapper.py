
import yt_dlp
import json

# Change this to any YouTube channel URL
url = "https://www.youtube.com/@pewdiepie"


ydl_opts = {"extract_flat": True, "dump_single_json": True}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    info = ydl.extract_info(url, download=False)

videos = []
for i, e in enumerate(info["entries"], start=1):
    videos.append({
        "id": i,
        "title": e.get("title"),
        "channelName": e.get("uploader"),
        "videoUrl": f"https://www.youtube.com/watch?v={e['id']}"
    })

with open("videos.json", "w") as f:
    json.dump(videos, f, indent=2)

print(f"Saved {len(videos)} videos to videos.json")
