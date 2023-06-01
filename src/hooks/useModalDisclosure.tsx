import { useState } from 'react'

export default function useModalDisclosure() {
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

  return { isOpen, onOpen, onClose }
}
