import { Jobs } from '@/components/Jobs/Jobs'

export default function JobsPage() {
  /* @ts-expect-error Async Server Component */
  return <Jobs />
}
