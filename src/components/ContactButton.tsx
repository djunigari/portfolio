'use client'

import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { RiWhatsappFill } from 'react-icons/ri'

export function ContactButton() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div
      className={`
      fixed bottom-0 left-0 ml-4 mb-4 flex items-center
    `}
    >
      <RiWhatsappFill
        className="h-16 w-16 cursor-pointer  text-green-500 "
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      />

      <div className="relative">
        <Transition
          show={isShowing}
          enter="transition ease-in-out duration-600 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-600 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="bg-white"
        >
          I will fade in and out
        </Transition>
      </div>
    </div>
  )
}
