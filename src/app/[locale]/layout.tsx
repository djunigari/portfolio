import { BackToTopButton } from '@/components/BackToTopButton'
import { ContactButton } from '@/components/ContactButton'
import Navigation from '@/components/Navigation/Navigation'
import { NextIntlClientProvider } from 'next-intl'
import Link from 'next/link'
import { ReactNode } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi2'
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
        <div
          className={`
          absolute
          w-full
          h-full
          -inset-0
          bg-gradient-to-br from-gray-900 to-gray-600 opacity-80
        `}
        ></div>
        <div
          id="main-content"
          className="relative h-screen w-full overflow-scroll"
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navigation />
            <main className="max-w-3xl mx-4 sm:mx-auto ">{children}</main>
          </NextIntlClientProvider>
          <ContactButton />
          <BackToTopButton />
          <footer className="flex flex-row gap-4 justify-center items-center p-10">
            <Link
              href={
                'https://www.linkedin.com/in/alexandre-djun-igari-91a03065/'
              }
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" />
            </Link>
            <Link
              href={'https://github.com/djunigari'}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" />
            </Link>
            <Link
              href={'/resume/resume-en.pdf'}
              target="_blank"
              rel="noreferrer"
            >
              <HiDocumentText className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" />
            </Link>
          </footer>
        </div>
      </body>
    </html>
  )
}
