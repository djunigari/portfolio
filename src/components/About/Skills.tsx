import { Skill } from './Skill'

const list: string[] = [
  'Next.js',
  'Nest.js',
  'GraphQL',
  'Chakra UI',
  'Tailwindcss',
  'Typescript',
]

export function Skills() {
  return (
    <div className="flex gap-2">
      {list.map((item) => (
        <Skill key={item} name={item} />
      ))}
    </div>
  )
}
