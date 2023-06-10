import { ProjectSkeleton } from './ProjectSkeleton'

export default function ListSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <ProjectSkeleton />
      <ProjectSkeleton />
    </div>
  )
}
