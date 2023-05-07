import { getTranslator } from '@/i18n'
import { locales } from '@/interfaces/internationalization'

export async function generateStaticParams() {
  return locales.map(({ language, country }) => ({
    lang: language,
    country,
  }))
}

export default async function ExamplePage({
  params,
}: {
  params: { lang: string; country: string }
}) {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}`, // our middleware ensures this is valid
  )
  return (
    <div>
      <h1>Example page: {translate('welcome.helloWorld')}</h1>
    </div>
  )
}
