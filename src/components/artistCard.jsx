function ArtistCard({data}) {
  return (
    <div>artistCard
      <img src={data.picture_xl} alt={data.name} />
      <h2>{data.name}</h2>
      <p>{data.nb_fan} fans</p>
      <p>{data.nb_album} albums</p>
      <p>{data.type}</p>
      <a href={data.link}>Link to Deezer</a>
    </div>
  )
}

export default ArtistCard