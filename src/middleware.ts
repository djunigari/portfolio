import { NextRequest, NextResponse } from 'next/server'
import langParser from 'accept-language-parser'
import {
  defaultCountry,
  defaultLang,
  defaultLocale,
  getLocalePartsFrom,
  locales,
} from './i18n'

function findBestMatchingLocale(acceptLangHeader: string) {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader)

  const findMatched = (code: string, region?: string) => {
    return locales.find((locale) => {
      const { lang, country } = getLocalePartsFrom({ locale })
      if (region) return code === lang && region === country
      return code === lang
    })
  }

  // find the first locale that matches a locale in our list
  for (let i = 0; i < parsedLangs.length; i++) {
    const { code, region } = parsedLangs[i]

    // attempt to match both the language and the country
    const matchedLocale = findMatched(code, region)
    console.log(matchedLocale)
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
    const { lang, country } = getLocalePartsFrom({ locale })
    return !pathname.startsWith(`/${lang}/${country}`)
  })
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const { lang: currentLang, country: currentCountry } = getLocalePartsFrom({
    pathname,
  })

  // Check if the default locale is in the pathname
  if (currentLang === defaultLang && currentCountry === defaultCountry) {
    // we want to REMOVE the default locale from the pathname,
    // and later use a rewrite so that Next will still match
    // the correct code file as if there was a locale in the pathname
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLang}/${defaultCountry}`,
          pathname.startsWith('/') ? '/' : '',
        ),
        request.url,
      ),
    )
  }

  // Redirect if there is no locale
  if (isPathnameMissingLocale(pathname)) {
    const matchedLocale = findBestMatchingLocale(
      request.headers.get('Accept-Language') || defaultLocale,
    )
    if (matchedLocale !== defaultLocale) {
      const { lang, country } = getLocalePartsFrom({ locale: matchedLocale })
      return NextResponse.redirect(
        new URL(`/${lang}/${country}${pathname}`, request.url),
      )
    } else {
      return NextResponse.rewrite(
        new URL(`/${defaultLang}/${defaultCountry}${pathname}`, request.url),
      )
    }
  }
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
