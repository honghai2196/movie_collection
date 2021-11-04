import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import React, { Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router"
import {
  MovieInfo,
  MovieInfoProps,
} from "../../domain/movie_repository/model/movie_info_model"
import { fetchMovieInfo } from "../../domain/movie_repository/movie_api"
import OverviewInfo from "./components/overview_info"
import DetailInfo from "./components/detail_info"
import { Movie } from "../../domain/movie_repository/model/movie_model"
import { width } from "@material-ui/system"

const useStyles = makeStyles((theme: Theme) => ({
  movieContentWrapper: {},
  imageWrapper: {},
  overviewWrapper: {},
  detailWrapper: {},
  premiseWrapper: {},
  castWrapper: {},
}))

function MovieDetailPage() {
  const movie = useLocation<Movie>()
  const [movieInfo, setMovieInfo] = useState<MovieInfo>()

  const classes = useStyles()

  useEffect(() => {
    async function getMovieInfo() {
      const id = (movie.state as Movie).id

      const movieInfoResponse: MovieInfoProps = await fetchMovieInfo(id)
      const movieInfo = new MovieInfo(movieInfoResponse)

      console.log(movieInfo)

      setMovieInfo(movieInfo)
    }

    getMovieInfo()
    return
  }, [])

  if (movieInfo === undefined) {
    return (
      <Fragment>
        <CircularProgress
          style={{
            position: "fixed",
            left: "50%",
            top: "35%",
            display: "none",
            height: "31px",
            width: "31px",
          }}
        />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Box className={classes.movieContentWrapper}>
        <Grid container spacing={4}>
          <Grid item className={classes.imageWrapper} xs={4}>
            <img
              src={movieInfo?.image ?? ""}
              alt={movieInfo?.fullTitle ?? ""}
            />
          </Grid>
          <Grid item className={classes.overviewWrapper} md={8}>
            <OverviewInfo {...(movieInfo as MovieInfo)} />
            <Divider />
            <Grid container className={classes.detailWrapper}>
              <DetailInfo {...(movieInfo as MovieInfo)} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default MovieDetailPage
