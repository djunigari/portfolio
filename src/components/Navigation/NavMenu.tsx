'use client'

import { NavigationMenuOption } from '@/interfaces/navigation'

import { useEffect, useState } from 'react'

interface NavMenuProps {
  navigation: NavigationMenuOption[]
}

export function NavMenu({ navigation }: NavMenuProps) {
  const [anchor, setAnchor] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const a = window.location.href
      const path = a.split('#')
      if (path.length > 1) setAnchor(`#${path[1]}`)
    }
  }, [])

  return (
    <div className="hidden sm:flex sm:justify-start space-x-4">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={`${item.href}`}
          aria-current={anchor === item.href ? 'page' : undefined}
          className={[
            anchor === item.href
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={() => setAnchor(item.href)}
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}
