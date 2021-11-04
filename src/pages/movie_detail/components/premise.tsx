import { Typography } from "@material-ui/core"

interface PremiseProps {
  plot: string
}

const Premise = ({ plot }: PremiseProps) => {
  return (
    <Typography className="movie-premise" variant="body2">
      {plot}
    </Typography>
  )
}

export default Premise
