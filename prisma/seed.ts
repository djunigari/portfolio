import { PrismaClient, Tecnology } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await createTecnologies()
  await createEmployer()
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

const tecnologies = new Map<String, Tecnology>()

const createTecnologies = async () => {
  const t = await prisma.tecnology.create({
    data: {
      name: '',
      imageUrl: '',
    },
  })
  tecnologies.set(t.name, t)
}

const createEmployer = async () => {
  const e = await prisma.employer.create({
    data: {
      id: '',
      language: '',
      name: '',
      position: '',
      description: '',
      site: '',
      logoImageUrl: '',
      startAt: new Date('2022-01-01'),
      endAt: new Date('2022-01-01'),
    },
  })

  const t = tecnologies.get('')

  if (!t) console.log('error')
  else await addTecnologiesToEmployer(e.id, t.id)
}

const addTecnologiesToEmployer = async (
  employerId: string,
  tecnologyId: string,
) => {
  await prisma.tecnologiesOnEmployer.create({
    data: {
      employerId,
      tecnologyId,
    },
  })
}
