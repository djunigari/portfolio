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
    <>
      {academies.map((a, i) => (
        <Disclosure as="div" key={i}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between hover:text-gray-500">
                <span className="">{a.name}</span>
                <span className="flex items-center">{open ? '-' : '+'}</span>
              </Disclosure.Button>

              <Disclosure.Panel>
                <div className="">
                  {a.courses.map((c, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-xs">{c.name}</span>
                      <span className="text-xs">
                        {moment(c.completedAt).year()}
                      </span>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  )
}
