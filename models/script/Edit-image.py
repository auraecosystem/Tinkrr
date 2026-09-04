import os
import xai_sdk

client = xai_sdk.Client(api_key=os.getenv("XAI_API_KEY"))

response = client.image.sample(
    prompt="Render this as a pencil sketch with detailed shading",
    model="grok-imagine-image-2.0",
    image_url="https://docs.x.ai/assets/api-examples/images/style-realistic.png",
)

print(response.url)
