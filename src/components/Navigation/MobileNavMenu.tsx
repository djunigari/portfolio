'use client'

import { NavigationMenuOption } from '@/interfaces/navigation'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

interface MobileNavMenuProps {
  navigation: NavigationMenuOption[]
  anchor: string
  setAnchor: (value: string) => void
  className?: string
}

export function MobileNavMenu({
  navigation,
  anchor,
  setAnchor,
  className,
}: MobileNavMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = (href: string) => {
    setAnchor(href)
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) {
      const elem = document.activeElement as HTMLElement
      if (elem) {
        elem?.blur()
      }
    }
  }, [isOpen])

  return (
    <div className={`navbar-start ${className}`}>
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row items-center">
            <FaBars className="h-6 w-6" />
            {anchor && (
              <span className="ml-2 text-md font-bold">
                {navigation.find((n) => n.href === anchor)?.name}
              </span>
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          id="mobile-menu"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={`${item.href}`}
                aria-current={anchor === item.href ? 'page' : undefined}
                className={[
                  anchor === item.href ? 'btn-active' : '',
                  'btn btn-ghost rounded-btn text-xs',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => handleClick(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
