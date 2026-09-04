import os
import xai_sdk

client = xai_sdk.Client(api_key=os.getenv("XAI_API_KEY"))

# generate() handles polling automatically and returns the completed video
response = client.video.generate(
    prompt="A serene lake at sunrise with mist rolling over the water",
    model="grok-imagine-video-1.5",
    duration=5,
    aspect_ratio="16:9",
    resolution="720p",
)

print(response.url)
