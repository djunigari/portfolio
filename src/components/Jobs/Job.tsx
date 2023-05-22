import moment from 'moment'
import { TecnologyLogo } from '../Theme/TecnologyLogo'
import { EmployerWithTecnologies } from './JobList'

export function Job({ employer }: { employer: EmployerWithTecnologies }) {
  const startDate = moment(employer.startAt)
  const timeEnd = moment(employer.endAt)

  const getDurantion = () => {
    const diff = timeEnd.diff(startDate)
    const diffDuration = moment.duration(diff)

    let years = diffDuration.years()
    let months = diffDuration.months()
    const days = diffDuration.days()

    if (days > 0) months++
    if (months >= 12) {
      years++
      months = 0
    }

    let result = ''

    if (years > 0) {
      if (years > 1) {
        result = result.concat(`${years} yrs `)
      } else {
        result = result.concat(`${years} yr `)
      }
    }
    if (months > 0) result = result.concat(`${months} mos`)

    return result
  }

  return (
    <div className="flex flex-col gap-2 rounded-md bg-mutedBg text-onMutedBg shadow-md p-2">
      <div className="flex justify-between text-sm">
        <span>{employer.position} </span>
        <span className="text-xs">{getDurantion()}</span>
      </div>
      <span className="text-lg font-bold">{employer.name}</span>
      {/* {e.logoImageUrl && (
    <div className="flex rounded-md bg-white items-center justify-center p-2 ">
      <Image
        src={e.logoImageUrl}
        width={200}
        height={200}
        loading="lazy"
        alt="Employer logo"
      />
    </div>
  )} */}

      <div className="mt-auto flex flex-row gap-1 self-end">
        {employer.tecnologies.map(({ tecnology: { iconUrl } }, i) => (
          <TecnologyLogo key={i} url={iconUrl} />
        ))}
      </div>

      <span className="text-xs self-end">
        {`${startDate.format('MMM YYYY')} - ${timeEnd.format('MMM YYYY')}`}
      </span>
      <button className="rounded-md bg-accentBg text-onAccentBg">
        more detail
      </button>
    </div>
  )
}
