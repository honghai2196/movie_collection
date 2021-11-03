import {
  Box,
  FormControl,
  MenuItem,
  NativeSelect,
  Select,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import {
  MovieInfo,
  MovieInfoProps,
} from "../../domain/movie_repository/model/movie_info_model";
import { Movie } from "../../domain/movie_repository/model/movie_model";
import { fetchMovieInfo } from "../../domain/movie_repository/movie_api";

function MovieDetailPage(props: any) {
  const movie = useLocation<Movie>();

  const id = (movie.state as Movie).id;
  const [movieInfo, setMovieInfo] = useState<MovieInfo>();

  const getMovieInfo = async () => {
    const movieInfoResponse: MovieInfoProps = await fetchMovieInfo(id);
    const movieInfo = new MovieInfo(movieInfoResponse);

    console.log(movieInfo);

    setMovieInfo(movieInfo);
  };

  useEffect(() => {
    getMovieInfo();
    return;
  }, []);

  const languages = movieInfo?.languageList ?? ["N/A"];

  const [language, setLanguage] = useState(languages[0]);

  const onSelectorChanged = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <React.Fragment>
      <Box>
        <FormControl>
          <NativeSelect
            disableUnderline={false}
            className="selector subtitle"
            defaultValue={language}
            onChange={onSelectorChanged}
            inputProps={{
              name: "country",
              id: "uncontrolled-native",
            }}
          >
            {languages.map((item) => (
              <option value={item.key}>{item.value}</option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
    </React.Fragment>
  );
}

export default React.memo(MovieDetailPage);
