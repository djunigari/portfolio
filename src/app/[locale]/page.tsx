import { Jobs } from '@/components/Jobs/Jobs'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div id="jobs">
        <Jobs />
      </div>
    </div>
  )
}
