'use server'

import { prisma } from '@/utils/prisma'
import { Academy, Course } from '@prisma/client'

export type AcademyWithCourses = Academy & {
  courses: Course[]
}

export async function findAcademyWithCourses(language: string) {
  try {
    return await prisma.academy.findMany({
      include: {
        courses: { where: { language }, orderBy: { completedAt: 'desc' } },
      },
    })
  } catch (error: any) {
    console.error('Academies', error.message)
    return []
  }
}
