// import { cookies, headers } from 'next/headers'
export async function User() {
  // const userCookies = cookies()
  // const userHeaders = headers()
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //   cache: 'no-store',
  // })

  // const user = await response.json()

  return (
    <div>
      <h1>User</h1>
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
  )
}
