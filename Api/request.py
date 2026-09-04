import requests

resp = requests.post(
    "https://www.startuphub.ai/api/v1/lists/ai-generate",
    json={
        "prompt": "stealth AI agent startups in Israel founded after 2024",
        "limit": 100,
    },
    headers={"Authorization": "Bearer sk_live_..."},
)
data = resp.json()["data"]
print(f"Found {data['matched']} startups ({data['created']} brand new)")
