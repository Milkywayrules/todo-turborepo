import { FormEvent, useState } from 'react'

interface Props {
  label: string
}

export default function Input({ label }: Props) {
  const [todo, todoSet] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3333/api/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ description: todo }),
    })

    const json = await res.json()

    todoSet('')

    console.log(json)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="space-y-1">
        <h2 className="font-semibold">{label}</h2>

        <input
          type="text"
          id="new-todo"
          name="new-todo"
          placeholder="Do something..."
          value={todo}
          onChange={e => todoSet(e.target.value)}
          className="outline-none rounded focus:border-pink-400 text-gray-900 placeholder:text-gray-400 border-2 border-transparent py-1 px-2 caret-pink-700"
        />
      </label>
    </form>
  )
}
