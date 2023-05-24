export function Skill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs  text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {name}
    </span>
  )
}