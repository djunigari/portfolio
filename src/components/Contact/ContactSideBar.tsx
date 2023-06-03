'use client'

import { setIsOpen } from '@/redux/features/contactModalSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Sidebar } from '../Utils/Sidebar'
import { ContactForm } from './ContactForm'

export default function ContactSideBar() {
  const isOpen = useAppSelector((status) => status.contactModalReducer.isOpen)
  const dispatch = useAppDispatch()

  const onClose = () => {
    dispatch(setIsOpen(false))
    document.querySelector('body')?.classList.remove('overflow-hidden')
    document.querySelector('body')?.classList.add('overflow-scroll')
  }

  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <ContactForm />
    </Sidebar>
  )
}
