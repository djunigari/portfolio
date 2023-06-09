import { RateLimiter } from 'limiter'

export async function checkLimiter(limiter: RateLimiter) {
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
}
