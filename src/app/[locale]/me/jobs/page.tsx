import { prisma } from '@/utils/prisma'

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    include: { employer: true, projects: true },
  })
  return (
    <div className="flex flex-col">
      {jobs.map((j, i) => (
        <div key={i} className="flex flex-col">
          <span>{j.employer.name}</span>
        </div>
      ))}
    </div>
  )
}
