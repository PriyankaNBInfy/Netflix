import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetMovies from "../hooks/useGetMovies";
import { movieTypes } from "../utils/constants";

const Browse = () => {
  useGetMovies(movieTypes[0]);
  useGetMovies(movieTypes[1]);
  useGetMovies(movieTypes[2]);
  useGetMovies(movieTypes[3]);

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
