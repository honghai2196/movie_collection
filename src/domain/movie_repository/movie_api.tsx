import axios from "axios"

const API_KEY = "k_onsmkbc2"
const MOVIE_BASE_URL = "https://imdb-api.com/en/API/Top250Movies/" + API_KEY

export const getAllMovies = async () => {
    try {
        const response = await axios.get(MOVIE_BASE_URL, {
            headers: {
                Accept: "application/json"
            }
        })

        return response.data.items

    } catch (error) {
        console.log(error)
    }
}
 