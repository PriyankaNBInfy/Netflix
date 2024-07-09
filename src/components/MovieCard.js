import React from "react";
import { CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-2">
      <img src={CDN_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
