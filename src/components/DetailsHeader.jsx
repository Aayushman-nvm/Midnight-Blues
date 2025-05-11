import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function DetailsHeader({ artistId, songData, songDetails }) {
  const artistData = useSelector((state) => state.artistData)
  const artist = artistData?.artists[artistId].attributes
  return (
    <div>
      <div>
        <img src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart} alt="cover art" className="w-full h-56 rounded-lg" />
      </div>
      <div>
        <p>{artistId ? artist?.name : songData?.title}</p>
        <Link to={artistId ? `/artists/${artistId}` : `/songs/${songData?.key}`}>
          <p>{artistId ? artist?.genreNames[0] : songData?.subtitle}</p>
        </Link>
      </div>
    </div>
  )
}

export default DetailsHeader