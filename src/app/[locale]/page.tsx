import { About } from '@/components/About/About'
import { Courses } from '@/components/Courses/Courses'
import { Educations } from '@/components/Educations/Educations'
import { Jobs } from '@/components/Jobs/Jobs'
import { LayoutTitle } from '@/components/LayoutTitle'
import { Projects } from '@/components/Projects/Projects'

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
      <div className="divider"></div>
      <section id="projects" className="w-full">
        <LayoutTitle title="projects" />
        <Projects />
      </section>
      <div className="divider"></div>
      <section id="jobs" className="w-full">
        <LayoutTitle title="jobs" />
        <Jobs />
      </section>
      <div className="divider"></div>
      <section id="educations" className="w-full">
        <LayoutTitle title="educations" />
        <Educations />
      </section>
      <div className="divider"></div>
      <section id="courses" className="w-full">
        <LayoutTitle title="courses" />
        <Courses />
      </section>
    </div>
  )
}
