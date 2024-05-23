import { render, screen, fireEvent } from '@testing-library/react';
import {SearchInput} from '../SearchInput';

const mockSetSearch = vi.fn();

describe('SearchInput', () => {
  const search = "John Doe";
  beforeEach(() => {
    render(
        <SearchInput 
          search={search}
          setSearch={mockSetSearch}
        />
    );
  });

  it('renders SearchInput component', () => {
    const inputElement = screen.getByPlaceholderText(/Search for a follower.../i) as HTMLInputElement;
    expect(inputElement).toBeDefined();
  });

  it('Should be able to type in the SearchInput', () => {
    const inputElement = screen.getByPlaceholderText(/Search for a follower.../i) as HTMLInputElement;
    fireEvent.change(inputElement, {target: { value:'John Doe'}});
    expect(inputElement.value).toBe('John Doe');
  });

});