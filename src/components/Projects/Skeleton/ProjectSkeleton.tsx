export function ProjectSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-4 rounded-md p-2 shadow-black shadow-md">
      <div className="flex justify-between items-center">
        <span className="h-2 w-36 bg-slate-700 rounded"></span>
        <div className="flex gap-2">
          <div className="rounded-full bg-slate-700 h-6 w-6"></div>
          <div className="rounded-full bg-slate-700 h-6 w-6"></div>
        </div>
      </div>

      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>

      <div className="flex gap-2 justify-end">
        <span className="h-2 w-8 bg-slate-700 rounded"></span>
        <span className="h-2 w-8 bg-slate-700 rounded"></span>
        <span className="h-2 w-8 bg-slate-700 rounded"></span>
      </div>
    </div>
  )
}
