import Navbar from '@/components/Navigation/Navbar'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import Footer from './footer'
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
    <html lang={locale} data-theme="luxury">
      <body className="min-h-screen bg-gradient-dots overflow-scroll">
        <div
          className={`
          fixed
          w-full
          h-full
          -inset-0
          -z-10
          bg-gradient-to-br from-gray-900 to-gray-600 opacity-80
        `}
        ></div>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="max-w-3xl px-4 md:mx-auto ">{children}</main>
        </NextIntlClientProvider>

        {/* <ContactButton />
        <BackToTopButton /> */}
        <Footer className="mt-4" />
      </body>
    </html>
  )
}
