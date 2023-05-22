'use client'

import { useEffect, useState } from 'react'
import { Job } from './Job'
import { EmployerWithTecnologies, JobsResponseData } from './Jobs'

interface JobListProps {
  search: (cursor?: string) => Promise<JobsResponseData>
}

export function JobList({ search }: JobListProps) {
  const [employers, setEmployers] = useState<EmployerWithTecnologies[]>([])
  const [lastCursor, setLastCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)

  const getMoreData = () => {
    search(lastCursor).then(
      ({ data, metaData: { lastCursor, hasNextPage } }) => {
        setEmployers((prev) => [...prev, ...data])
        setLastCursor(lastCursor)
        setHasNextPage(hasNextPage)
      },
    )
  }

  useEffect(() => {
    search().then(({ data, metaData: { lastCursor, hasNextPage } }) => {
      setEmployers(data)
      setLastCursor(lastCursor)
      setHasNextPage(hasNextPage)
    })
  }, [search])

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {employers?.map((e, i) => (
          <Job key={i} employer={e} />
        ))}
      </div>
      {hasNextPage && (
        <button className="mt-2" onClick={getMoreData}>
          More
        </button>
      )}
    </div>
  )
}
