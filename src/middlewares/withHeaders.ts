import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server'
import { MiddlewareFactory } from './types'

export const withHeaders: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // const origin = request.headers.get('origin')
    // console.log(origin)
    const res = await next(request, _next)
    if (res) {
      res.headers.set('x-content-type-options', 'nosniff')
      res.headers.set('x-dns-prefetch-control', 'false')
      res.headers.set('x-download-options', 'noopen')
      res.headers.set('x-frame-options', 'SAMEORIGIN')
    }
    return res
  }
}
