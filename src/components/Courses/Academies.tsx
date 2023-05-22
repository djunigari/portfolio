import { prisma } from '@/utils/prisma'
import { LayoutTitle } from '../LayoutTitle'
import { Courses } from './Courses'

export async function Academies() {
  const academies = await prisma.academy.findMany({
    include: { courses: { orderBy: { completedAt: 'desc' } } },
  })

  return (
    <div>
      <LayoutTitle title="courses" />
      <div className="flex flex-col rounded-md divide-y bg-mutedBg text-onMutedBg p-2">
        {/* {academies.map((a, i) => (
          <div key={i} className="flex flex-col gap-2 p-2">
            <span className="font-semibold">{a.name}</span>
            <div className="flex flex-col ml-2">
              {a.courses.map((c, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-xs">{c.name}</span>
                  <span className="text-xs">
                    {moment(c.completedAt).year()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))} */}
        <Courses academies={academies} />
      </div>
    </div>
  )
}
