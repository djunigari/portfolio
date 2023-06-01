import { prisma } from '@/utils/prisma'
import { Academy, Course } from '@prisma/client'
import { Courses } from './Courses'

export async function Academies() {
  let academies: (Academy & {
    courses: Course[]
  })[]
  try {
    academies = await prisma.academy.findMany({
      include: { courses: { orderBy: { completedAt: 'desc' } } },
    })
  } catch (error: any) {
    console.error('Academies', error.message)
    academies = []
  }

  return <Courses academies={academies} />
}
