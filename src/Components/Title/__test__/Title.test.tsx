import { render, screen } from "@testing-library/react"
import { Title } from "../Title"

describe('Test for Title component', () => {

  //funcion para renderizar el componente antes de que se ejecute cada test
  beforeEach(() => {
    render(<Title title='hello'/>)
  })

  // Metodos de getBy
  it('Sholud render the componet', async () => {

    //encuentra el elemento mediante una query que tiene que contener hello
    const titleElement = screen.getByText(/hello/i)

    // Verificar que el texto del título coincida con el texto esperado
    expect(titleElement.textContent).toBe('hello');
  })

  // it('Sholud render the componet', async () => {

  //   //encuentra el elemento con el titulo especificado
  //   const titleElement = screen.getByRole('heading', {name: 'hello'})

  //   //verifica que el elemento este definido
  //   expect(titleElement).toBeDefined

  //   // Verificar que el texto del título coincida con el texto esperado
  //   expect(titleElement.textContent).toBe('hello');
  // })

  // it('Sholud render the componet', async () => {

  //   //encuentra el elemento con el titulo especificado
  //   const titleElement = screen.getByTitle('title')

  //   //verifica que el elemento este definido
  //   expect(titleElement).toBeDefined

  //   // Verificar que el texto del título coincida con el texto esperado
  //   expect(titleElement?.textContent).toBe('todo');
  // })
  // it('Sholud render the componet', async () => {

  //   //encuentra el elemento con el data-testid
  //   const titleElement = screen.getByTestId('header-test')

  //   //verifica que el elemento este definido
  //   expect(titleElement).toBeDefined

  //   // Verificar que el texto del título coincida con el texto esperado
  //   expect(titleElement?.textContent).toBe('hello');
  // })

  // // metodos FIND BY
  // // si necesitamos asyncronismo vamos a usar findBY en vez de getBy
  // it('Sholud render the componet', async () => {

  //   //encuentra el elemento mediante una query que tiene que contener hello
  //   // find by es async por lo cual hay que poner await
  //   const titleElement = await screen.findByText(/hello/i)

  //   //verifica que el elemento este definido
  //   expect(titleElement).toBeDefined

  //   // Verificar que el texto del título coincida con el texto esperado
  //   expect(titleElement?.textContent).toBe('hello');
  // })

  // //Query By
  // it('Sholud render the componet', async () => {

  //   //encuentra el elemento mediante una query que tiene que contener hello
  //   // find by es async por lo cual hay que poner await
  //   const titleElement = screen.queryByText(/hellosss/i)

  //   //verifica que el elemento este definido
  //   expect(titleElement).toBeDefined

  //   // Verificar que el texto del título coincida con el texto esperado
  //   expect(titleElement?.textContent).not.toBe('hello');
  // })

  // //GET ALL BY
  // it('Sholud render the componet', async () => {

  //   //encuentra el elemento mediante una query que tiene que contener hello
  //   // find by es async por lo cual hay que poner await
  //   const titleElements = screen.getAllByRole('heading')

  //   //verifica que el elemento este definido
  //   expect(titleElements).toBeDefined

  //   // Verificar que el texto del título coincida con el texto esperado
  //   expect(titleElements?.length).toBe(2);
  // })
  
})