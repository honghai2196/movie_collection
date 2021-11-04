import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { MovieInfo } from "../../../domain/movie_repository/model/movie_info_model"
import SectionInfo from "./section_info"

const useStyles = makeStyles((theme: Theme) => ({
  br: {
    marginTop: theme.spacing(6),
  },
}))

const DetailInfo = (movieInfo: MovieInfo) => {
  const classes = useStyles()

  return (
    <>
      <SectionInfo title="directed by" content={movieInfo.directors} />
      <SectionInfo title="written by" content={movieInfo.writers} />
      <SectionInfo title="studio" content={movieInfo.companies} />
      <br className={classes.br} />
      <SectionInfo title="video" content="ULTRA HD" />
      <SectionInfo
        title="audio"
        content={movieInfo.languageList}
        isSelector={true}
      />
      <SectionInfo
        title="subtitles"
        content={movieInfo.languageList}
        isSelector={true}
      />
    </>
  )
}

export default DetailInfo
