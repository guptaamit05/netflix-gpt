import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularPlayingMovies } from "../hooks/usePopularPlayingMovies";
import { useTopRatedPlayingMovies } from "../hooks/useTopRatedPlayingMovies";
import { useUpCommingPlayingMovies } from "../hooks/useUpCommingPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const movieData = useNowPlayingMovies();
  const popularmovieData = usePopularPlayingMovies();
  const topRatedmovieData = useTopRatedPlayingMovies();
  const upCommingmovieData = useUpCommingPlayingMovies();
  const toggleGPTViewSection = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {/* MainContainer 
            VideoBackground
            Video Title
          SecondaryContainer:
            Movie List * n
              card * n              
      */}
      {toggleGPTViewSection ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
