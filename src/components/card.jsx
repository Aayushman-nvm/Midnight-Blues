import { useNavigate } from "react-router-dom"

function Card({ item }) {
  const navigate = useNavigate();
  function handleRedirect(type) {
    type === "artist" ? navigate(`/artist/${item.artist.id}`) : navigate(`/album/${item.album.id}`)
  }
  return (
    <div>card
      {item?.artist && <div>
        <img src={item?.artist?.picture_xl} alt={`${item.artist.name}'s image`} />
        <p>{item?.title}</p>
        <p>{item?.title_short}</p>
        <p>{item?.title_version}</p>
        <p>{item?.link}</p>
        <p>{item?.duration}</p>
        <p>{item?.artist?.name}</p>
        <p>{item?.artist?.link}</p>
        <p onClick={() => handleRedirect("artist")}>Artist link</p>
      </div>}
      {item?.album && <div>
        <img src={item?.album?.cover_xl} alt={`${item.album.title}'s image`} />
        <p>{item?.album?.title}</p>
        <p>{item?.album?.tracklist}</p>
        <p onClick={() => handleRedirect("album")}>Album link</p>
      </div>}
    </div>
  )
}

export default Card