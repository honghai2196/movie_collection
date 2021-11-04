import { Box, Divider, Grid, makeStyles, Theme } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"
import {
  MovieInfo,
  MovieInfoProps,
} from "../../domain/movie_repository/model/movie_info_model"
import { fetchMovieInfo } from "../../domain/movie_repository/movie_api"
import OverviewInfo from "./components/overview_info"
import DetailInfo from "./components/detail_info"

const useStyles = makeStyles((theme: Theme) => ({
  movieContentWrapper: {},
  imageWrapper: {},
  overviewWrapper: {},
  detailWrapper: {},
  premiseWrapper: {},
  castWrapper: {},
}))

function MovieDetailPage() {
  const movie = useLocation<MovieInfo>()
  const [movieInfo, setMovieInfo] = useState<MovieInfo>()

  useEffect(() => {
    const getMovieInfo = async () => {
      const id = (movie.state as MovieInfo).id

      console.log("=== GET MOVIE DETAIL INFO WITH ID = " + id + " ===")
      const movieInfoResponse: MovieInfoProps = await fetchMovieInfo(id)
      const movieInfo = new MovieInfo(movieInfoResponse)

      console.log(movieInfo)

      setMovieInfo(movieInfo)
    }

    getMovieInfo()
  }, [])

  const classes = useStyles()

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default React.memo(MovieDetailPage)
