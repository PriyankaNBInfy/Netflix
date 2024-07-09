import { useDispatch } from "react-redux";
import { API_OPTIONS, movieTypes } from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../features/movies/movieSlice";
import { useEffect } from "react";

const useGetMovies = (movieType) => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieType + "?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    switch (movieType) {
      case movieTypes[0]:
        dispatch(addNowPlayingMovies(json.results));
        break;
      case movieTypes[1]:
        dispatch(addPopularMovies(json.results));
        break;
      case movieTypes[2]:
        dispatch(addTopRatedMovies(json.results));
        break;
      case movieTypes[3]:
        dispatch(addUpcomingMovies(json.results));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useGetMovies;
