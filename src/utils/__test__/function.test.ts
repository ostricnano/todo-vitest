import { filteredFollowers } from "../functions";

describe("filteredFollowers", () => {
  // Prueba 1: Verificar que la función filtre correctamente los seguidores
    it('should filter followers based on the search string', () => {
      // Define los datos de prueba
      const followers = [
        { name: { first: 'John', last: 'Doe' } },
        { name: { first: 'Jane', last: 'Smith' } },
        { name: { first: 'Jack', last: 'Black' } }
      ];
      const searchString = 'Jane'; // La cadena de búsqueda debería coincidir con el segundo seguidor
  
      // Llama a la función que deseas probar
      const filtered = filteredFollowers(followers, searchString);
  
      // Verifica el resultado esperado
      expect(filtered).toEqual([{ name: { first: 'Jane', last: 'Smith' } }]);
    });
  // Prueba 2: Verificar que la función maneje correctamente los casos donde no se proporcionan seguidores
    it('should return an empty array if no followers are provided', () => {
      // Define los datos de prueba
      const followers: any[] = []; // No hay seguidores
      const searchString = 'Jane';

      // Llama a la función que deseas probar
      const filtered = filteredFollowers(followers, searchString);

      // Verifica el resultado esperado
      expect(filtered).toEqual([]);
    });
  // Prueba 3: Verificar que la función maneje correctamente los casos donde la cadena de búsqueda está vacía
    it('should return all followers if the search string is empty', () => {
      // Define los datos de prueba
      const followers = [
        { name: { first: 'John', last: 'Doe' } },
        { name: { first: 'Jane', last: 'Smith' } },
        { name: { first: 'Jack', last: 'Black' } }
      ];
      const searchString = ''; // No hay cadena de búsqueda

      // Llama a la función que deseas probar
      const filtered = filteredFollowers(followers, searchString);

      // Verifica el resultado esperado: Todos los seguidores deberían estar presentes
      expect(filtered).toEqual(followers);
    });
});