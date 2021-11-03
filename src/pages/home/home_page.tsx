import React, { useState, useEffect } from 'react'
import { getAllMovies } from '../../domain/movie_repository/movie_api'
import { MovieProps, Movie } from '../../domain/movie_repository/model/movie_model'
import { Box, Grid } from '@material-ui/core'
import MovieCard from '../../config/components/movie_card'

function HomePage() {
    // Declare state
    const [movies, setMovies] = useState<Movie[]>([])
    const [allMovies, setAllMovies] = useState<Movie[]>([])

    const getMovies = async () => {
        const moviesResponse: [MovieProps] = await getAllMovies()
        const listMovies = moviesResponse.map(item => new Movie(item))

        setMovies(listMovies.splice(0, 30))
        setAllMovies(listMovies)
    }

    useEffect(() => {
        getMovies()
    }, [])

    const onFormSubmitted = (event: any) => {

    }

    return (
        <React.Fragment>
            <Box p={2}>
                <Grid container spacing={2}>
                    {movies.map(movie => 
                        <MovieCard key={movie.id} {...movie} />)}
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default React.memo(HomePage)