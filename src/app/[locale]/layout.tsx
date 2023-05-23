import { BackToTopButton } from '@/components/BackToTopButton'
import { ContactButton } from '@/components/ContactButton'
import Navigation from '@/components/Navigation/Navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import './globals.css'
import notFound from './not-found'

export const metadata = {
  title: 'Alexandre Djun Igari',
  description: 'WebSite as curriculum online created by Alexandre Djun Igari',
}

// Causing Warning: Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported. at AppContainer
// export function generateStaticParams() {
//   return [{ locale: 'en' }, { locale: 'jp' }, { locale: 'pt' }]
// }

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
      <body className="theme-dark theme-gray h-screen bg-primaryBg text-onPrimaryBg">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
        </NextIntlClientProvider>
        <ContactButton />
        <BackToTopButton />
      </body>
    </html>
  )
}
