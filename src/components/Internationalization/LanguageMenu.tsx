'use client'

import useStickyState from '@/hooks/useStickyState'
import { locales } from '@/interfaces/internationalization'
import { useState } from 'react'
import LanguageSlideMenu from './LanguageSlideMenu'

export default function LanguageMenu() {
  const [isOpen, setOpen] = useState(false)
  const [language] = useStickyState(locales[0].displayName, 'language')

  return (
    <>
      <div className="flex flex-row gap-1">
        <text className="cursor-pointer" onClick={() => setOpen(true)}>
          {language}
        </text>
      </div>
      <LanguageSlideMenu isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  )
}
