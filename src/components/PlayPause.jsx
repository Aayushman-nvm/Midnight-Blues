import React from 'react'
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
function PlayPause({isPlaying, activeSong, song, handlePause, handlePlay}) {
  const isActive = activeSong?.title === song.title
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