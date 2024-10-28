import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularPlayingMovies } from "../hooks/usePopularPlayingMovies";
import { useTopRatedPlayingMovies } from "../hooks/useTopRatedPlayingMovies";
import { useUpCommingPlayingMovies } from "../hooks/useUpCommingPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const movieData = useNowPlayingMovies();
  const popularmovieData = usePopularPlayingMovies();
  const topRatedmovieData = useTopRatedPlayingMovies();
  const upCommingmovieData = useUpCommingPlayingMovies();

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
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
