'use client'

import { Education } from '@prisma/client'
import moment from 'moment'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { findEducation } from './Actions'
import ListSkeleton from './Skeleton/ListSkeleton'

export function Educations() {
  const locale = useLocale()
  const [loading, setLoading] = useState<boolean>(true)
  const [educations, setEducations] = useState<Education[]>([])

  useEffect(() => {
    findEducation(locale).then((list) => {
      setEducations(list)
      setLoading(false)
    })
  }, [locale])

  if (loading) return <ListSkeleton />

  return (
    <div className="flex flex-col gap-2 divide-y w-full rounded-md bg-mutedBg text-onMutedBg p-2 shadow-black shadow-md">
      {educations.map((e, i) => (
        <div key={i} className="flex flex-col p-2">
          <div className="flex justify-between">
            <span className="font-semibold">{e.name}</span>
            <span className="text-sm">{`${moment(e.startAt).year()}-${
              e.endAt ? moment(e.endAt).year() : ''
            }`}</span>
          </div>
          <span className="text-xs ml-2">{`${e.degree} 
          ${e.field ? ` - ${e.field}` : ''}
          `}</span>
        </div>
      ))}
    </div>
  )
}
