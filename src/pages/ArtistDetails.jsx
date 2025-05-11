import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DetailsHeader from '../components/DetailsHeader'
import Error from '../components/Error'
import Loader from '../components/Loader'
import RelatedSongs from '../components/RelatedSongs'
import { useGetArtistDetailsQuery } from '../Redux/shazam'

function ArtistDetails() {
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId })
  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />
  if (error) return <Error />
  return (
    <div>
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
      />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails