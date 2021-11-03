import { Box } from "@material-ui/core"
import React, { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router"
import MovieSample from "../../config/components/movie_sample"
import { MovieInfo, MovieInfoProps } from "../../domain/movie_repository/model/movie_info_model"
import { Movie } from "../../domain/movie_repository/model/movie_model"
import { fetchMovieInfo } from "../../domain/movie_repository/movie_api"

function MovieDetailPage(props: any) {
    const movie = useLocation<Movie>()

    const id = (movie.state as Movie).id
    const [movieInfo, setMovieInfo] = useState<MovieInfo>()

    const getMovieInfo = async () => {
        const movieInfoResponse: MovieInfoProps = await fetchMovieInfo(id)
        const movieInfo = new MovieInfo(movieInfoResponse)

        console.log(movieInfo)

        setMovieInfo(movieInfo)
    }

    useEffect(() => {
        getMovieInfo()
        return
    }, [])

    return (
        <React.Fragment>
            <Box>
                <MovieSample key={ movieInfo?.id } { ...movieInfo! } />
            </Box>
        </React.Fragment>
    )
}

export default React.memo(MovieDetailPage)