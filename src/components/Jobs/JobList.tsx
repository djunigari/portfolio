'use client'

import { Employer, TecnologiesOnEmployer, Tecnology } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Job } from './Job'

export interface EmployerWithTecnologies extends Employer {
  tecnologies: (TecnologiesOnEmployer & {
    tecnology: Tecnology
  })[]
}

interface JobListProps {
  search: (cursor?: string) => Promise<EmployerWithTecnologies[]>
}

export function JobList({ search }: JobListProps) {
  const [employers, setEmployers] = useState<EmployerWithTecnologies[]>([])

  useEffect(() => {
    search().then((values) => setEmployers(values))
  }, [search])

  return (
    <div>
      <h2 className="text-3xl mb-2">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {employers?.map((e, i) => (
          <Job key={i} employer={e} />
        ))}
      </div>
      {/* <div onClick={async () => await search()}>more</div> */}
    </div>
  )
}
