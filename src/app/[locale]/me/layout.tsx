import { LayoutTitle } from '@/components/LayoutTitle'
import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Alexandre D. Igari',
    template: '%s | Alexandre D. Igari',
  },
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <LayoutTitle title="jobs" />
      {children}
    </div>
  )
}
