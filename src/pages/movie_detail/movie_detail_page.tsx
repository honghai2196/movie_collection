import { Box, Divider, Grid } from "@material-ui/core"
import React, { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router"
import {
  MovieInfo,
  MovieInfoProps,
} from "../../domain/movie_repository/model/movie_info_model"
import { fetchMovieInfo } from "../../domain/movie_repository/movie_api"
import "./movie_detail_page.css"
import OverviewInfo from "./components/overview_info"

function MovieDetailPage(props: any) {
  const movie = useLocation<MovieInfo>()

  const id = (movie.state as MovieInfo).id
  const [movieInfo, setMovieInfo] = useState<MovieInfo>()

  const getMovieInfo = async () => {
    const movieInfoResponse: MovieInfoProps = await fetchMovieInfo(id)
    const movieInfo = new MovieInfo(movieInfoResponse)

    console.log(movieInfo)

    setMovieInfo(movieInfo)
  }

  useEffect(() => {
    getMovieInfo()
    return
  }, [])

  return (
    <React.Fragment>
      <Box className="movie-content-wrapper">
        <Grid container spacing={4}>
          <Grid item className="image-wrapper" xs={4}>
            <img
              src={movieInfo?.image ?? ""}
              alt={movieInfo?.fullTitle ?? ""}
            />
          </Grid>
          <Grid item className="overview-wrapper" md={8}>
            <OverviewInfo {...(movieInfo as MovieInfo)} />
          </Grid>
          <Divider />
          <Grid container xs={8} spacing={2}>
            <Grid item xs={4}>
              DIRECTED BY
            </Grid>
            <Grid item xs={4}>
              {movieInfo?.directors}
            </Grid>
            <Grid item xs={3}>
              WRITTEN BY
            </Grid>
            <Grid item xs={3}>
              {movieInfo?.writers}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* <SubtitleSelector {...(movieInfo as MovieInfo)} /> */}
    </React.Fragment>
  )
}

export default React.memo(MovieDetailPage)
