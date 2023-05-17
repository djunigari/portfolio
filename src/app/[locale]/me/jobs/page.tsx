import { prisma } from '@/utils/prisma'

export default async function JobsPage() {
  const employers = await prisma.employer.findMany({
    include: { tecnologies: true },
  })

  return (
    <div className="flex flex-col">
      {employers.map((e, i) => (
        <div key={i} className="flex flex-col">
          <span>{e.name}</span>
        </div>
      ))}
    </div>
  )
}
