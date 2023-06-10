export default function CoursesSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-2 w-full rounded-md bg-mutedBg text-onMutedBg p-2 shadow-black shadow-md">
      <div className="flex justify-between items-center">
        <span className="h-2 w-2/3 bg-slate-700 rounded ml-2"></span>
        <div className="rounded-full bg-slate-700 h-2 w-2"></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="h-2 w-2/3 bg-slate-700 rounded ml-2"></span>
        <div className="rounded-full bg-slate-700 h-2 w-2"></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="h-2 w-2/3 bg-slate-700 rounded ml-2"></span>
        <div className="rounded-full bg-slate-700 h-2 w-2"></div>
      </div>
    </div>
  )
}
