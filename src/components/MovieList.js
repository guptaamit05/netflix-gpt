import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesdata }) => {
  return (
    <div className="px-6 text-white py-4">
      <h1 className="font-bold text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scroller ">
        <div className="flex">
          {moviesdata?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
