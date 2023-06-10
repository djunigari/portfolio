export function JobSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-mutedBg text-onMutedBg shadow-black shadow-md p-2">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>

      <div className="ml-auto flex gap-2">
        <div className="rounded-full bg-slate-700 h-4 w-4"></div>
        <div className="rounded-full bg-slate-700 h-4 w-4"></div>
        <div className="rounded-full bg-slate-700 h-4 w-4"></div>
      </div>

      <div className="ml-auto flex gap-2">
        <span className="h-2 w-8 bg-slate-700 rounded "></span>
        <span className="h-2 w-8 bg-slate-700 rounded "></span>
      </div>
    </div>
  )
}
