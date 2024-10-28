import React from 'react'
import {IMAGEURL} from "../utils/constant"


const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt="now_playing_movies" src={IMAGEURL+posterPath} />
    </div>
  )
}

export default MovieCard