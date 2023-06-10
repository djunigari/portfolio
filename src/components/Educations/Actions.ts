'use server'

import { prisma } from '@/utils/prisma'

export async function findEducation(language: string) {
  try {
    return await prisma.education.findMany({
      where: { language },
      orderBy: { startAt: 'desc' },
    })
  } catch (e: any) {
    console.error('Educations', e.message)
    return []
  }
}
