import React from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import ArtistCard from '../components/ArtistCard'
import { useGetTopChartsQuery } from '../Redux/shazam'

function TopArtists() {

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading top charts..." />;
  
  if (error) return <Error />;

  return (
    <div>
      <h2>Top Artists</h2>
      <div>
        {data?.map((song, i) => (
          <ArtistCard
            key={song.id}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default TopArtists