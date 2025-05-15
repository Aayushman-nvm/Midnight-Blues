import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deezerApi = createApi({
  reducerPath: "deezerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DEEZER_API_URL}`,
    prepareHeaders: (headers) => {
      headers.set(
        `${import.meta.env.VITE_API_KEY_SOURCE}`,
        `${import.meta.env.VITE_DEEZER_API_KEY}`
      );
      headers.set(
        `${import.meta.env.VITE_API_KEY_HOST}`,
        `${import.meta.env.VITE_DEEZER_API_HOST}`
      );
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