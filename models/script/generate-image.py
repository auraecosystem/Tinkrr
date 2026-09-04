import os
import xai_sdk

client = xai_sdk.Client(api_key=os.getenv("XAI_API_KEY"))

response = client.image.sample(
    prompt="A collage of London landmarks in a stenciled street-art style",
    model="grok-imagine-image-2.0",
)

print(response.url)
