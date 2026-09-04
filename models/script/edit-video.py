import os
import xai_sdk

client = xai_sdk.Client(api_key=os.getenv("XAI_API_KEY"))

response = client.video.generate(
    prompt="Give the woman a silver necklace",
    model="grok-imagine-video-1.5",
    video_url="https://data.x.ai/docs/video-generation/portrait-wave.mp4",
)

print(response.url)
