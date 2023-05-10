'use client'

import { User } from '@/components/User'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'

export default function Home({ params }: { params: { locale: string } }) {
  const t = useTranslations('welcome')

  return (
    <div className={`flex flex-col justify-center`}>
      <h1>{t('helloWorld')}</h1>
      <h2>{t('happyYear', { year: new Date().getFullYear() })}</h2>
      <h1>{JSON.stringify(params)}</h1>
      <Suspense fallback={<p>Carregando repos</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}
