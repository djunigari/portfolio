'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi2'
import { Skills } from './Skills'

export function About() {
  const t = useTranslations('about')
  return (
    <div className="flex">
      <div className="flex w-1/2 items-end justify-end"></div>
      <div className="w-1/2">
        <div className="flex flex-col w-min">
          <p className="self-start font-semibold">{t('name')}</p>
          <div className="flex flex-col ">
            <div className="flex items-baseline justify-between">
              <span className="text-7xl font-bold">REACT</span>
              <div className="flex gap-2">
                <Link
                  href={
                    'https://www.linkedin.com/in/alexandre-djun-igari-91a03065/'
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="h-8 w-8 cursor-pointer" />
                </Link>
                <Link
                  href={'https://github.com/djunigari'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="h-8 w-8 cursor-pointer" />
                </Link>
                <HiDocumentText className="h-8 w-8 cursor-pointer" />
              </div>
            </div>
            <span className="text-7xl font-bold">DEVELOPER</span>
            <p className="self-end flex justify-end w-1/2 text-sm mb-2">
              {t('resume')}
            </p>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  )
}
