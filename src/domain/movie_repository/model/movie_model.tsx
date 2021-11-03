export interface MovieProps{
    id: string
    rank: string
    title: string
    publish_year: string
    image: string
    casts: string
    imdbRating: string
}

export class Movie {
    public id: string
    public rank: string
    public title: string
    public publish_year: string
    public image: string
    public casts: string
    public imdbRating: string

    constructor(props: MovieProps) {
        this.id = props.id
        this.rank = props.rank
        this.title = props.title
        this.publish_year = props.publish_year
        this.image = props.image
        this.casts = props.casts
        this.imdbRating = props.imdbRating
    }
}