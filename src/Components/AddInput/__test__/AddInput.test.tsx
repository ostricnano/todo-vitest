import { AddInput } from "../AddInput";
import { render, screen, fireEvent } from "@testing-library/react";

const mockSetTodos = vi.fn()

describe("AddInput component", () => {
  beforeEach(() => {
    render(
      <AddInput 
        todos={[]}
        setTodos={mockSetTodos}
      />
    );
  })
  it("should render input element", async () => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeDefined();
  })

  it("should be able to type into the input", async () => {
    // Encontrar el primer elemento de entrada por su atributo placeholder
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) as HTMLInputElement;
    // Escribir texto dentro del input
    fireEvent.change(inputElement, {target: { value:'Go Grocery Shopping'}});
    // Verificar que el texto se haya escrito correctamente
    expect(inputElement.value).toBe('Go Grocery Shopping');
  })

  it("should have empty input when add button is clicked", async () => {
    // Encontrar elemento de entrada por su atributo placeholder
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i) as HTMLInputElement;
    // Encontrar elemento de botón por su rol de button y atributo nombre
    const buttonElement = screen.getByRole('button', {name: /add/i});
    // Escribir texto dentro del input
    fireEvent.change(inputElement, {target: { value:'Go Grocery Shopping'}});
    // Hacer clic en el botón
    fireEvent.click(buttonElement);
    // Verificar que el input se haya vaciado
    expect(inputElement.value).toBe('');
  })
})