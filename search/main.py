# main.py
from fastapi import FastAPI, Query
import yt_dlp

app = FastAPI()

@app.get("/scrape")
def scrape(channel_url: str = Query(..., description="YouTube channel URL")):
    ydl_opts = {"extract_flat": True, "dump_single_json": True}

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(channel_url, download=False)

    videos = []
    for i, e in enumerate(info["entries"], start=1):
        videos.append({
            "id": i,
            "title": e.get("title"),
            "channelName": e.get("uploader"),
            "videoUrl": f"https://www.youtube.com/watch?v={e['id']}"
        })

    return {"channel": channel_url, "videos": videos}
