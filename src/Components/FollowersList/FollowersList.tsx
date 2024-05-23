import { Link } from 'react-router-dom'
import './FollowersList.css'
import { SkeletonLoader } from './SkeletonLoader';

interface FollowersListProps {
  followers: [FollowerProps];
  loading: boolean;
}
interface FollowerProps {
  name:{
    first: string;
    last: string;
  };
  login:{
    username: string;
  };
  picture:{
    large: string;
  };
}

export const FollowersList: React.FC<FollowersListProps> = ({ 
  followers,
  loading 
}) => {
  return (
    <div className="followerslist-container" data-testid='followers-list' >
      <div data-testid='follower-list'>
        {
          loading ? (
            Array.from({ length: 5 }).map((_, index) => <SkeletonLoader key={index} />)
          ) : (

            followers.map((follower: FollowerProps, index: number) => (
              <div key={index} className="follower-item" data-testid={`follower-item-${index}`}>
                <img src={follower.picture.large}/>
                <div className="followers-details">
                  <div className="follower-item-name">
                    <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                  </div>
                  <p>{follower.login.username}</p>
                </div>
              </div>
            ))
          )
        }
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  )
}
