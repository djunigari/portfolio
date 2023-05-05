export async function Repo() {
  // const [resp1, resp2] = await Promise.all([fetch(''), fetch('')])
  const response = await fetch('https://api.github.com/users/djunigari/repos', {
    cache: 'no-store',
  })

  const repos = await response.json()

  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
