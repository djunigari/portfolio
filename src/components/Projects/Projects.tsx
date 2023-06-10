'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'
import { Skills } from '../Skills/Skills'
import { ProjectWithTecnologies, findProjects } from './Actions'

export function Projects() {
  const locale = useLocale()
  const [loading, setLoading] = useState<boolean>(true)
  const [projects, setProjects] = useState<ProjectWithTecnologies[]>([])

  useEffect(() => {
    findProjects(locale).then((list) => {
      setProjects(list)
      setLoading(false)
    })
  }, [locale])

  if (loading) return <p>Loading Projects....</p>

  return (
    <div className="flex flex-col gap-2 w-full ">
      {projects.map((p, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 rounded-md p-2 shadow-black shadow-md"
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
