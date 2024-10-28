import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesD = useSelector((store) => store?.movies?.nowPlayingMovies);
  // Early return...
  if(moviesD === null) return;

  const {original_title, overview, id} = moviesD[0];
  return (
    <div className="pt-16">
      <VideoTitle title={original_title} overview = {overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
