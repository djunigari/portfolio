'use client'

import useModalDisclosure from '@/hooks/useModalDisclosure'
import { useTranslations } from 'next-intl'
import { Sidebar } from '../Utils/Sidebar'
import { ContactForm } from './ContactForm'

export function ContactButton() {
  const t = useTranslations('navigation')
  const { isOpen, onOpen, onClose } = useModalDisclosure()

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
