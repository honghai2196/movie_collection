import { Box, Grid, Typography } from "@material-ui/core"
import { Movie } from "../../../domain/movie_repository/model/movie_model"
import Image from "material-ui-image"
import MovieHover from "./movie_hover"
import { useHistory } from "react-router"

const setVoteClass = (vote: string) => {
  if (parseFloat(vote) > 9) {
    return "green"
  }

  if (parseFloat(vote) > 8.5) {
    return "yellow"
  }

  if (parseFloat(vote) > 8) {
    return "orange"
  }

  return "red"
}

const MovieCard = (movie: Movie) => {
  const history = useHistory()

  function onMovieClicked() {
    history.push("/detail", movie)
  }

  return (
    <Grid item>
      <Box className={"movie " + movie.id} onClick={onMovieClicked}>
        <Image src={movie.image} alt={movie.title + " (" + movie.year + ")"} />
        <Box className="movie-info">
          <Typography variant="body1" className="movie-title">
            {movie.title}
          </Typography>
          <Box
            display="inline"
            className={`movie-rating ${setVoteClass(movie.imDbRating)}`}
          >
            {movie.imDbRating}
          </Box>
        </Box>

        <MovieHover {...movie} />
      </Box>
    </Grid>
  )
}

export default MovieCard
