import { Box, Button, Card, Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { memo, useCallback } from "react"
import { useHistory } from "react-router"
import { Movie } from "../../domain/movie_repository/model/movie_model"

// const styles = (theme: any) => ({
//     card: {
//         backgroundColor: "#22254b",
//         margin: 10,//theme.spacing(1),
//         boxShadow: 5,//theme.shadows[4],
//     },
//     title: {
//         backgroundColor: "white"
//     },
//     detail: {
//         backgroundColor: "transparent",
//         color: "white"
//     },
//     bodyDetail: {
//         padding: 5
//     }
// })

const MovieCard = (movie: Movie) => {
    // const { classes } = props
    // console.log(props.image)
    // const history = useHistory()

    // function onClick() {
    //     history.push("/detail", props)
    // }

    
            
    return <Grid item md={9} >
        <div className={"movie-" + movie.id}>
            <div className="movie-header"></div>
            <img style= {{height: 400}}
                src= {movie.image}
                alt= {movie.title + "(" + movie.year + ")"} />
                    
            <div className="movie-over">
                <Typography variant="h2">Overview</Typography>
                <Typography variant="body1">{movie.title}</Typography>
            </div>
        </div>
    </Grid>
    

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