import { ReactNode } from 'react'
import Input from './Input'
import TodosItem from './TodosItem'
import TodosList from './TodosList'

interface Props {
  title: string
  children: ReactNode
}

export default function Todos({ children, title }: Props) {
  return (
    <div className="flex items-center justify-between gap-2 flex-col">
      <h2 className="font-semibold">{title}</h2>

      {children}
    </div>
  )
}

Todos.Input = Input
Todos.List = TodosList
Todos.Item = TodosItem
