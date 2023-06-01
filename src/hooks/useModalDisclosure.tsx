import { useState } from 'react'

export default function useModalDisclosure() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => {
    setIsOpen(true)
    document.body.classList.remove('overflow-scroll')
    document.body.classList.add('overflow-hidden')
  }

  const onClose = () => {
    setIsOpen(false)
    document.body.classList.remove('overflow-hidden')
    document.body.classList.add('overflow-scroll')
  }

  return { isOpen, onOpen, onClose }
}
