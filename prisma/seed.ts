import { PrismaClient, Tecnology } from '@prisma/client'
import educationsJson from '../src/json/educations.json'
import employersJson from '../src/json/employers.json'
import tecnologiesJson from '../src/json/tecnologies.json'

const prisma = new PrismaClient()

// npx prisma db seed
async function main() {
  await createTecnologies()
  await createEmployers()
  await createEducations()
}

const tecnologies = new Map<String, Tecnology>()

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

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
