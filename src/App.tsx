import React, { Fragment, lazy, Suspense } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { theme } from "./config/theme"

const HomePage = lazy(() => import("./pages/home/home_page"))
const MovieDetailPage = lazy(
  () => import("./pages/movie_detail/movie_detail_page")
)

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/detail">
              <MovieDetailPage />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
