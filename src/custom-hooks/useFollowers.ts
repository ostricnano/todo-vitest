import { useEffect, useState } from "react";
import { getFollowers } from "../services/followersService";

export const useFollowers = () => {
  const [followers, setFollowers] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchFollowers = async () => {
    setLoading(true);
    try {
      const response = await getFollowers()
      setFollowers(response.data.results)
    } catch (error) {
      console.error(error)  
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
   fetchFollowers()
  }, []);

  return { followers, loading };
}