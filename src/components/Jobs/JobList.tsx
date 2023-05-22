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
    search(lastCursor).then((values) => {
      setEmployers((prev) => [...prev, ...values.data])
      setLastCursor(values.metaData.lastCursor)
      setHasNextPage(values.metaData.hasNextPage)
    })
  }

  useEffect(() => {
    search().then((values) => {
      setEmployers((prev) => [...prev, ...values.data])
      setLastCursor(values.metaData.lastCursor)
      setHasNextPage(values.metaData.hasNextPage)
    })
  }, [search])

  return (
    <div>
      <h2 className="text-3xl mb-2">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {employers?.map((e, i) => (
          <Job key={i} employer={e} />
        ))}
      </div>
      {hasNextPage && <button onClick={getMoreData}>more</button>}
    </div>
  )
}
