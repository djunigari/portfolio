import { prisma } from '@/utils/prisma'
import { LayoutTitle } from '../LayoutTitle'
import { Skills } from '../Skills/Skills'

export async function Projects() {
  const projects = await prisma.project.findMany({
    include: { tecnologies: { include: { tecnology: true } } },
  })

  return (
    <div className="w-full">
      <LayoutTitle title="projects" />
      <div className="flex flex-col gap-2 divide-y w-full rounded-md bg-mutedBg text-onMutedBg p-2">
        {projects.map((p, i) => (
          <div key={i} className="flex flex-col p-2">
            <span className="text-md font-bold">{p.name}</span>
            <Skills list={p.tecnologies.map((t) => t.tecnology.name)} />
          </div>
        ))}
      </div>
    </div>
  )
}
