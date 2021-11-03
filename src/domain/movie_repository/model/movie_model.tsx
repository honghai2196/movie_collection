export interface MovieProps{
    id:                 string
    rank:               string
    title:              string
    year:               string
    image:              string
    crew:               string
    imDbRating:         string
    imDbRatingCount:    string
}

export class Movie {
    public id:          string
    public rank:        string
    public title:       string
    public year:        string
    public image:       string
    public crew:        string
    public imDbRating:  string
    public imDbRatingCount: string

    constructor(props: MovieProps) {
        this.id                 = props.id
        this.rank               = props.rank
        this.title              = props.title
        this.year               = props.year
        this.image              = props.image
        this.crew               = props.crew
        this.imDbRating         = props.imDbRating
        this.imDbRatingCount    = props.imDbRatingCount
    }
}