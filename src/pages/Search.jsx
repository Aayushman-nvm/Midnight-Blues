import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Error from '../components/Error'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { useGetSongsBySearchQuery } from '../Redux/shazam'
function Search() {
  const {searchTerm} = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery (searchTerm);
  const songs=data?.track?.hits?.map((song)=>song.track)
  if (isFetching) return <Loader title="Loading top charts..." />;
  if (error) return <Error />;
  return (
    <div>
      <h2>Showing results from <span>{searchTerm}</span></h2>
      <div>
        {songs?.map((song, i) => (
          <SongCard
            key={song.id}
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

export default Search