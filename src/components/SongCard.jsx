import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../Redux/playerSlice'

function SongCard({ song, i, isPlaying, activeSong, data }) {

  const artistData = song?.relationships?.artists?.data;
  const dispatch = useDispatch()

  function handlePlayClick() {
    dispatch(setActiveSong({ song, i, data }))
    dispatch(playPause(true))
  }

  function handlePauseClick() {
    dispatch(playPause(false))
  }
  return (
    <div>
      <div>
        <div>
          <PlayPause song={song} handlePause={handlePauseClick} handlePlay={handlePlayClick} isPlaying={isPlaying} activeSong={activeSong} />
        </div>
        <img alt="song_image" src={song?.attributes?.artwork?.url} />
      </div>
      <div>
        <p>
          <Link to={`/song/${song?.id}`}>
            {song?.attributes?.name}
            {song?.attributes?.albumName}
          </Link>
        </p>
        <p>
          {artistData?.map((artist) => {
            return (
              <Link key={artist.id} to={`/artist/${artist.id}` || '/top-artists'}>
                {artist.attributes.artistName}
              </Link>
            )
          })}
        </p>
      </div>
    </div>
  )
}

export default SongCard