'use client'

import { Disclosure } from '@headlessui/react'
import { Academy, Course } from '@prisma/client'
import moment from 'moment'

interface AcademyWithCourse extends Academy {
  courses: Course[]
}
interface CoursesProps {
  academies: AcademyWithCourse[]
}

export function Courses({ academies }: CoursesProps) {
  return (
    <div className="flex flex-col gap-2 rounded-md divide-y bg-mutedBg text-onMutedBg p-2">
      {academies.map((a, i) => (
        <Disclosure as="div" className="p-2" key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between hover:text-gray-500">
                <span className="">{a.name}</span>
                <span className="flex items-center">{open ? '-' : '+'}</span>
              </Disclosure.Button>

              <Disclosure.Panel>
                {a.courses.map((c, i) => (
                  <div key={i} className="flex justify-between ml-2">
                    <span className="text-xs truncate">{c.name}</span>
                    <span className="text-xs">
                      {moment(c.completedAt).year()}
                    </span>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
