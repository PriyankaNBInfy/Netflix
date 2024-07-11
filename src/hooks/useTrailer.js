import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../features/movies/movieSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailer);

  useEffect(() => {
    !trailer && getTrailer();
  }, []);

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const trailerVideo = json.results?.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailer(trailerVideo[0]));
  };
};

export default useTrailer;
