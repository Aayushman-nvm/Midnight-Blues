import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deezerdevs-deezer.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_DEEZER_API_KEY);
      headers.set("X-RapidAPI-Host", "deezerdevs-deezer.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (searchParam) => `/search?q=${searchParam}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artist/${artistId}`,
    }),
    getAlbumDetails: builder.query({
      query: (albumId) => `/album/${albumId}`,
    }),
  }),
});

export const {
  useGetSearchQuery,
  useGetArtistDetailsQuery,
  useGetAlbumDetailsQuery,
} = deezerApi;
