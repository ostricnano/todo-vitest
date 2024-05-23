import { vi } from 'vitest';


// Mock de la función getFollowers
vi.mock('./api', () => ({
  getFollowers: vi.fn()
}));

describe('useFollowers', () => {
  it('fetches followers and updates state', async () => {

  });

  it('handles error and sets loading to false', async () => {

  });
});
