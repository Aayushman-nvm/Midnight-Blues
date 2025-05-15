function AlbumCard({ data }) {
  const contributors = data.contributors || [];

  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.cover_xl} alt={`${data.title} cover art`} />
      <p>By: {data.artist.name}</p>
      <img src={data.artist.picture_xl} alt={`${data.artist.name} profile`} />
      <p>Release Date: {data.release_date}</p>
      <p>Type: {data.record_type}</p>
      <p>Genre: {data.genres?.data?.[0]?.name || 'Unknown'}</p>
      <p>{data.nb_tracks} tracks</p>
      <p>{data.duration} seconds</p>
      <a href={data.link} target="_blank" rel="noreferrer">Listen on Deezer</a>
      <p>{data.fans}</p>
      {console.log("preview link:",data.tracks.data.preview)}

      <h3>Contributors:</h3>
      {contributors.length > 0 ? (
        contributors.map((contributor) => (
          <div key={contributor.id}>
            <img src={contributor.picture_xl} alt={`${contributor.name} profile`} />
            <p>{contributor.name}</p>
            <a href={contributor.link} target="_blank" rel="noreferrer">Profile</a>
            <p>Type: {contributor.type}</p>
            <p>Role: {contributor.role}</p>
          </div>
        ))
      ) : (
        <p>No contributors available.</p>
      )}
    </div>
  );
}

export default AlbumCard;
