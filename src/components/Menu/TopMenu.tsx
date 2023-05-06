'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Language = {
  name: string
  locale: string
}

const languages: Language[] = [
  { name: 'English', locale: 'en' },
  { name: 'Português', locale: 'pt' },
  { name: '日本語', locale: 'ja-JP' },
]

export function TopMenu() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col gap-1">
      {languages.map((l) => (
        <Link key={l.locale} href={pathname} locale={l.locale}>
          {l.name}
        </Link>
      ))}
    </div>
  )
}
