import { Title } from '../Title/Title'
import { FollowersList } from '../FollowersList/FollowersList'
import { SearchInput } from '../SearchInput/SearchInput'
import { useFollowers } from '../../custom-hooks/useFollowers';
import {  filteredFollowers } from '../../utils/functions';
import './Followers.css'
import { useState } from 'react';


export const Followers = () => {
  const [search, setSearch] = useState<string>("");
  const { followers, loading } = useFollowers();

  const searchFollowers = filteredFollowers(followers, search);

  // const filteredFollowersResource = {
  //   read() {
  //     const followers = followersResource.read();
  //     return followers.results;
  //   }
  // };

  return (
    <div className="followers" data-testid='followers'>
      <Title title="Followers" />
      <SearchInput 
        search={search}
        setSearch={setSearch}
      />
      <FollowersList 
        followers={searchFollowers}
        loading={loading}
      />
    </div>
  )
}
