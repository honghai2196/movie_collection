import { FormControl, MenuItem, Select } from "@material-ui/core"
import { useState } from "react"
import { MovieInfo } from "../../../domain/movie_repository/model/movie_info_model"

const SubtitleSelector = (movieInfo: MovieInfo) => {
  const languages = movieInfo?.languageList ?? [
    {
      key: "none",
      value: "N/A",
    },
  ]

  const [language, setLanguage] = useState(languages[0])

  const onSelectorChanged = (event) => {
    setLanguage(event.target.value)
  }

  return (
    <FormControl>
      <Select
        disableUnderline={false}
        className="selector subtitle"
        value={language}
        onChange={onSelectorChanged}
        inputProps={{
          name: "country",
          id: "uncontrolled-native",
        }}
      >
        {languages.map((item) => (
          <MenuItem value={item.key}>{item.value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SubtitleSelector
