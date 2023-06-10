import { JobSkeleton } from './JobSkeleton'

export function ListSkeleton() {
  return (
    <div className="animate-pulse flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
      </div>
    </div>
  )
}
