import brFlag from '../../public/images/country-flags/br.svg'
import jpFlag from '../../public/images/country-flags/jp.svg'
import usFlag from '../../public/images/country-flags/us.svg'

class Locale {
  displayName: string
  language: string
  country: string
  imageUrl: string

  constructor(
    displayName: string,
    language: string,
    country: string,
    imageUrl: any,
  ) {
    this.displayName = displayName
    this.language = language
    this.country = country
    this.imageUrl = imageUrl
  }

  get code() {
    return `${this.language}-${this.country}`
  }
}

export const locales = [
  new Locale('English', 'en', 'US', usFlag),
  new Locale('Português', 'pt', 'BR', brFlag),
  new Locale('日本語', 'jp', 'JP', jpFlag),
]

// https://nextjs.org/docs/app/building-your-application/routing/internationalization
// https://dev.to/ajones_codes/the-ultimate-guide-to-internationalization-i18n-in-nextjs-13-ed0
