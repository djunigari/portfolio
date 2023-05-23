import { Skill } from './Skill'

export function Skills({ list }: { list: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((item) => (
        <Skill key={item} name={item} />
      ))}
    </div>
  )
}
