import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Followers } from '../Followers'
import axios from 'axios'
import { useFollowers } from '../../../custom-hooks/useFollowers'



const MockFollowers: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Followers />
    </BrowserRouter>
  )
}

// Mockear la función getFollowers
vi.mock('../../../custom-hooks/useFollowers', () => ({
  useFollowers: vi.fn().mockReturnValue({
    followers: [
      {
        name: {
          first: "John",
          last: "Doe"
        },
        login: {
          username: "john_doe"
        },
        picture: {
          large: "https://randomuser"
        }
      }
    ],
    loading: true
  })
}))

describe('Followers', () => {

  it('should render the correct amount of followers', async () => {
    render(<MockFollowers />)
    const followerItem = screen.getByTestId('followers')
    expect(followerItem).toBeDefined()
  })

  it('should render de api result', async () => {
    vi.mock("../../../__mocks__/axios")
    const mockResponse = {
      data: {
        results: [
          {
            name: {
              first: "John",
              last: "Doe"
            },
            login: {
              username: "john_doe"
            },
            picture: {
              large: "https://randomuser.me/api/port",
            }
          }
        ]
      }
    }
    vi.spyOn(axios, 'get').mockResolvedValue(mockResponse)
  })
  it('should call use followers when the component is mounted', async () => {
    render(<MockFollowers />)
    // Esperar a que se resuelva la promesa de useFollowers
    expect(useFollowers).toHaveBeenCalled()
  })
  it('should pass the correct props to FollowersList', async () => {
    render(<MockFollowers />)
      const followersList = screen.getByTestId('followers-list')
        // Verificar que las props se hayan pasado correctamente
        expect(followersList).toBeDefined();
      
  })
})


