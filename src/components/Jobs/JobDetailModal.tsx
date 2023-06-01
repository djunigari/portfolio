'use client'

import moment from 'moment'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Modal from '../Utils/Modal'
import { EmployerWithTecnologies } from './Jobs'

const JobDetailModal = ({
  employer,
}: {
  employer: EmployerWithTecnologies
}) => {
  const t = useTranslations('layout.jobs')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const startDate = moment(employer.startAt)
  const timeEnd = moment(employer.endAt)

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

  return (
    <>
      <button className="btn btn-outline" onClick={onOpen}>
        {t('moreDetails')}
      </button>
      <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <div className="flex flex-col items-start">
          <span className="font-semibold">{employer.position}</span>
          <span>{employer.name}</span>
          <span className="font-extralight text-sm">
            {`${startDate.format('MMM YYYY')} - ${timeEnd.format('MMM YYYY')}`}
          </span>
          <span className="font-extralight text-sm">{employer.location}</span>

          <p className="my-4 p-2">{employer.description}</p>

          <div className="flex gap-2">
            {employer.tecnologies.map((t, i) => (
              <span key={i} className="badge badge-ghost badge-outline">
                {t.tecnology.name}
              </span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default JobDetailModal
