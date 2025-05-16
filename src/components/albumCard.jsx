function AlbumCard({ data }) {
  const contributors = data.contributors || [];

  return (
    <div className="max-w-4xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-6 mt-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={data.cover_xl}
          alt={`${data.title} cover art`}
          className="w-64 h-64 object-cover rounded-lg border-4 border-blue-600"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-300 mb-1">By: {data.artist.name}</p>
          <img
            src={data.artist.picture_xl}
            alt={`${data.artist.name} profile`}
            className="w-16 h-16 rounded-full mb-2 border-2 border-blue-400"
          />
          <p className="text-gray-400 text-sm mb-1">Released: {data.release_date}</p>
          <p className="text-gray-400 text-sm mb-1">Type: {data.record_type}</p>
          <p className="text-gray-400 text-sm mb-1">
            Genre: {data.genres?.data?.[0]?.name || "Unknown"}
          </p>
          <p className="text-gray-300 mb-1">{data.nb_tracks} tracks</p>
          <p className="text-gray-300 mb-4">
            {Math.floor(data.duration / 60)}:{(data.duration % 60).toString().padStart(2, '0')} minutes
          </p>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Listen on Deezer
          </a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Contributors</h3>
        {contributors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contributors.map((contributor) => (
              <div
                key={contributor.id}
                className="bg-gray-700 p-4 rounded-lg flex items-center gap-4 shadow"
              >
                <img
                  src={contributor.picture_xl}
                  alt={`${contributor.name} profile`}
                  className="w-16 h-16 rounded-full border-2 border-gray-500"
                />
                <div>
                  <p className="font-medium text-white">{contributor.name}</p>
                  <a
                    href={contributor.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    View Profile
                  </a>
                  <p className="text-gray-300 text-sm capitalize">
                    {contributor.type} - {contributor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No contributors available.</p>
        )}
      </div>
    </div>
  );
}

export default AlbumCard;
