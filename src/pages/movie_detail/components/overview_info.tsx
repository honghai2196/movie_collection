import { Box, Grid, makeStyles, Theme, Typography } from "@material-ui/core"
import { Score, Star } from "@material-ui/icons"
import { MovieInfoProps } from "../../../domain/movie_repository/model/movie_info_model"

const useStyles = makeStyles((theme: Theme) => ({
  movieTitle: {
    fontWeight: "bolder",
  },
  icon: {
    "& p": {
      fontWeight: "bold",
      color: "black",
    },
  },
  iconLeft: {
    "& path": {
      fill: "blue",
      color: "blue",
    },
  },
  iconRight: {
    "& path": {
      fill: "green",
      color: "green",
    },
  },
  movieGenre: {
    "& p": {
      color: "gray",
      fontWeight: "bolder",
    },
  },
}))

const OverviewInfo = ({
  title,
  year,
  runtimeStr,
  imDbRating,
  metacriticRating,
  genres,
}: MovieInfoProps) => {
  const classes = useStyles()

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" className={classes.movieTitle}>
        {title}
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="body1">{year}</Typography>
          <Typography variant="body2">{runtimeStr}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.icon}>
            <Box className={classes.iconLeft}>
              <Score />
              <Typography
                variant="body2"
                className="brand-text"
                display="inline"
              >
                {imDbRating}
              </Typography>
            </Box>
            <Box className={classes.iconRight}>
              <Star />
              <Typography
                variant="body2"
                className="brand-text"
                display="inline"
              >
                {metacriticRating + "%"}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.movieGenre}>
            <Typography variant="body2" paragraph>
              {genres}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OverviewInfo
