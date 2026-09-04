const ORIGIN = 'https://tinkrr-api.tinkrr.workers.dev';

export const AGENT_LINKS = [
  `<${ORIGIN}/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"`,
  `<${ORIGIN}/.well-known/api-catalog>; rel="describedby"; type="application/json"`,
  `<${ORIGIN}/.well-known/mcp/server-card.json>; rel="service"; type="application/json"`,
  `<${ORIGIN}/llms.txt>; rel="alternate"; type="text/plain"`,
  `<${ORIGIN}/.well-known/x402-mesh.json>; rel="payment"; type="application/json"`
].join(', ');

export function addAgentHeaders(response, { limit = 100, remaining = 100, reset = 60 } = {}) {
  const headers = new Headers(response.headers);
  headers.set('Link', AGENT_LINKS);
  headers.set('Vary', 'Accept');
  headers.set('RateLimit', `limit=${limit}, remaining=${remaining}, reset=${reset}`);
  headers.set('X-Content-Type-Options', 'nosniff');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export function negotiateContent(request, { markdown, html, jsonResponse }) {
  const accept = request.headers.get('Accept') || '';
  if (accept.includes('text/markdown')) {
    return new Response(markdown, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept'
      }
    });
  }
  if (accept.includes('application/json') && jsonResponse) return jsonResponse;
  return html;
}

export function json(data, init = {}) {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  return new Response(JSON.stringify(data, null, 2), { ...init, headers });
}
