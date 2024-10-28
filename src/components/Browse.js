import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const movieData = useNowPlayingMovies();

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
