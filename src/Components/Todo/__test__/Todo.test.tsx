import { BrowserRouter } from 'react-router-dom';
import { Todo } from '../Todo';
import { render, screen, fireEvent } from '@testing-library/react';


//tenemos que hacer un mockFunction y envolver el componente Todo en un BrowserRouter
//esto se debe a que el componente esta renderizando el componente TodoList que a la vez esta renderizando el componente TodoFooter que tiene un <Link> de react-router-dom

//realizamos un test de integracion en el que el componente padre interactua con los componentes hijos.

const MockTodo = () => {
  return(
    <BrowserRouter>
      <Todo/>
    </BrowserRouter>
  )
}
beforeEach(() => {
  render(<MockTodo />);
});

//creamos una funcion que recibe un array de tareas y las agrega al input
const addTask = (tasks: string[]) => {
  //obtenemos el input por el cual se agregan las tareas
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

  //obtenemos el boton por el cual se agrega la tarea
  const buttonElement = screen.getByRole('button', {name: /add/i});
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
}

describe('Todo', () => {
  it('should render the input text', async  () => {

    //obtenemos el elemento por el texto que contiene
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', {name: /add/i});

    //simulamos un cambio en el input y un click en el boton
    fireEvent.change(inputElement, {target: {value: 'Go Grocery Shopping'}});
    fireEvent.click(buttonElement);

    //obtenemos el elemento por el texto que contiene
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    //verificamos que el elemento sea definido
    expect(divElement.textContent).toBe('Go Grocery Shopping');

  });
  
  it('should render a list of tasks', async  () => {
    //ejecutamos la funcion addTask
    addTask(['Go Grocery Shopping', 'Go to the gym', 'Do the laundry']);

    //obtenemos los elementos por el testId
    const divElement = screen.getAllByTestId('task-item');

    //verificamos que el array de elementos sea igual a 3
    expect(divElement.length).toBe(3);
  });

  it('task should not have the complete class when initially rendered', async  () => {
    //ejecutamos la funcion addTask
    addTask(['Go Grocery Shopping']);

    //obtenemos el elemento por el texto que contiene
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    //verificamos que el elemento no tenga la clase todo-item-active
    expect(divElement.className).not.toBe('todo-item todo-item-active');
  });

  it('task should have the complete class when clicked', async  () => {

    //ejecutamos la funcion addTask
    addTask(['Go Grocery Shopping']);

    //obtenemos el elemento por el texto que contiene
    const divElement = screen.getByText(/Go Grocery Shopping/i);

    //simulamos un click en el elemento el cual deberia cambiar de clase
    fireEvent.click(divElement);

    //verificamos que el elemento tenga la clase todo-item-active
    expect(divElement.className).toBe('todo-item todo-item-active');
  });
});