import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DetailsHeader from '../components/DetailsHeader'
import Error from '../components/Error'
import Loader from '../components/Loader'
import RelatedSongs from '../components/RelatedSongs'
import { playPause, setActiveSong } from '../Redux/playerSlice'
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../Redux/shazam'

function SongDetails() {
  const dispatch = useDispatch();
  const { songid } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  console.log(songid)
  const { data: songData, isFetching: isFetchingSongDetails, error } = useGetSongDetailsQuery({ songid })
  const { data, isFetching: isFetchingRelatedSongs, error: errorRelated } = useGetSongRelatedQuery({ songid })
  if (isFetchingRelatedSongs || isFetchingSongDetails) return <Loader title="Loading song details..." />
  if (error || errorRelated) return <Error />
  function handlePauseClick() {
    dispatch(playPause(false))
  }
  function handlePlayClick(song, i) {
    dispatch(setActiveSong({ song, data, i }))
  }
  return (
    <div>
      <DetailsHeader
        artistId=""
        songData={songData}
      />
      <div>
        <h2>Lyrics</h2>
        <div>
          {songData?.sections[1].text.length === 0 ? (
            <p>No lyrics found</p>
          ) : (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-base text-gray-600 my-1">{line}</p>
            ))
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        artistId=""
      />
    </div>
  )
}

export default SongDetails