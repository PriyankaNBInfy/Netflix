import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const titleWithSpaces = title.toString().replace(/([A-Z])/g, " $1");
  const titleCased =
    titleWithSpaces.charAt(0).toUpperCase() + titleWithSpaces.slice(1);

  return (
    <div className="pl-6 md:pl-12">
      <h1 className="text-xs md:text-xl py-2 text-white">{titleCased}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
