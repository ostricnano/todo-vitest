import { TodoFooter } from "../TodoFooter/TodoFooter";
import './TodoList.css'

export const TodoList: React.FC<any> = ({
  todos,
  setTodos
}) => {
  const updateTask = (id: any) => {
    let updatedTasks = todos.map((todo: any) => {
        if(todo.id === id) {
            todo.completed = !todo.completed;
            return todo
        } else {
            return todo
        }
    });
    setTodos(updatedTasks)
  }

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todos.forEach((todo: any) => {
        if(!todo.completed) count++
    })
    return count
  }
  return (
    <div className="todolist-container">
      <div className="todos-container">
          <div>
              {
                  todos.map((todo: any, index: any) => (
                      <div 
                        key={index}
                        className={`todo-item ${todo.completed && "todo-item-active"}`} 
                        onClick={() => updateTask(todo.id)}
                        data-testid="task-item"
                      >
                        {todo.task}
                      </div>
                  ))
              }
          </div>
      </div>
      <div>
          <TodoFooter 
              numberOfIncompleteTasks={calcNumberOfIncompletedTasks()}
          />
      </div>
    </div>
  )
}
