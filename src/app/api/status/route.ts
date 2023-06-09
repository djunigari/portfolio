export async function GET(req: Request) {
  const origin = req.headers.get('Origin')

  return new Response('Hello, Next.js!', {
    headers: {
      'Access-Control-Allow-Origin':
        origin || process.env.NODE_ENV !== 'production' ? '*' : '',
      'Content-Type': 'text/plain',
    },
  })
}
