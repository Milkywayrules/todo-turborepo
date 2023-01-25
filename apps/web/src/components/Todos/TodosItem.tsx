export interface Todo {
  id: number
  name: string | null
  description: string | null
  deadline: Date | null
  created_at: Date
  updated_at: Date
}

type Props = Pick<Todo, 'id' | 'description'>

const ButtonAction = ({ onClick, text }: { onClick: () => void; text: string }) => {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="hover:bg-gray-700 outline-none focus-visible:border-pink-400 border-2 border-transparent py-2 px-2"
    >
      {text}
    </button>
  )
}

export default function TodosItem({ id, description }: Props) {
  function handleEdit(id: number) {
    console.log('asdasd')
  }

  function handleDelete(id: number) {
    console.log('asdasd')
  }

  function handleToggle(id: number) {
    console.log('asdasd')
  }

  return (
    <li className="bg-gray-800 w-full flex justify-between items-center rounded overflow-hidden shrink-0">
      <div className="py-1 px-2 w-full">{description}</div>

      <div className="flex items-center justify-between h-full bg-gray-800">
        <ButtonAction onClick={() => handleEdit(id)} text="e" />
        <ButtonAction onClick={() => handleDelete(id)} text="d" />
        <ButtonAction onClick={() => handleToggle(id)} text="v" />
      </div>
    </li>
  )
}
