import { Box, Typography } from "@material-ui/core";
import { Movie } from "../../../domain/movie_repository/model/movie_model";

const MovieHover = (movie: Movie) => {
    return (
        <Box className="movie-over">
            <Typography variant="h5">Overview:</Typography>
            <Typography>{ movie.title }</Typography>
            <Typography>{ "Publish year: " + movie.year }</Typography>
            <Typography>{ "Casts: " + movie.crew }</Typography>
            <Typography>{ "Ranking: " + movie.rank }</Typography>
            <Typography>{ "IMDB Rating: " + movie.imDbRating }</Typography>
            <Typography>{ "IMDB Rating Count: " + movie.imDbRatingCount }</Typography>
        </Box>
    )
}

export default MovieHover