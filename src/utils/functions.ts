// the function take to arguments a list of followers and a search string
// it filters the followers based on the search string
export const filteredFollowers = (followers: any, search: string) => {
  return followers?.filter((follower: any) => {
    return follower.name.first.toLowerCase().includes(search.toLowerCase())
  })
}

