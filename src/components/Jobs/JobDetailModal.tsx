'use client'

import { Employer } from '@prisma/client'
import Image from 'next/image'
import { useState } from 'react'
import Modal from '../Utils/Modal'

const JobDetailModal = ({ employer }: { employer: Employer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className="btn btn-secondary" onClick={onOpen}>
        more detail
      </button>
      <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div className="flex flex-col items-center">
          {employer.logoImageUrl && (
            <div className="flex rounded-md bg-white max-w-max items-center justify-center p-2 ">
              <Image
                src={employer.logoImageUrl}
                width={200}
                height={200}
                loading="lazy"
                alt="Employer logo"
              />
            </div>
          )}
          <p className="py-4">{employer.description}</p>
        </div>
      </Modal>
    </>
  )
}

export default JobDetailModal
