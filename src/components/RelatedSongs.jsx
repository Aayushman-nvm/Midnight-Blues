import React from 'react'
import SongBar from './SongBar'
function RelatedSongs({ 
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,}) {
  return (
    <div>RelatedSongs
      {data?.map((song, i) => (
        <SongBar
          key={`${song.id}-${artist.id}`}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          artistId={artistId}
        />
      ))}
    </div>
  )
}

export default RelatedSongs