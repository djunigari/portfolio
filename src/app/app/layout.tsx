import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Aplicação',
    template: '%s | Alexandre Djun Igari',
  },
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <h1>App</h1>
      {children}
    </div>
  )
}
