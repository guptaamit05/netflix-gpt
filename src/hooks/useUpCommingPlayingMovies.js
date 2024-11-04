import { useEffect } from "react";
import { API_OPTIONS, API_URL_UPCOMMING } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addUpCommingPlayingMovies } from "../utils/movieSlice";

export const useUpCommingPlayingMovies = () => {
  const dispatch = useDispatch();
  // don't make api call if you have already data in redux..
  const upCommingMovies = useSelector(
    (store) => store.movies.upCommingPlayingMovies
  );
  const getUpCommingPlayingMovies = async () => {
    const data = await fetch(API_URL_UPCOMMING, API_OPTIONS);
    const jsond = await data.json();
    dispatch(addUpCommingPlayingMovies(jsond.results));
  };

  useEffect(() => {
    if (!upCommingMovies) {
      getUpCommingPlayingMovies();
    }
  }, []);
};
