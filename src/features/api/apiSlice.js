import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_OPTIONS } from "../../utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/movie/" }),
  endpoints: (builder) => ({
    getTrailer: builder.query({
      query: (movieId) => ({
        url: `${movieId}/videos?language=en-US`,
        method: "GET",
        headers: API_OPTIONS,
      }),
    }),
    getMovies: builder.query({
      query: (movieType) => ({
        url: `${movieType}?page=1`,
        method: "GET",
        headers: API_OPTIONS,
      }),
    }),
  }),
});

export const { useGetTrailerQuery, useGetMoviesQuery } = apiSlice;
