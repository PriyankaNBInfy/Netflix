import React from "react";
import useTrailer from "../hooks/useTrailer";
import { useGetTrailerQuery } from "../features/api/apiSlice";

const VideoBackground = ({ movieId }) => {
  const { data, isSuccess, isLoading, isError, error } =
    useGetTrailerQuery(movieId);
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    const trailerVideo = data?.results?.filter(
      (video) => video.name === "Official Trailer"
    );
    content = (
      <iframe
        className="w-screen aspect-video -mt-20 md:-mt-44"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo[0]?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }
  return <div>{content}</div>;
};

export default VideoBackground;
