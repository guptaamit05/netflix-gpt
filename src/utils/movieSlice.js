import { createSlice } from "@reduxjs/toolkit";

const movieReducer = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularPlayingMovies: null,
    topRatedPlayingMovies: null,
    upCommingPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularPlayingMovies: (state, action) => {
      state.popularPlayingMovies = action.payload;
    },
    addTopRatedPlayingMovies: (state, action) => {
      state.topRatedPlayingMovies = action.payload;
    },
    addUpCommingPlayingMovies: (state, action) => {
        state.upCommingPlayingMovies = action.payload;
      },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularPlayingMovies,
  addTopRatedPlayingMovies,
  addUpCommingPlayingMovies,
  addMovieTrailer,
} = movieReducer.actions;
export default movieReducer.reducer;
