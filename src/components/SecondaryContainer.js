import React from "react";
import MovieList from "./MovieList";
import { movieTypes } from "../utils/constants";
import { useGetMoviesQuery } from "../features/api/apiSlice";

const SecondaryContainer = () => {
  const { data: nowPlaying } = useGetMoviesQuery(movieTypes.nowPlaying);
  const { data: popular } = useGetMoviesQuery(movieTypes.popular);
  const { data: topRated } = useGetMoviesQuery(movieTypes.topRated);
  const { data: upcoming } = useGetMoviesQuery(movieTypes.upcoming);

  let combinedMovies = [];

  if (nowPlaying && popular && topRated && upcoming) {
    const nowPlayingMovies = nowPlaying?.results;
    const popularMovies = popular?.results;
    const topRatedMovies = topRated?.results;
    const upcomingMovies = upcoming?.results;
    combinedMovies = [
      { nowPlaying: nowPlayingMovies },
      { popular: popularMovies },
      { topRated: topRatedMovies },
      { upcoming: upcomingMovies },
    ];
  }

  return (
    <div className="bg-black">
      <div className="-mt-6 md:-mt-44 relative z-20">
        {combinedMovies?.map((movie) => (
          <MovieList
            key={Object.keys(movie)}
            title={Object.keys(movie)}
            movies={movie[Object.keys(movie)]}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
