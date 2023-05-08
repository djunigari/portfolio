import langParser from 'accept-language-parser'
import { NextRequest, NextResponse } from 'next/server'
import { getLocalePartsFrom } from './i18n'
import { defaultLocale, locales } from './interfaces/internationalization'

function findBestMatchingLocale(acceptLangHeader: string) {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader)

  const findMatched = (code: string, region?: string) => {
    return locales.find((locale) => {
      const { language, country } = locale
      if (region) return code === language && region === country
      return code === language
    })
  }

  // find the first locale that matches a locale in our list
  for (let i = 0; i < parsedLangs.length; i++) {
    const { code, region } = parsedLangs[i]

    // attempt to match both the language and the country
    const matchedLocale = findMatched(code, region)
    if (matchedLocale) return matchedLocale

    // if we didn't find a match for both language and country, try just the language
    const matchedLanguage = findMatched(code)
    if (matchedLanguage) return matchedLanguage
  }
  // if we didn't find a match, return the default locale
  return defaultLocale
}

// Check if there is any supported locale in the pathname
function isPathnameMissingLocale(pathname: string) {
  return locales.every((locale) => {
    const { language, country } = locale
    return !pathname.startsWith(`/${language}/${country}`)
  })
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // ignore /public folder
  if (pathname.startsWith('/public')) {
    return NextResponse.rewrite(
      new URL(pathname.replace('/public', ''), request.url),
    )
  }

  const { lang: currentLang, country: currentCountry } =
    getLocalePartsFrom(pathname)

  // Check if the default locale is in the pathname
  if (
    currentLang === defaultLocale.language &&
    currentCountry === defaultLocale.country
  ) {
    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocale.language}/${defaultLocale.country}`,
          pathname.startsWith('/') ? '/' : '',
        ),
        request.url,
      ),
    )
  }

  // Redirect if there is no locale
  if (isPathnameMissingLocale(pathname)) {
    const matchedLocale = findBestMatchingLocale(
      request.headers.get('Accept-Language') || defaultLocale.code,
    )
    if (matchedLocale !== defaultLocale) {
      const { language, country } = matchedLocale
      return NextResponse.redirect(
        new URL(`/${language}/${country}${pathname}`, request.url),
      )
    } else {
      return NextResponse.rewrite(
        new URL(
          `/${defaultLocale.language}/${defaultLocale.country}${pathname}`,
          request.url,
        ),
      )
    }
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
