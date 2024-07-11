import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../hooks/useGetMovies";
import { movieTypes } from "../utils/constants";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  // console.log(movieTypes.nowPlaying);
  // useGetMovies(movieTypes.nowPlaying);
  // useGetMovies(movieTypes.popular);
  // useGetMovies(movieTypes.topRated);
  // useGetMovies(movieTypes.upcoming);
  const showGptSearch = useSelector((store) => store.gpt.isGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      MainContainer
        - Video background
        - title
        Secondary Container
          - movies list * n
          - movie cards * n
      */}
    </div>
  );
};

export default Browse;
