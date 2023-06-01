'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { MobileNavMenu } from './MobileNavMenu'

export function NavMenu() {
  const t = useTranslations('navigation')
  const navigation = [
    { name: t('projects'), href: '#projects' },
    { name: t('jobs'), href: '#jobs' },
    { name: t('educations'), href: '#educations' },
    { name: t('courses'), href: '#courses' },
    { name: t('about'), href: '#about' },
    { name: t('contacts'), href: '/contacts' },
  ]

  const [anchor, setAnchor] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const a = window.location.href
      const path = a.split('#')
      if (path.length > 1) setAnchor(`#${path[1]}`)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const anchors = document.querySelectorAll('a[href^="#"]')
      const scrollTop = document.documentElement.scrollTop

      anchors.forEach((anchor) => {
        const href = anchor.getAttribute('href')

        if (href && href !== '') {
          const element = document.querySelector(href)
          if (element instanceof HTMLElement) {
            if (
              element.offsetTop <= scrollTop + 100 &&
              element.offsetTop + element.offsetHeight > scrollTop + 100
            ) {
              setAnchor(href)
            }
          }
        }
      })
    }

    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="hidden min-[675px]:flex min-[675px]:gap-2 min-[675px]:justify-start ">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={`${item.href}`}
            aria-current={anchor === item.href ? 'page' : undefined}
            className={[
              anchor === item.href ? 'btn-active' : '',
              'btn btn-ghost rounded-btn text-xs',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setAnchor(item.href)}
          >
            {item.name}
          </a>
        ))}
      </div>
      <MobileNavMenu
        navigation={navigation}
        anchor={anchor}
        setAnchor={setAnchor}
        className="min-[675px]:hidden"
      />
    </>
  )
}
