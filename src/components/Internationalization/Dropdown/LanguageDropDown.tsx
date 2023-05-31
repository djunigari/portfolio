'use client'

import { locales } from '@/interfaces/internationalization'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export function LanguageDropDown({ className }: { className?: string }) {
  const defaultLocale = useLocale()
  const locale = locales.find((l) => l.language === defaultLocale)
  const flagUrl = locale?.imageUrl || locales[0].imageUrl

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <button tabIndex={0} className="btn btn-ghost rounded-btn p-1">
        <Image
          src={flagUrl}
          alt="Country flag image"
          loading="lazy"
          width={24}
          height={24}
          className="rounded-full"
        />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {locales.map((l, i) => (
          <li key={i}>
            <Link href={`${l.language}`} rel="preload">
              <div
                className="flex w-6 h-6 items-center"
                aria-label="Country flag"
              >
                <Image
                  src={l.imageUrl}
                  alt="Country flag image"
                  loading="lazy"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <span>{l.displayName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
