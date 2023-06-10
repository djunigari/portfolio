'use server'

import { Employer, TecnologiesOnEmployer, Tecnology } from '@prisma/client'

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

const API_JOBS = `${process.env.NEXT_URL}/api/jobs`

export async function search(
  language: string,
  lastCursor?: string,
): Promise<JobsResponseData> {
  const res = await fetch(
    `${API_JOBS}?language=${language}&take=3&${
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
