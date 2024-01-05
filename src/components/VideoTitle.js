import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r'>
        <h1 className='text-2xl font-bold text-white'>{props.title}</h1>
        <p className='p-6 text-lg w-1/4 text-white'>{props.overview}</p>
        <div>
            <button className='p-4 px-12  bg-white rounded-lg text-black hover:bg-opacity-80'>▶play</button>
            <button className='mx-2 p-4 px-12  bg-white rounded-lg text-black hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle