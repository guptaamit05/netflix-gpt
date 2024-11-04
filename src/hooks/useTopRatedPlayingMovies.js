import { useEffect } from "react";
import { API_OPTIONS, API_URL_TOPRATED } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addTopRatedPlayingMovies } from "../utils/movieSlice";

export const useTopRatedPlayingMovies = () => {
  const dispatch = useDispatch();
  // don't make api call if you have already data in redux..
  const topRatedMovies = useSelector(
    (store) => store.movies.topRatedPlayingMovies
  );
  const getTopRatedPlayingMovies = async () => {
    const data = await fetch(API_URL_TOPRATED, API_OPTIONS);
    const jsond = await data.json();
    dispatch(addTopRatedPlayingMovies(jsond.results));
  };

  useEffect(() => {
    if (!topRatedMovies) {
      getTopRatedPlayingMovies();
    }
  }, []);
};
