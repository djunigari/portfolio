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
  const search = async (
    language: string,
    lastCursor?: string,
  ): Promise<JobsResponseData> => {
    'use server'
    const res = await fetch(
      `${api}?language=${language}&take=3&${
        lastCursor ? `lastCursor=${lastCursor}` : ''
      }`,
    )
    if (res.status === 200) return await res.json()
    else
      return {
        data: [],
        metaData: { total: 0, lastCursor: '', hasNextPage: false },
      }
  }

  return <JobList search={search} />
}
