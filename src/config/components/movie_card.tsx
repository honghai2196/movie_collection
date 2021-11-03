import { Box, Button, Card, Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { memo, useCallback } from "react"
import { useHistory } from "react-router"
import { Movie } from "../../domain/movie_repository/model/movie_model"
import Image from "material-ui-image"
import { typography } from "@material-ui/system"

const MovieCard = (movie: Movie) => {            
    return (
        <Grid item>
            <Box className="movie">
                <Image src={movie.image} alt={movie.title + " (" + movie.year + ")"} />
                <Box className="movie-info">
                    <Typography variant="body1" className="movie-title">{movie.title}</Typography>
                    <Box display="inline" className="movie-rating">{movie.imDbRating}</Box>
                </Box>
                    
                <Box className="movie-over">
                    <Typography variant="h5">Overview:</Typography>
                    <Typography>{ movie.title }</Typography>
                    <Typography>{ "Publish year: " + movie.year }</Typography>
                    <Typography>{ "Casts: " + movie.crew }</Typography>
                    <Typography>{ "IMDB Rating: " + movie.imDbRating }</Typography>
                    <Typography>{ "IMDB Rating Count: " + movie.imDbRatingCount }</Typography>
                </Box>
            </Box>
        </Grid>
    )
    
    

    // return (
    //     <Card className={props.id}>
    //         <Box p={1}>
    //             <Button onClick={onClick}>{showImageGrid}</Button>
    //         </Box>
    //     </Card>
    // )
}

// export default withStyles(styles)(memo(MovieCard))
export default MovieCard