import Link from 'next/link'

// export const revalidate = 30 // seconds

export default async function Dashboard() {
  const response = await fetch('https://api.github.com/users/djunigari', {
    next: { revalidate: 30 },
    // cache: 'force-cache' -- all users have same data
    // cache: 'no-store' -- it is ssr in next 13
  })
  const user = await response.json()

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/app/">Home</Link>
    </div>
  )
}
