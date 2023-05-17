import { PrismaClient, Tecnology } from '@prisma/client'

const prisma = new PrismaClient()

// npx prisma db seed
async function main() {
  await createTecnologies()
  await createEmployer()
}

const tecnologies = new Map<String, Tecnology>()

const createTecnologies = async () => {
  Promise.all([
    createTecnology('Java', 'DiJava'),
    createTecnology('C#', 'TbBrandCSharp'),
    createTecnology('Git', 'BsGithub'),
    createTecnology('Spring', 'SiSpring'),
    createTecnology('Javascript', 'SiJavascript'),
    createTecnology('Typescript', 'SiTypescript'),
  ])
    .then((_) => console.log('ok'))
    .catch((e) => console.log(e))
}

const createTecnology = async (name: string, iconName: string) => {
  const t = await prisma.tecnology.create({
    data: { name, iconName },
  })
  tecnologies.set(t.name, t)
}

const createEmployer = async () => {
  const e = await prisma.employer.create({
    data: {
      language: 'en',
      name: 'UOL - Universo Online',
      position: 'Java Backend Developer',
      description:
        'Worked as a Backend Developer at UOL, a company in Brazil, I was involved in projects for UOL’s Billing using Java. I used to develop web services to integrate Billing System with internal and external applications. One of my main responsibilities it was to find and fix bugs that they were reported by customers and Notifications from Splunk. I usually created and refactored tests.',
      site: 'https://www.uol.com.br',
      logoImageUrl: '',
      startAt: new Date('2015-01-01'),
      endAt: new Date('2016-07-01'),
    },
  })

  const t = tecnologies.get('Java')

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

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
