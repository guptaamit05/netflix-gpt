import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)

  /**
   * Lot of movies list
   *    popular
   *      multiple movie card
   *    now playing
   *    Horror
   *    Trending 
   * */ 

  return (
    movies.nowPlayingMovies && <div className='bg-black'>
      <div className='-mt-44  relative z-20'>
        <MovieList title={"Now Playing"} moviesdata={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} moviesdata={movies.popularPlayingMovies} />
        <MovieList title={"Top Rated"} moviesdata={movies.topRatedPlayingMovies} />
        <MovieList title={"Up Coming"} moviesdata={movies.upCommingPlayingMovies} />
        </div>
    </div>
  )
}

export default SecondaryContainer