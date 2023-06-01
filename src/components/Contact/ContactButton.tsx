'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Sidebar } from '../Utils/Sidebar'
import { ContactForm } from './ContactForm'

export function ContactButton() {
  const t = useTranslations('navigation')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => {
    setIsOpen(true)
    document.querySelector('body')?.classList.remove('overflow-scroll')
    document.querySelector('body')?.classList.add('overflow-hidden')
  }

  const onClose = () => {
    setIsOpen(false)
    document.querySelector('body')?.classList.remove('overflow-hidden')
    document.querySelector('body')?.classList.add('overflow-scroll')
  }

  return (
    <>
      <a className="btn btn-ghost rounded-btn text-xs" onClick={onOpen}>
        {t('contacts')}
      </a>

      <Sidebar isOpen={isOpen} onClose={onClose}>
        <ContactForm />
      </Sidebar>
    </>
  )
}
