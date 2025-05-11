import React from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { genres } from '../assets/constants'
import { useGetSongsByGenreQuery } from '../Redux/shazam'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenreListId } from '../Redux/playerSlice'

function Discover() {
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'pop')
  const dispatch = useDispatch()
  console.log("Data:",data);
  if (isFetching) return (<Loader title="Loading Songs..." />);
  if (error) return <Error />
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title
  return (
    <div>
      <div>
        <h2>Discover {genreTitle}</h2>
        <select
          onChange={(e) => { dispatch(selectGenreListId(e.target.value)) }}
          value={genreListId||'pop'}
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div>
        {data?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover