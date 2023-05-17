'use client'

import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations('welcome')

  return (
    <div className={`flex flex-col justify-center`}>
      <h1>{t('helloWorld')}</h1>
      <h2>{t('happyYear', { year: new Date().getFullYear() })}</h2>
      <h1>{JSON.stringify(params)}</h1>
    </div>
  )
}
