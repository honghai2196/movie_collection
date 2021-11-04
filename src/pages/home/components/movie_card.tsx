import {
  Box,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
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

const useStyles = makeStyles((theme: Theme) => ({
  movie: {
    backgroundColor: "#373b69",
    borderRadius: "10px",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    margin: "1rem",
    width: "300px",
    "&:hover": {
      "& $movieOver": {
        transform: "translateY(0%)",
      },
    },
  },
  img: {
    maxWidth: "100%",
  },
  movieInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  },
  movieInfo_movieTitle: {
    color: "rgb(255, 255, 255)",
    margin: 0,
  },
  movieInfo_movieRating: {
    backgroundColor: "#22254b",
    borderRadius: "5px",
    padding: "0.5rem",
    fontWeight: "bold",
  },
  movieOver: {
    backgroundColor: "white",
    color: "black",
    padding: "1rem",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "auto",
    maxHeight: "100%",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease-in-out",

    "& h5": {
      fontWeight: "bolder",
    },
  },
}))

const MovieCard = (movie: Movie) => {
  const history = useHistory()
  const classes = useStyles()

  function onMovieClicked() {
    history.push("/detail", movie)
  }

  return (
    <Grid item>
      <Box className={classes.movie} onClick={onMovieClicked}>
        <Image
          className={classes.img}
          src={movie.image}
          alt={movie.title + " (" + movie.year + ")"}
        />
        <Box className={classes.movieInfo}>
          <Typography variant="body1" className={classes.movieInfo_movieTitle}>
            {movie.title}
          </Typography>
          <Box
            display="inline"
            className={
              classes.movieInfo_movieRating +
              " " +
              setVoteClass(movie.imDbRating)
            }
          >
            {movie.imDbRating}
          </Box>
        </Box>

        <MovieHover movie={movie as Movie} className={classes.movieOver} />
      </Box>
    </Grid>
  )
}

export default MovieCard
