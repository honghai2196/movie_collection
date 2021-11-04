import { FormControl, MenuItem, Select } from "@material-ui/core"
import { useState } from "react"
import { Country } from "../../../domain/movie_repository/model/movie_info_model"

interface SubtitleSelectorProps {
  languages: Country[]
}

const SubtitleSelector = ({ languages }: SubtitleSelectorProps) => {
  const [language, setLanguage] = useState<string>(languages[0].key)

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
