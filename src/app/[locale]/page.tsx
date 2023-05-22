import { Educations } from '@/components/Educations/Educations'
import { Jobs } from '@/components/Jobs/Jobs'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      <div id="jobs" className="w-full">
        <Jobs />
      </div>
      <div id="educations" className="w-full">
        <Suspense fallback={<p>Loading...</p>}>
          {/* @ts-expect-error Async Server Component */}
          <Educations />
        </Suspense>
      </div>
    </div>
  )
}
