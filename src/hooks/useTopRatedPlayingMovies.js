import { useEffect } from "react";
import { API_OPTIONS, API_URL_TOPRATED } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedPlayingMovies } from "../utils/movieSlice";

export const useTopRatedPlayingMovies = () => {

  const dispatch = useDispatch();
  const getTopRatedPlayingMovies = async () => {
    const data = await fetch(API_URL_TOPRATED, API_OPTIONS);
    const jsond = await data.json();
    dispatch(addTopRatedPlayingMovies(jsond.results));
  };

  useEffect(() => {
    getTopRatedPlayingMovies();
  }, []);
};
