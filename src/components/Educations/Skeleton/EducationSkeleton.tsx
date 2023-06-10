export default function EducationSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex justify-between">
        <span className="h-2 w-2/3 bg-slate-700 rounded col-span-1"></span>
        <div className="col-start-2 col-span-1 flex gap-2">
          <span className="h-2 w-8 bg-slate-700 rounded "></span>
          <span className="h-2 w-8 bg-slate-700 rounded "></span>
        </div>
      </div>
      <span className="h-2 w-2/3 bg-slate-700 rounded ml-2"></span>
    </div>
  )
}
