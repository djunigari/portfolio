import { User } from '@/components/User'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando repos</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </div>
  )
}
