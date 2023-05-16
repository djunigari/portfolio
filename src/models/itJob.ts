import { Job } from './job'

export interface ItJob extends Job {
  projects: string[]
  languageAndTools: string[]
}
