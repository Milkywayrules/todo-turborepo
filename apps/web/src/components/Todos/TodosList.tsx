import { Fragment, ReactNode } from 'react'
import { Todo } from './TodosItem'

interface Props {
  todos: Todo[]
  children: (todo: Todo) => ReactNode
}

export default function TodosList({ children, todos }: Props) {
  return (
    <ul className="w-full flex flex-col gap-1 justify-between items-center max-h-96 overflow-auto px-2">
      {todos.map(todo => (
        <Fragment key={todo.id}>{children(todo)}</Fragment>
      ))}
    </ul>
  )
}
