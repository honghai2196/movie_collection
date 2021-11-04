import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core"
import { Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router"
import {
  MovieInfo,
  MovieInfoProps,
} from "../../domain/movie_repository/model/movie_info_model"
import { fetchMovieInfo } from "../../domain/movie_repository/movie_api"
import OverviewInfo from "./components/overview_info"
import DetailInfo from "./components/detail_info"
import { Movie } from "../../domain/movie_repository/model/movie_model"
import OverviewRating from "./components/overview_rating"
import Premise from "./components/premise"
import CastList from "./components/cast_list"

const useStyles = makeStyles((theme: Theme) => ({
  movieContentWrapper: {
    marginTop: theme.spacing(6),
  },

  imageWrapper: {},

  overviewWrapper: {},

  detailWrapper: {},

  movieOverview: {},

  movieInfo: {
    "& h6": {
      fontWeight: "bold",
    },
  },

  movieRating: {},

  movieDetailed: {},

  premiseWrapper: {},

  castWrapper: {},

  image: {
    width: "70%",
    marginLeft: theme.spacing(4),
  },
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
        <Grid container spacing={2}>
          <Grid item className={classes.imageWrapper} lg={3}>
            <img
              src={movieInfo?.image ?? ""}
              alt={movieInfo?.fullTitle ?? ""}
              className={classes.image}
            />
          </Grid>

          <Grid item className={classes.overviewWrapper} lg={9}>
            <Grid container>
              <Grid container className={classes.movieOverview} lg={12}>
                <Grid item className={classes.movieInfo} lg={8}>
                  <OverviewInfo {...(movieInfo as MovieInfo)} />
                </Grid>
                <Grid item className={classes.movieRating} lg={4}>
                  <OverviewRating {...(movieInfo as MovieInfo)} />
                </Grid>
              </Grid>

              {/* <Divider variant="middle" /> */}

              <Grid container className={classes.movieDetailed} lg={12}>
                <DetailInfo {...(movieInfo as MovieInfo)} />
                <Premise plot={(movieInfo as MovieInfo).plot} />
                <CastList {...(movieInfo as MovieInfo)} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default MovieDetailPage
