import { prisma } from '@/utils/prisma'
import { Courses } from './Courses'

export async function Academies() {
  const academies = await prisma.academy.findMany({
    include: { courses: { orderBy: { completedAt: 'desc' } } },
  })

  return <Courses academies={academies} />
}
