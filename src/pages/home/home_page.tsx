import React, { useState, useEffect } from "react"
import { getAllMovies } from "../../domain/movie_repository/movie_api"
import {
  MovieProps,
  Movie,
} from "../../domain/movie_repository/model/movie_model"
import { Box, Grid } from "@material-ui/core"
import MovieCard from "./components/movie_card"
import "./home_page.css"

function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      const moviesResponse: [MovieProps] = await getAllMovies()
      const listMovies = moviesResponse.map((item) => new Movie(item))

      setMovies(listMovies)
    }

    getMovies()
  }, [])

  return (
    <React.Fragment>
      <Box p={2}>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default React.memo(HomePage)
