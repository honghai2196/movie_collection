import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Movie } from "../../../domain/movie_repository/model/movie_model"

type Props = {
  movie?: Movie
  className?: string
}

const MovieHover: React.FC<Props> = ({ movie, className }) => {
  return (
    <Box className={className}>
      <Typography variant="h5">Overview:</Typography>
      <Typography>{movie?.title}</Typography>
      <Typography>{"Publish year: " + movie?.year}</Typography>
      <Typography>{"Casts: " + movie?.crew}</Typography>
      <Typography>{"Ranking: " + movie?.rank}</Typography>
      <Typography>{"IMDB Rating: " + movie?.imDbRating}</Typography>
      <Typography>{"IMDB Rating Count: " + movie?.imDbRatingCount}</Typography>
    </Box>
  )
}

export default MovieHover
