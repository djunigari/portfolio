'use client'

import { setIsOpen } from '@/redux/features/contactModalSlice'
import { useAppDispatch } from '@/redux/hooks'
import { useTranslations } from 'next-intl'

export function ContactButton() {
  const t = useTranslations('navigation')

  const dispatch = useAppDispatch()

  const onOpen = () => {
    dispatch(setIsOpen(true))
    document.querySelector('body')?.classList.remove('overflow-scroll')
    document.querySelector('body')?.classList.add('overflow-hidden')
  }

  return (
    <a className="btn btn-ghost rounded-btn text-xs" onClick={onOpen}>
      {t('contacts')}
    </a>
  )
}
