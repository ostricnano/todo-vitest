import { useState } from 'react'
import { Title } from '../Title/Title'
import { AddInput } from '../AddInput/AddInput'
import { TodoList } from '../TodoList/TodoList'
import './Todo.css'

export const Todo = () => {
  const [todos, setTodos] = useState([])
  return (
    <div className="todo">
      <Title title="Todo" />
      <AddInput 
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

