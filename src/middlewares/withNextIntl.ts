import createIntlMiddleware from 'next-intl/middleware'
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server'
import { MiddlewareFactory } from './types'

export const withNextIntl: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (request.nextUrl.pathname.startsWith('/api')) {
      return NextResponse.next()
    }

    const handleI18nRouting = createIntlMiddleware({
      locales: ['en', 'pt', 'jp'],
      defaultLocale: 'en',
      localePrefix: 'always',
    })

    const response = handleI18nRouting(request)

    return NextResponse.next(response)
  }
}
