'use client'

import { locales } from '@/interfaces/internationalization'
import Link from 'next/link'

export function TopMenu() {
  // const pathname = usePathname()
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-1">
        {locales.map((l) => (
          <Link
            key={l.code}
            href={`/${l.language}/${l.country}`}
            locale={l.code}
          >
            {l.displayName}
          </Link>
        ))}
      </div>
    </div>
  )
}
