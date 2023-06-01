import { prisma } from '@/utils/prisma'
import { Education } from '@prisma/client'
import moment from 'moment'

export async function Educations() {
  let educations: Education[] = []
  try {
    educations = await prisma.education.findMany({
      orderBy: { startAt: 'desc' },
    })
  } catch (e: any) {
    console.error('Educations', e.message)
    educations = []
  }

  return (
    <div className="flex flex-col gap-2 divide-y w-full rounded-md bg-mutedBg text-onMutedBg p-2 shadow-black shadow-md">
      {educations.map((e, i) => (
        <div key={i} className="flex flex-col p-2">
          <div className="flex justify-between">
            <span className="font-semibold">{e.name}</span>
            <span className="text-sm">{`${moment(e.startAt).year()}-${
              e.endAt ? moment(e.endAt).year() : ''
            }`}</span>
          </div>
          <span className="text-xs ml-2">{`${e.degree} 
          ${e.field ? ` - ${e.field}` : ''}
          `}</span>
        </div>
      ))}
    </div>
  )
}
