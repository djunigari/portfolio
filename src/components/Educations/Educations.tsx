import { prisma } from '@/utils/prisma'
import moment from 'moment'
import { LayoutTitle } from '../LayoutTitle'

export async function Educations() {
  const educations = await prisma.education.findMany({
    orderBy: { startAt: 'desc' },
  })

  return (
    <div className="w-full">
      <LayoutTitle title="educations" />
      <div className="flex flex-col gap-2 divide-y w-full rounded-md bg-mutedBg text-onMutedBg p-2">
        {educations.map((e, i) => (
          <div key={i} className="flex flex-col p-2">
            <div className="flex justify-between">
              <span className="font-semibold">{e.name}</span>
              <span className="text-sm">{`${moment(e.startAt).year()}-${
                e.endAt ? moment(e.endAt).year() : ''
              }`}</span>
            </div>
            <span className="text-xs ml-2">{`${e.degree} - ${e.field}`}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
