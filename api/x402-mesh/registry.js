export const X402_MESH_REGISTRY = {
  protocol: 'x402-mesh/0.1',
  registry_url: 'https://tinkrr-api.tinkrr.workers.dev/.well-known/x402-mesh.json',
  vendor_id: 'tinkrr',
  name: 'Tinkrr API',
  description: 'Agent-ready API services with MCP, OpenAPI, and x402 machine payments.',
  endpoint: 'https://tinkrr-api.tinkrr.workers.dev',
  discovery: {
    openapi: 'https://tinkrr-api.tinkrr.workers.dev/openapi.json',
    mcp_server_card: 'https://tinkrr-api.tinkrr.workers.dev/.well-known/mcp/server-card.json',
    api_catalog: 'https://tinkrr-api.tinkrr.workers.dev/.well-known/api-catalog',
    agent_skills: 'https://tinkrr-api.tinkrr.workers.dev/.well-known/agent-skills/index.json',
    llms: 'https://tinkrr-api.tinkrr.workers.dev/llms.txt',
    sitemap: 'https://tinkrr-api.tinkrr.workers.dev/sitemap.xml'
  },
  payments: {
    x402: true,
    mesh: true,
    mpp: false,
    ap2: false,
    acp: false
  }
};

export default X402_MESH_REGISTRY;
