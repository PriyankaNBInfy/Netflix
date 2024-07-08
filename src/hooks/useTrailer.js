import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailer = (movieId) => {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    getTrailer();
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
    setTrailer(trailerVideo[0]);
  };

  return trailer;
};

export default useTrailer;
