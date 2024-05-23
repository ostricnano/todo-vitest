import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FollowersList } from '../FollowersList';

const followers = [
  {
    name: {
      first: "John",
      last: "Doe"
    },
    login: {
      username: "johndoe"
    },
    picture: {
      large: "https://randomuser.me/api/port"
    }
  },
  {
    name: {
      first: "Jane",
      last: "Doe"
    },
    login: {
      username: "janedoe"
    },
    picture: {
      large: "https://randomuser.me/api/port"
    }
  }
]

const MockFollowersList: React.FC<any> = ({ followers }) => {
  return (
    <BrowserRouter>
      <FollowersList followers={followers} loading={false} />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {
  it('should render the correct amount of followers', async () => {
    render(
      <MockFollowersList followers={followers} />
    )
    const followerItem = screen.getByTestId('follower-list')
    expect(followerItem.children.length).toBe(2)
  })
})

