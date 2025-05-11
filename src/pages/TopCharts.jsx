import React from 'react'
import { useSelector } from 'react-redux'
import Error from '../components/Error'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { useGetTopChartsQuery } from '../Redux/shazam'
function TopCharts() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="Loading top charts..." />;
  if (error) return <Error />;
  return (
    <div>
      <h2>Top Charts</h2>
      <div>
        {data?.map((song, i) => (
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

export default TopCharts