import { Box, makeStyles, Theme, Typography } from "@material-ui/core"
import { Country } from "../../../domain/movie_repository/model/movie_info_model"
import SubtitleSelector from "./subtitle_selector"

interface SectionInfoProps {
  title: string
  content: string | Country[]
  isSelector?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    marginTop: "5px",
  },
  title: {
    color: "grey",
    width: "75%",
  },
  selector: {},
  content: {
    color: "black",
    width: "15%",
  },
  contentText: {
    fontWeight: "bold",
  },
}))

const SectionInfo = ({
  title,
  content,
  isSelector = false,
}: SectionInfoProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{title.toUpperCase()}</Typography>
      <Box className={isSelector ? classes.selector : classes.content}>
        {isSelector ? (
          <SubtitleSelector languages={content as Country[]} />
        ) : (
          <Typography className={classes.contentText}>
            {content as string}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default SectionInfo
