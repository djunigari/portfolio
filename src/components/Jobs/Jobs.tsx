import { Job } from '@/models/job'
import Image from 'next/image'

const list: Job[] = [
  {
    company: 'Universo Online (UOL)',
    site: 'uol.com.br',
    carrier: 'Java Developer',
    startAt: 'January/2015',
    endAt: 'August/2016',
    imageUrl: 'https://djunigari.files.wordpress.com/2017/04/uol-logo.jpeg',
  },
]

export function Jobs() {
  return (
    <div id="jobs" className="flex flex-col">
      <h1>Jobs</h1>
      {list.map((j, i) => (
        <div
          key={i}
          className="flex flex-col only:gap-1 w-fit p-2 rounded-md cursor-pointer bg-gray-700"
        >
          {j.imageUrl && (
            <Image
              src={j.imageUrl}
              alt={`${j.company} logo image`}
              loading="lazy"
              width={200}
              height={100}
              className="rounded-md mb-2"
            />
          )}

          <span className="font-bold">{j.company}</span>
          <span className="text-xs self-end">
            {j.startAt}-{j.endAt}
          </span>
        </div>
      ))}
    </div>
  )
}
