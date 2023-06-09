import { limiter } from '../config/limiter'

export async function GET(req: Request) {
  const origin = req.headers.get('Origin')
  const remaining = await limiter.removeTokens(1)
  console.log('remaining:', remaining)

  if (remaining < 0) {
    return new Response(null, {
      status: 429,
      statusText: 'Too many request',
      headers: {
        'Access-Control-Allow-Origin':
          origin || process.env.NODE_ENV !== 'production' ? '*' : '',
        'Content-Type': 'text/plain',
      },
    })
  }

  // const origin = request.headers.get('Origin')

  // if (!origin || origin !== process.env.NEXT_URL)
  //   return new Response('', { status: 405 })

  return new Response('Hello, Next.js!', {
    headers: {
      'Access-Control-Allow-Origin':
        origin || process.env.NODE_ENV !== 'production' ? '*' : '',
      'Content-Type': 'text/plain',
    },
  })
}
