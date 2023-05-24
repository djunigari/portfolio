'use client'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('about')
  return (
    <div className="relative flex flex-col shadow-black shadow-lg sm:flex-row items-center p-2 bg-center bg-[url('/images/backimage.jpeg')] ">
      <div
        className={`
          absolute
          w-full
          -inset-0
          bg-gradient-to-br from-gray-900 to-gray-600 opacity-80
        `}
      ></div>
      {/* <div className="flex sm:w-1/2 items-end justify-end"></div> */}
      <div className="relative ml-auto mr-auto sm:mr-0">
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
                  <BsLinkedin className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" />
                </Link>
                <Link
                  href={'https://github.com/djunigari'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" />
                </Link>
                <HiDocumentText className="h-6 w-6 md:h-8 md:w-8 cursor-pointer" />
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