'use client'

import { Employer, TecnologiesOnEmployer, Tecnology } from '@prisma/client'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState, useTransition } from 'react'
import { Job } from './Job'
import { ListSkeleton } from './Skeleton/ListSkeleton'

export type EmployerWithTecnologies = Employer & {
  tecnologies: (TecnologiesOnEmployer & {
    tecnology: Tecnology
  })[]
}

export interface JobsResponseData {
  data: EmployerWithTecnologies[]
  metaData: {
    total: number
    lastCursor: string
    hasNextPage: boolean
  }
}

const API_JOBS = `/api/jobs`

export function Jobs() {
  const locale = useLocale()
  const t = useTranslations('layout.jobs')

  const [loading, setLoading] = useState<boolean>(true)
  const [employers, setEmployers] = useState<EmployerWithTecnologies[]>([])
  const [lastCursor, setLastCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [isPending, startTransition] = useTransition()

  const search = async (
    language: string,
    lastCursor?: string,
  ): Promise<JobsResponseData> => {
    const url = `${API_JOBS}?language=${language}&take=3&${
      lastCursor ? `lastCursor=${lastCursor}` : ''
    }`
    const res = await fetch(url)
    if (res.status === 200) return await res.json()
    else
      return {
        data: [],
        metaData: { total: 0, lastCursor: '', hasNextPage: false },
      }
  }

  const getMoreData = () => {
    search(locale, lastCursor).then(
      ({ data, metaData: { lastCursor, hasNextPage } }) => {
        setEmployers((prev) => [...prev, ...data])
        setLastCursor(lastCursor)
        setHasNextPage(hasNextPage)
      },
    )
  }

  useEffect(() => {
    search(locale).then(({ data, metaData: { lastCursor, hasNextPage } }) => {
      setEmployers(data)
      setLastCursor(lastCursor)
      setHasNextPage(hasNextPage)
      setLoading(false)
    })
  }, [locale])

  if (loading) return <ListSkeleton />

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {employers?.map((e, i) => (
          <Job key={i} employer={e} />
        ))}
      </div>
      {hasNextPage && (
        <button
          disabled={isPending}
          className="btn btn-sm btn-outline mt-4"
          onClick={() => startTransition(() => getMoreData())}
        >
          {isPending ? (
            <span className="loading loading-dots loading-xs"></span>
          ) : (
            t('more')
          )}
        </button>
      )}
    </div>
  )
}
