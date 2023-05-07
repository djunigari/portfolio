import { ReactNode } from 'react'
import './globals.css'
import { TopMenu } from '@/components/Menu/TopMenu'
import { ThemeSwitch } from '@/components/Theme/ThemeSwitch'

export const metadata = {
  title: 'Alexandre Djun Igari',
  description: 'WebSite as curriculum online created by Alexandre Djun Igari',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex flex-col">
          <TopMenu />
          <h1>Teste</h1>
          <ThemeSwitch />
          {children}
        </div>
      </body>
    </html>
  )
}
