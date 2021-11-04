export interface MovieInfoProps {
  id: string
  title: string
  originalTitle: string
  fullTitle: string
  year: string
  releaseDate: Date
  runtimeMins: string
  runtimeStr: string
  plot: string
  plotLocal: string
  plotLocalIsRtl: boolean
  awards: string
  image: string
  type: string
  directors: string
  writers: string
  actorList: Actor[]
  genres: string
  languageList: Country[]
  contentRating: string
  imDbRating: string
  imDbRatingVotes: string
  metacriticRating: string
  tagline: string
  companies: string
}

export interface Actor {
  id: string
  image: string
  name: string
  asCharacter: string
}

export interface Country {
  key: string
  value: string
}

export class MovieInfo {
  public id: string
  public title: string
  public originalTitle: string
  public fullTitle: string
  public year: string
  public releaseDate: Date
  public runtimeMins: string
  public runtimeStr: string
  public plot: string
  public plotLocal: string
  public plotLocalIsRtl: boolean
  public awards: string
  public image: string
  public type: string
  public directors: string
  public writers: string
  public actorList: Actor[]
  public genres: string
  public languageList: Country[]
  public contentRating: string
  public imDbRating: string
  public imDbRatingVotes: string
  public metacriticRating: string
  public tagline: string
  public companies: string

  constructor(props: MovieInfoProps) {
    this.id = props.id
    this.title = props.title
    this.originalTitle = props.originalTitle
    this.fullTitle = props.fullTitle
    this.year = props.year
    this.releaseDate = props.releaseDate
    this.runtimeMins = props.runtimeMins
    this.runtimeStr = props.runtimeStr
    this.plot = props.plot
    this.plotLocal = props.plotLocal
    this.plotLocalIsRtl = props.plotLocalIsRtl
    this.awards = props.awards
    this.image = props.image
    this.type = props.type
    this.directors = props.directors
    this.writers = props.writers
    this.actorList = props.actorList
    this.genres = props.genres
    this.languageList = props.languageList
    this.contentRating = props.contentRating
    this.imDbRating = props.imDbRating
    this.imDbRatingVotes = props.imDbRatingVotes
    this.metacriticRating = props.metacriticRating
    this.tagline = props.tagline
    this.companies = props.companies
  }
}
