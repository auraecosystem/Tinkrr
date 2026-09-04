curl -G "https://www.startuphub.ai/api/v1/startups" \
  -H "Authorization: Bearer sk_live_..." \
  --data-urlencode "country=nigeria" \
  --data-urlencode "sector=Cybersecurity" \
  --data-urlencode "founded_after=2026-07-01" \
  --data-urlencode "sort=created_at.desc" \
  --data-urlencode "limit=100"

curl -G "https://www.startuphub.ai/api/v1/startups" \
  -H "Authorization: Bearer sk_live_" \
  --data-urlencode "country=usa" \
  --data-urlencode "sector=Artificial Intelligence" \
  --data-urlencode "sort=created_at.desc" \
  --data-urlencode "founded_after=2026-06-01" \
  --data-urlencode "limit=1000"
