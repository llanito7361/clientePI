import { GET_PAGINATED_GAMES } from "."
import axios from 'axios'

const getPaginatedGames = (page, pageSize) => {
    return async function(dispatch) {
        try {
            const result = (await axios.get(`/videogames?page=${page}&pageSize=${pageSize}`,{ withCredentials: true })).data
        dispatch({
            type: GET_PAGINATED_GAMES,
            payload: result
        })
        } catch (error) {
          console.log(error)  
        }
    }
}
export default getPaginatedGames;