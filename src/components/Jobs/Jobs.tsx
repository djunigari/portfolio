import { Employer, TecnologiesOnEmployer, Tecnology } from '@prisma/client'
import { LayoutTitle } from '../LayoutTitle'
import { JobList } from './JobList'

const api = 'http://localhost:3000/api/jobs'

export interface EmployerWithTecnologies extends Employer {
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

export function Jobs() {
  const search = async (lastCursor?: string): Promise<JobsResponseData> => {
    'use server'
    const res = await fetch(
      `${api}${lastCursor ? `?lastCursor=${lastCursor}` : ''}`,
      { cache: 'no-cache' },
    )
    return await res.json()
  }

  return (
    <>
      <LayoutTitle title="jobs" />
      <JobList search={search} />
    </>
  )
}
