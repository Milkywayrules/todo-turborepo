import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      style={inter.style}
      className="bg-blue-900 text-gray-50 text-base min-h-screen w-scsreen overflow-auto"
    >
      <div className="flex flex-col gap-12 w-full justify-between items-center py-12">
        <h1 className="text-3xl font-semibold">Todo App</h1>

        <div className="flex flex-col gap-8">
          <label className="space-y-1">
            <h2 className="font-semibold">What is up?</h2>
            <input
              type="text"
              id="new-todo"
              name="new-todo"
              placeholder="Do something..."
              className="outline-none rounded focus:border-pink-400 text-gray-900 placeholder:text-gray-400 border-2 border-transparent py-1 px-2 caret-pink-700"
            />
          </label>

          <div className="flex bg-red-900/20  items-center justify-between gap-2 flex-col">
            <h2 className="font-semibold">My To-dos</h2>

            <ul className="bg-indigo-700 w-full flex flex-col gap-1 justify-between items-center">
              <Todo />
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

interface TodoProps {
  id: string
  text: string
}

function Todo({ id, text }: TodoProps) {
  const handleEdit = (id: string) => {
    
  }

  const handleDelete = (id: string) => {

  }

  const handleToggle = (id: string) => {

  }

  return (
    <li className="bg-gray-800 w-full flex justify-between items-center rounded">
      <div className="py-1 px-2 w-full">{text}</div>

      <div className="flex items-center justify-between h-full bg-gray-800">
        <button
          type="button"
          onClick={() => handleEdit(id)}
          className="hover:bg-gray-700 outline-none focus-visible:border-pink-400 border-2 border-transparent py-2 px-2"
        >
          e
        </button>
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className="hover:bg-gray-700 outline-none focus-visible:border-pink-400 border-2 border-transparent py-2 px-2"
        >
          d
        </button>
        <button
          type="button"
          onClick={() => handleToggle(id)}
          className="hover:bg-gray-700 outline-none focus-visible:border-pink-400 border-2 border-transparent py-2 px-2"
        >
          v
        </button>
      </div>
    </li>
  )
}
