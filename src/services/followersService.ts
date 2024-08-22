import axios from "axios"
import { createResource } from "../utils/createResource"

export const getFollowers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=10")
    return await response.data
  } catch (error) {
    console.log(error)
  }
}


export const followersResource = createResource(getFollowers());