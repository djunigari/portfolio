'use client'

import useStickyState from '@/hooks/useStickyState'
import { locales } from '@/interfaces/internationalization'
import { useState } from 'react'
import LanguageSlideMenu from './LanguageSlideMenu'
import Image from 'next/image'

export default function LanguageMenu() {
  const [isOpen, setOpen] = useState(false)
  const [language] = useStickyState(locales[0].displayName, 'language')
  const [flagImage] = useStickyState(locales[0].imageUrl, 'flagImage')

  return (
    <>
      <div className="flex flex-row gap-1 items-center">
        <div className="flex w-6 h-6 items-center">
          <Image
            priority
            src={flagImage || locales[0].imageUrl}
            alt="Country flag image"
          />
        </div>
        <text
          className="cursor-pointer hover:underline"
          onClick={() => setOpen(true)}
        >
          {language}
        </text>
      </div>
      <LanguageSlideMenu isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  )
}
