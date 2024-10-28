import { useEffect } from "react";
import { API_OPTIONS, API_URL_POPULAR } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularPlayingMovies } from "../utils/movieSlice";

export const usePopularPlayingMovies = () => {

  const dispatch = useDispatch();
  const getPopularPlayingMovies = async () => {
    const data = await fetch(API_URL_POPULAR, API_OPTIONS);
    const jsond = await data.json();
    dispatch(addPopularPlayingMovies(jsond.results));
  };

  useEffect(() => {
    getPopularPlayingMovies();
  }, []);
};
