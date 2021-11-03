import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
// import { getAllMovies } from './domain/movie_repository/movie_api';
// import MovieSample from './config/components/movie_sample';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { getAllMovies } from './domain/movie_repository/movie_api';
import MovieSample from './config/components/movie_sample';

const HomePage = lazy(() => import("./pages/home/home_page"));

function App() {
  return (
    <Router>
      {/* <MuiThemeProvider theme={theme}> */}
        <CssBaseline />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/detail">
              {/* <Detail /> */}
            </Route>
          </Switch>
        </Suspense>
      {/* </MuiThemeProvider> */}
    </Router>
  )

  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   getAllMovies().then(data => {
  //     // console.log(data)
  //     setMovies(data)
  //   })
  // }, [])

  // console.log(movies)

  // return (
  //   <div>
  //     { movies.length > 0 && movies.map(() => <MovieSample />) }
  //   </div>
  // )
}

export default App;
