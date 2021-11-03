import React from "react"
import { MovieInfo } from "../../domain/movie_repository/model/movie_info_model"

const MovieSample = (movieInfo: MovieInfo) => (
  <div className="movie">{movieInfo.fullTitle}</div>
)

export default MovieSample
