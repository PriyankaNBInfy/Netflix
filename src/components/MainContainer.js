import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useGetMoviesQuery } from "../features/api/apiSlice";
import { movieTypes } from "../utils/constants";

const MainContainer = () => {
  const { data } = useGetMoviesQuery(movieTypes.nowPlaying);

  if (!data) return;

  const mainMovie = data.results[0];

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
