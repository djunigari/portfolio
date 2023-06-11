import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? [
        process.env.NEXT_URL,
        process.env.NEXT_URL?.replace('https://www.', 'https://'),
      ]
    : [process.env.NEXT_URL]

export default async function middleware(request: NextRequest) {
  const origin = request.headers.get('Origin') || request.headers.get('host')
  const regex = /\/api\/*/

  if (regex.test(request.url)) {
    console.log('origin:', origin)
    if (
      process.env.NODE_ENV === 'production' &&
      (!origin || !allowedOrigins.includes(origin))
    ) {
      return new Response(null, {
        status: 400,
        statusText: 'Bad Request',
        headers: {
          'Content-Type': 'text/plain',
        },
      })
    }
    return NextResponse.next()
  }
  // Step 1: Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'en'

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'pt', 'jp'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'en',
  })

  const response = handleI18nRouting(request)

  // Step 3: Alter the response
  response.headers.set('x-default-locale', defaultLocale)

  return response
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!_next|.*\\..*).*)'],
}
