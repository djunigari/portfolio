import { prisma } from '@/utils/prisma'
import { LayoutTitle } from '../LayoutTitle'
import { Courses } from './Courses'

export async function Academies() {
  const academies = await prisma.academy.findMany({
    include: { courses: { orderBy: { completedAt: 'desc' } } },
  })

  return (
    <>
      <LayoutTitle title="courses" />
      <Courses academies={academies} />
    </>
  )
}
