import { Box, Typography } from "@material-ui/core"
import { MovieInfo } from "../../../domain/movie_repository/model/movie_info_model"

const Premise = (plot: string) => {
  return (
    <Typography className="movie-premise" variant="body2">
      {plot}
    </Typography>
  )
}

export default Premise
