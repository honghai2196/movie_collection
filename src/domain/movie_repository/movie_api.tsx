import axios from "axios"

const API_KEYS = ["k_onsmkbc2", "k_fb3s2ftl", "k_o4gfumxn", "k_wc75wv5q"]

const API_KEY = API_KEYS[1]
const MOVIE_BASE_URL = "https://imdb-api.com/en/API/Top250Movies/" + API_KEY

export const getAllMovies = async () => {
  try {
    const response = await axios.get(MOVIE_BASE_URL, {
      headers: {
        Accept: "application/json",
      },
    })

    return response.data.items
  } catch (error) {
    console.log(error)
  }
}

const MOVIE_INFO_BASE_URL = "https://imdb-api.com/en/API/Title/" + API_KEY + "/"

export const fetchMovieInfo = async (id: string) => {
  try {
    const response = await axios.get(MOVIE_INFO_BASE_URL + id, {
      headers: {
        Accept: "application/json",
      },
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
