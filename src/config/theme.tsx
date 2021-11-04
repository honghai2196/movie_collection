import { createTheme } from "@material-ui/core"

declare module "@material-ui/core" {
  interface Theme {
    myText: {
      backgroundColor: string
      color: string
    }
  }

  interface ThemeOptions {
    myText?: {
      backgroundColor?: string
      color?: string
    }
  }
}

export const theme = createTheme({
  myText: {
    backgroundColor: "black",
    color: "white,",
  },
})
