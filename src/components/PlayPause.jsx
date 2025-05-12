import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
function PlayPause({isPlaying, activeSong, song, handlePause, handlePlay}) {
  const isActive = activeSong?.attributes?.name === song?.attributes?.name
  return (
    <div>
      {isActive && isPlaying ? (
        <FaPauseCircle onClick={handlePause} />
      ) : (
        <FaPlayCircle onClick={handlePlay} />
      )}
    </div>
  )
}

export default PlayPause