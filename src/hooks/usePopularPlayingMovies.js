import { useEffect } from "react";
import { API_OPTIONS, API_URL_POPULAR } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addPopularPlayingMovies } from "../utils/movieSlice";

export const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();
  // don't make api call if you have already data in redux..
  const popularMovies = useSelector(
    (store) => store.movies.popularPlayingMovies
  );

  const getPopularPlayingMovies = async () => {
    const data = await fetch(API_URL_POPULAR, API_OPTIONS);
    const jsond = await data.json();
    dispatch(addPopularPlayingMovies(jsond.results));
  };

  useEffect(() => {
    if (!popularMovies) {
      getPopularPlayingMovies();
    }
  }, []);
};
