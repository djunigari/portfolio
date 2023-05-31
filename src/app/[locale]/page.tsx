import { About } from '@/components/About/About'
import { Academies } from '@/components/Courses/Academies'
import { Educations } from '@/components/Educations/Educations'
import { Jobs } from '@/components/Jobs/Jobs'
import { LayoutTitle } from '@/components/LayoutTitle'
import { Projects } from '@/components/Projects/Projects'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div
      className={`
        flex flex-col items-center gap-8
      `}
    >
      <div id="about" className="w-full">
        <About />
      </div>
      <section id="projects" className="w-full">
        <LayoutTitle title="projects" />
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <Projects />
        </Suspense>
      </section>
      <section id="jobs" className="w-full">
        <LayoutTitle title="jobs" />
        <Jobs />
      </section>
      <section id="educations" className="w-full">
        <LayoutTitle title="educations" />
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <Educations />
        </Suspense>
      </section>
      <section id="courses" className="w-full">
        <LayoutTitle title="courses" />
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <Academies />
        </Suspense>
      </section>
    </div>
  )
}
