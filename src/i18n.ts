import { defaultLocale } from './interfaces/internationalization'

export const getLocalePartsFrom = (pathname: string) => {
  const pathnameParts = pathname!.toLowerCase().split('/')
  return {
    lang: pathnameParts[1],
    country: pathnameParts[2],
  }
}

const dictionaries: Record<string, any> = {
  'en-US': () =>
    import('./dictionaries/en-US.json').then((module) => module.default),
  'en-CA': () =>
    import('./dictionaries/en-CA.json').then((module) => module.default),
  'fr-CA': () =>
    import('./dictionaries/fr-CA.json').then((module) => module.default),
} as const

export const getTranslator = async (locale: string) => {
  // if dictionary do not exist set dictionary to default
  const dictionary =
    (dictionaries[locale] && (await dictionaries[locale]())) ||
    (await dictionaries[defaultLocale.code]())

  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split('.')
      .reduce((obj, key) => obj && obj[key], dictionary)
    if (!translation) {
      return key
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value))
      })
    }
    return translation
  }
}
