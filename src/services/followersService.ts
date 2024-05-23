import axios from "axios"

export const getFollowers = async () => {
  return await axios.get("https://randomuser.me/api/?results=10")
}