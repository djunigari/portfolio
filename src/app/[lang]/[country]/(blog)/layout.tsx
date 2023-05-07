import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  params: {
    lang: string
    country: string
  }
}

export default function BlogLayout({ children, params }: AuthLayoutProps) {
  return (
    <div>
      <h1>Blog</h1>
      {children}
    </div>
  )
}
