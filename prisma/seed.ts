import { Academy, PrismaClient, Tecnology } from '@prisma/client'
import academiesJson from '../src/json/academies.json'
import coursesJson from '../src/json/courses.json'
import educationsJson from '../src/json/educations.json'
import employersJson from '../src/json/employers.json'
import projectsJson from '../src/json/projects.json'
import tecnologiesJson from '../src/json/tecnologies.json'

const prisma = new PrismaClient()

// npx prisma db seed
async function main() {
  await deleteAll()
  await createTecnologies()
  await createEmployers()
  await createProjects()
  await createEducations()
  await createAcademies()
  await createCourses()
}

const tecnologies = new Map<string, Tecnology>()
const academies = new Map<string, Academy>()

const deleteAll = async () => {
  await prisma.tecnologiesOnEmployer.deleteMany()
  await prisma.tecnologiesOnProjects.deleteMany()
  await prisma.tecnology.deleteMany()
  await prisma.employer.deleteMany()
  await prisma.project.deleteMany()
  await prisma.project.deleteMany()
  await prisma.education.deleteMany()
  await prisma.course.deleteMany()
  await prisma.academy.deleteMany()
}

const createTecnologies = async () => {
  for (let i = 0; i < tecnologiesJson.list.length; i++) {
    const t = tecnologiesJson.list[i]
    const res = await prisma.tecnology.create({
      data: { name: t.name, iconUrl: t.iconUrl },
    })
    tecnologies.set(t.name, res)
  }
}

const createEmployers = async () => {
  for (let i = 0; i < employersJson.list.length; i++) {
    const e = employersJson.list[i]
    const employer = await prisma.employer.create({
      data: {
        language: 'en',
        name: e.name,
        position: e.position,
        description: e.description,
        site: e.site,
        logoImageUrl: e.logoImageUrl,
        startAt: new Date(e.startAt),
        endAt: new Date(e.endAt),
      },
    })

    for (let y = 0; y < e.tecnologies.length; y++) {
      const t = e.tecnologies[y]
      const tecnology = tecnologies.get(t)
      if (tecnology) {
        await prisma.tecnologiesOnEmployer.create({
          data: {
            employerId: employer.id,
            tecnologyId: tecnology.id,
          },
        })
      }
    }
  }
}

const createProjects = async () => {
  for (let i = 0; i < projectsJson.list.length; i++) {
    const p = projectsJson.list[i]
    const project = await prisma.project.create({
      data: {
        language: p.language,
        name: p.name,
        description: p.description,
        url: p.url,
        gitHubUrl: p.gitHubUrl,
      },
    })

    for (let y = 0; y < p.tecnologies.length; y++) {
      const t = p.tecnologies[y]
      const tecnology = tecnologies.get(t)
      if (tecnology) {
        await prisma.tecnologiesOnProjects.create({
          data: {
            projectId: project.id,
            tecnologyId: tecnology.id,
          },
        })
      }
    }
  }
}

const createEducations = async () => {
  educationsJson.list.forEach(async (e) => {
    await prisma.education.create({
      data: {
        name: e.name,
        site: e.site,
        degree: e.degree,
        field: e.field,
        startAt: new Date(e.startAt),
        endAt: new Date(e.endAt),
      },
    })
  })
}

const createAcademies = async () => {
  for (let i = 0; i < academiesJson.list.length; i++) {
    const a = academiesJson.list[i]
    const res = await prisma.academy.create({
      data: { name: a.name, site: a.site },
    })
    academies.set(a.name, res)
  }
}

const createCourses = async () => {
  coursesJson.list.forEach((item) => {
    item.courses.forEach(async (c) => {
      await prisma.course.create({
        data: {
          name: c.name,
          startAt: new Date(c.startAt),
          completedAt: new Date(c.completedAt),
          academyId: academies.get(item.academy)?.id || '',
        },
      })
    })
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
