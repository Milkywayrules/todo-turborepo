import { Inter } from '@next/font/google'
import { Todos } from '~/components'

import { GetStaticPropsResult, InferGetStaticPropsType } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface TodoBE {
  id: number
  name: string | null
  description: string | null
  deadline: Date | null
  created_at: Date
  updated_at: Date
}

export async function getStaticProps(): Promise<GetStaticPropsResult<{ todos: TodoBE[] }>> {
  const res = await fetch('http://localhost:3333/api/todos')
  const todos = (await res.json()) as TodoBE[]

  return {
    props: {
      todos,
    },
    revalidate: 10,
  }
}

export default function Index({ todos }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(todos)

  return (
    <main
      style={inter.style}
      className="bg-blue-900 text-gray-50 text-base min-h-screen w-scsreen overflow-auto"
    >
      <div className="flex flex-col gap-12 w-full justify-between items-center py-12">
        <h1 className="text-3xl font-semibold">Todo App</h1>

        <div className="flex flex-col gap-8">
          <Todos.Input label="What is up?" />

          <Todos title="My To-dos">
            <Todos.List todos={todos}>
              {({ id, description }) => <Todos.Item id={id} description={description} />}
            </Todos.List>
          </Todos>
        </div>
      </div>
    </main>
  )
}
