import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const jsond = await data.json();
    dispatch(addNowPlayingMovies(jsond.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
