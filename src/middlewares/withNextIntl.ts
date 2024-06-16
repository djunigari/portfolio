import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { MiddlewareFactory } from './types'

export const withNextIntl: MiddlewareFactory = () => {
  return async (request: NextRequest) => {
    if (request.nextUrl.pathname.startsWith('/api')) {
      return NextResponse.next()
    }

    const handleI18nRouting = createIntlMiddleware({
      locales: ['en', 'pt', 'jp'],
      defaultLocale: 'en',
    })

    const response = handleI18nRouting(request)

    return NextResponse.next(response)
  }
}
