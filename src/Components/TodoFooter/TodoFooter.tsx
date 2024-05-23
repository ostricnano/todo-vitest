import React from 'react'
import { Link } from 'react-router-dom'
import "./TodoFooter.css"

export const TodoFooter: React.FC<any> = ({
  numberOfIncompleteTasks
}) => {
  return (
    <div className="todo-footer">
      <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
      <Link to="/followers">Followers</Link>
    </div>
  )
}
