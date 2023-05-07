class Locale {
  displayName: string
  language: string
  country: string

  constructor(displayName: string, language: string, country: string) {
    this.displayName = displayName
    this.language = language
    this.country = country
  }

  get code() {
    return `${this.language}-${this.country}`
  }
}

export const locales: Locale[] = [
  new Locale('English', 'en', 'US'),
  new Locale('Português', 'pt', 'BR'),
  new Locale('日本語', 'ja', 'JP'),
]
export const defaultLocale = locales[0]

// https://nextjs.org/docs/app/building-your-application/routing/internationalization
// https://dev.to/ajones_codes/the-ultimate-guide-to-internationalization-i18n-in-nextjs-13-ed0
