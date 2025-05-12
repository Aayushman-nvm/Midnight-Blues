import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetArtistDetailsQuery } from '../Redux/shazam';

function ArtistCard({song, i}) {

  const navigate = useNavigate();
  const artistId = song?.relationships?.artists?.data?.id;
  const{data, isFetching, error}=useGetArtistDetailsQuery({artistId})
  const imageUrl = data?.data?.attributes?.artwork?.url;
  const artistName = data?.data?.attributes?.name;
  
  return (
    <div onClick={() => navigate(`/artists/${artistId}`)}>
      <img alt='Artist' src={imageUrl}/>
      <p>{artistName}</p>
    </div>
  )
}

export default ArtistCard