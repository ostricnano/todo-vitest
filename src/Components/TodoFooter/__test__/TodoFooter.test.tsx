import { screen, render } from '@testing-library/react'
import { TodoFooter } from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter: React.FC<any> = ({
  numberOfIncompleteTasks
}) => {
  return(
    <BrowserRouter>
      <TodoFooter
        numberOfIncompleteTasks={numberOfIncompleteTasks}
      />
    </BrowserRouter>
  )
}

it('should render the correct amount of incomplete tasks', async () => {
  render(
    <MockTodoFooter
      numberOfIncompleteTasks={5}
    />
  )
  const paragrapElement = screen.getByText(/5 tasks left/i)
  expect(paragrapElement).toBeDefined()
})

it('should render "task" when the number of incomplete tasks is one', async () => {
  render(
    <MockTodoFooter
      numberOfIncompleteTasks={1}
    />
  )
  const paragrapElement = screen.getByText(/1 task left/i)
  expect(paragrapElement.textContent).toBe("1 task left")
})