'use server'

import { prisma } from '@/utils/prisma'
import { Project, TecnologiesOnProjects, Tecnology } from '@prisma/client'

export type ProjectWithTecnologies = Project & {
  tecnologies: (TecnologiesOnProjects & {
    tecnology: Tecnology
  })[]
}

export async function findProjects(language: string) {
  try {
    const res = await prisma.project.findMany({
      where: { language },
      include: { tecnologies: { include: { tecnology: true } } },
    })
    return res
  } catch (error: any) {
    console.log('Projects', error.message)
    return []
  }
}
