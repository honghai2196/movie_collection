import { Typography } from "@material-ui/core"

const Premise = (plot: string) => {
  return (
    <Typography className="movie-premise" variant="body2">
      {plot}
    </Typography>
  )
}

export default Premise
