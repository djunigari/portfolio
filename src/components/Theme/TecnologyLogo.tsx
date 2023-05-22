'use client'

import useStickyState from '@/hooks/useStickyState'
import { themes } from '@/interfaces/theme'
import Image from 'next/image'

export function TecnologyLogo({ url }: { url: string }) {
  const [theme] = useStickyState<string>(themes[0], 'Theme')
  return (
    <Image
      src={url.replace(`{theme}`, `theme-${theme}` || 'theme-gray')}
      width={20}
      height={20}
      loading="lazy"
      alt="tecnology logo"
    />
  )
}
