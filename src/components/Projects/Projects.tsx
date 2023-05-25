import { prisma } from '@/utils/prisma'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'
import { Skills } from '../Skills/Skills'

export async function Projects() {
  const projects = await prisma.project.findMany({
    include: { tecnologies: { include: { tecnology: true } } },
  })

  return (
    <div className="flex flex-col gap-2 w-full ">
      {projects.map((p, i) => (
        <div
          key={i}
          className="flex flex-col rounded-md p-2 shadow-black shadow-md"
        >
          <div className="flex items-center gap-2">
            <span className="text-md font-bold mr-auto">{p.name}</span>
            <Link target="_blank" href={p.url as string}>
              <TbWorldWww className="h-6 w-6" />
            </Link>
            <Link target="_blank" href={p.gitHubUrl as string}>
              <BsGithub className="h-6 w-6" />
            </Link>
          </div>
          <p>{p.description}</p>
          <Skills
            className="self-end"
            list={p.tecnologies.map((t) => t.tecnology.name)}
          />
        </div>
      ))}
    </div>
  )
}
