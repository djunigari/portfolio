import { prisma } from '@/utils/prisma'
import { JobList } from './JobList'

export function Jobs() {
  // const result = await prisma.$transaction([
  //   prisma.employer.count(),
  //   prisma.employer.findMany({
  //     take: 3,
  //     include: { tecnologies: { include: { tecnology: true } } },
  //   }),
  // ])

  // const total = result[0] ?? 0
  // const employers = result[1]
  // const myCursor = employers[employers.length]?.id || ''

  const search = async (lastCursor?: string) => {
    'use server'
    const res = await prisma.employer.findMany({
      take: 3,
      ...(lastCursor && {
        skip: 1, // Skip the cursor
        cursor: {
          id: lastCursor as string,
        },
      }),
      include: { tecnologies: { include: { tecnology: true } } },
    })
    console.log(res)
    return res
  }

  return <JobList search={search} />
}
