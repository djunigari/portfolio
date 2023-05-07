import { ReactNode } from 'react'
import './globals.css'
import { TopMenu } from '@/components/Menu/TopMenu'

export const metadata = {
  title: 'Alexandre Djun Igari',
  description: 'WebSite as curriculum online created by Alexandre Djun Igari',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <TopMenu />
        <h1>Teste</h1>
        {children}
      </body>
    </html>
  )
}
