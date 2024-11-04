import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
export const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // don't make api call if you have already data in redux..
  const movieTrailerMovies = useSelector((store) => store.movies.movieTrailer);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonD = await data.json();
    const trailerData = jsonD.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerData.length ? trailerData[0] : jsonD.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    if (!movieTrailerMovies) {
      getMovieVideo();
    }
  }, []);
};
