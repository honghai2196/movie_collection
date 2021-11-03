import { Box, Button, Card, Grid, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { memo, useCallback } from "react"
import { useHistory } from "react-router"

const styles = (theme: any) => ({
    card: {
        backgroundColor: "#22254b",
        margin: theme.spacing(1),
        boxShadow: theme.shadows[4],
    },
    title: {
        backgroundColor: "white"
    },
    detail: {
        backgroundColor: "transparent",
        color: "white"
    },
    bodyDetail: {
        padding: 5
    }
})

const MovieCard = (props: any) => {
    const { classes } = props
    const history = useHistory()

    function onClick() {
        history.push("/detail", props)
    }

    const showImageGrid = useCallback(
        () => {
            return <Grid item md={9} >
                <div className="movie">
                    <img style={{height: 450,}}
                        src= {props.image}
                        alt= {props.title} />
                    
                    <div className="movie-over">
                        <Typography variant="h2">Overview</Typography>
                        <Typography variant="body1">{props.title}</Typography>
                    </div>
                </div>
            </Grid>
        },
        [props],
    )

    return (
        <Card className={classes.card}>
            <Box p={1}>
                <Button onClick={onClick}>{showImageGrid}</Button>
            </Box>
        </Card>
    )
}

export default withStyles(styles)(memo(MovieCard))