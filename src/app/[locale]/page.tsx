import { About } from '@/components/About/About'
import { Academies } from '@/components/Courses/Academies'
import { Educations } from '@/components/Educations/Educations'
import { Jobs } from '@/components/Jobs/Jobs'
import { Projects } from '@/components/Projects/Projects'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div
      className={`
      flex flex-col items-center 
      mx-8
      2xl:max-w-4xl 2xl:mx-auto`}
    >
      <div id="about" className="w-full">
        <About />
      </div>
      <div id="projects" className="w-full">
        <Projects />
      </div>
      <div id="jobs" className="w-full">
        <Jobs />
      </div>
      <div id="educations" className="w-full">
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <Educations />
        </Suspense>
      </div>
      <div id="courses" className="w-full">
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <Academies />
        </Suspense>
      </div>
    </div>
  )
}
