import { Box, Grid, Typography } from "@material-ui/core"
import { Score, Star } from "@material-ui/icons"
import { MovieInfo } from "../../../domain/movie_repository/model/movie_info_model"

const OverviewInfo = (movieInfo: MovieInfo) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" className="movie-title">
        {movieInfo?.title}
      </Typography>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <Typography variant="body1">{movieInfo?.year}</Typography>
          <Typography variant="body2">{movieInfo?.runtimeStr}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className="icon">
            <Box className="icon-left">
              <Score />
              <Typography
                variant="body2"
                className="brand-text"
                display="inline"
              >
                {movieInfo?.imDbRating}
              </Typography>
            </Box>
            <Box className="icon-right">
              <Star />
              <Typography
                variant="body2"
                className="brand-text"
                display="inline"
              >
                {movieInfo?.imDbRatingVotes}
              </Typography>
            </Box>
          </Box>
          <Box className="movie-genre">
            <Typography variant="body2" paragraph>
              {movieInfo.genres}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OverviewInfo
