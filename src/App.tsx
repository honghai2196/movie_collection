import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllMovies } from './domain/movie_repository/movie_api';
import MovieSample from './config/components/movie_sample';

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getAllMovies().then(data => {
      console.log(data)
      setMovies(data)
    })
  }, [])

  return (
    <div>
      { movies.length > 0 && movies.map(() => <MovieSample />) }
    </div>
  )
}

export default App;
