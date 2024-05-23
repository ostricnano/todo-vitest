import axios from 'axios';
import { vi } from 'vitest';
import { getFollowers } from '../followersService';

// Mock de axios
vi.mock('axios');

describe('getFollowers', () => {
  it('should fetch followers from the API', async () => {
    // Define la respuesta simulada que quieres que axios devuelva
    const mockResponse = {
      data: {
        results: [
          { name: { first: 'John', last: 'Doe' } },
          { name: { first: 'Jane', last: 'Smith' } },
          { name: { first: 'Jack', last: 'Black' } }
        ]
      }
    };

    // Mockea la función `get` de axios para que devuelva la respuesta simulada
    vi.spyOn(axios, 'get').mockResolvedValue(mockResponse);

    // Llama a la función que deseas probar
    const result = await getFollowers();
    console.log(result.data.results[0])

    // Verifica que la función haya devuelto los datos esperados
    expect(result.data.results).toEqual(mockResponse.data.results);

    // Verifica que axios.get haya sido llamado con la URL correcta
    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/?results=10');
  });
});
