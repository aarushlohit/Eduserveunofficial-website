export const runtime = 'nodejs20.x'

export default async function handler(_request: Request): Promise<Response> {
  const body = JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() })
  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
