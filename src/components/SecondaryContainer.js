import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { movieTypes } from "../utils/constants";

const SecondaryContainer = () => {
  const camelCasedMovieTypes = movieTypes.map((type) =>
    type.replace(/_./g, (match) => match.charAt(1).toUpperCase())
  );

  const titleCaseMovieTypes = movieTypes.map((type) =>
    type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );

  const nowPlaying = useSelector(
    (store) => store.movie[camelCasedMovieTypes[0]]
  );
  const popular = useSelector((store) => store.movie[camelCasedMovieTypes[1]]);
  const topRated = useSelector((store) => store.movie[camelCasedMovieTypes[2]]);
  const upcoming = useSelector((store) => store.movie[camelCasedMovieTypes[3]]);
  return (
    <div className="bg-black">
      <div className="-mt-6 md:-mt-44 relative z-20">
        <MovieList title={titleCaseMovieTypes[0]} movies={nowPlaying} />
        <MovieList title={titleCaseMovieTypes[1]} movies={popular} />
        <MovieList title={titleCaseMovieTypes[2]} movies={topRated} />
        <MovieList title={titleCaseMovieTypes[3]} movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
