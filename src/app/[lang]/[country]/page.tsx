import { User } from '@/components/User'
import { ValidLocale, getTranslator } from '@/i18n'
import { Suspense } from 'react'

export default async function Home({
  params,
}: {
  params: { lang: string; country: string }
}) {
  const translate = await getTranslator(
    `${params.lang}-${params.country.toUpperCase()}` as ValidLocale, // our middleware ensures this is valid
  )

  return (
    <div>
      <h1>{translate('welcome.helloWorld')}</h1>
      <h2>
        {translate('welcome.happyYear', {
          year: new Date().getFullYear(),
        })}
      </h2>
      <h1>{JSON.stringify(params)}</h1>
      <Suspense fallback={<p>Carregando repos</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}
