import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex gap-5 '>
        <button className='px-8 rounded-md py-3 text-xl bg-white hover:bg-opacity-80 text-black'>Play</button>
        <button className='px-8 py-3 text-xl rounded-md bg-gray-400 text-white'>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle