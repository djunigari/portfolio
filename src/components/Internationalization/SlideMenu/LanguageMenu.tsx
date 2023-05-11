'use client'

import { locales } from '@/interfaces/internationalization'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import { LanguageButton } from './LanguageButton'
import LanguageSlideMenu from './LanguageSlideMenu'

export default function LanguageMenu() {
  const defaultLocale = useLocale()
  const [isOpen, setOpen] = useState(false)
  const locale = locales.find((l) => l.language === defaultLocale)
  const flagUrl = locale?.imageUrl || locales[0].imageUrl
  const displayName = locale?.displayName || locales[0].displayName

  return (
    <>
      <LanguageButton
        displayName={displayName}
        flagUrl={flagUrl}
        onClick={() => setOpen(true)}
      />
      <LanguageSlideMenu isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  )
}
