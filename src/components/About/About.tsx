'use client'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi2'
import { Skills } from '../Skills/Skills'

const list: string[] = [
  'Next.js',
  'Nest.js',
  'GraphQL',
  'Tailwindcss',
  'Typescript',
]

export function About() {
  const locale = useLocale()
  const t = useTranslations('about')

  return (
    <div className="flex flex-col sm:flex-row items-center p-2">
      <div className="flex flex-col w-full sm:w-1/2 justify-center items-center p-8">
        <div className="radial-progress" style={{ '--value': 90 }}>
          90%
        </div>
        <span>BUILDING....</span>
      </div>
      <div className={`ml-auto mr-auto sm:mr-0`}>
        <div className="flex flex-col w-min">
          <p className="self-start font-semibold">{t('name')}</p>
          <div className="flex flex-col ">
            <div className="flex items-baseline justify-between">
              <span className="text-5xl md:text-7xl font-bold">REACT</span>
              <div className="flex gap-2">
                <Link
                  href={
                    'https://www.linkedin.com/in/alexandre-djun-igari-91a03065/'
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-onHoverPrimaryBg" />
                </Link>
                <Link
                  href={'https://github.com/djunigari'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-onHoverPrimaryBg" />
                </Link>
                <Link
                  href={`/resume/resume-${locale}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiDocumentText className="h-6 w-6 md:h-8 md:w-8 cursor-pointer hover:text-onHoverPrimaryBg" />
                </Link>
              </div>
            </div>
            <span className="text-5xl md:text-7xl font-bold">DEVELOPER</span>
            <p className="self-end flex justify-end md:w-1/2 text-sm mb-2">
              {t('resume')}
            </p>
          </div>
        </div>
        <Skills list={list} showAll={true} />
      </div>
    </div>
  )
}
