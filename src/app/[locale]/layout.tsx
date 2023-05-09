import { TopMenu } from '@/components/Menu/TopMenu'
import { ThemeSwitch } from '@/components/Theme/ThemeSwitch'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Alexandre Djun Igari',
  description: 'WebSite as curriculum online created by Alexandre Djun Igari',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'jp' }, { locale: 'pt' }]
}

interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className="theme-dark theme-green h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TopMenu />
          <h1>Teste</h1>
          <ThemeSwitch />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
