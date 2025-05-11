import React from 'react'
import { useNavigate } from 'react-router-dom'
function ArtistCard({track, i}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/artists/${track?.artists[0]?.adamid}`)}>
      <img alt='Artist' src={track?.images?.coverart}/>
      <p>{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard