// async function fetchData() {
//   const todos = await prisma.todo.findMany()
//   return todos
// }

// const dataPromise = fetchData()

// import { cookies, headers } from 'next/headers'
export async function User() {
  // const userCookies = cookies()
  // const userHeaders = headers()
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // const todos = use(dataPromise)
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //   cache: 'no-store',
  // })

  // const user = await response.json()

  return (
    <div>
      <h1 className="font-bold">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
