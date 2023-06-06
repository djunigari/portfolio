import { Employer, TecnologiesOnEmployer, Tecnology } from '@prisma/client'
import { JobList } from './JobList'

const api = `${process.env.NEXT_URL}/api/jobs`

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
      `${api}?take=3&${lastCursor ? `lastCursor=${lastCursor}` : ''}`,
    )
    return await res.json()
  }

  return <JobList search={search} />
}
