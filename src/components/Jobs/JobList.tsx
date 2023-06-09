'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState, useTransition } from 'react'
import { Job } from './Job'
import { EmployerWithTecnologies, JobsResponseData } from './Jobs'

interface JobListProps {
  search: (language: string, cursor?: string) => Promise<JobsResponseData>
}

export function JobList({ search }: JobListProps) {
  const locale = useLocale()
  const t = useTranslations('layout.jobs')
  const [loading, setLoading] = useState<boolean>(true)
  const [employers, setEmployers] = useState<EmployerWithTecnologies[]>([])
  const [lastCursor, setLastCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [isPending, startTransition] = useTransition()

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
  }, [search, locale])

  if (loading) return <p>Loading Jobs....</p>

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
