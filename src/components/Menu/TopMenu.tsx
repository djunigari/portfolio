'use client'

import { locales } from '@/interfaces/internationalization'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function TopMenu() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-1">
      {locales.map((l) => (
        <Link key={l.code} href={pathname} locale={l.code}>
          {l.displayName}
        </Link>
      ))}
    </div>
  )
}
