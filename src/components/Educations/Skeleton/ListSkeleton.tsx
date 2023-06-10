import EducationSkeleton from './EducationSkeleton'

export default function ListSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-2 w-full rounded-md bg-mutedBg text-onMutedBg p-2 shadow-black shadow-md">
      <EducationSkeleton />
      <EducationSkeleton />
      <EducationSkeleton />
    </div>
  )
}
