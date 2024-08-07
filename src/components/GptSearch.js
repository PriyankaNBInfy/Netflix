import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20 -mt-48">
        <img
          className="h-screen object-cover md:h-full"
          src={BACKGROUND_IMAGE}
          alt="background-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
