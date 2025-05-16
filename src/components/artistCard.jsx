function ArtistCard({ data }) {
  return (
    <div className="max-w-3xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-6 mt-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={data.picture_xl}
          alt={data.name}
          className="w-48 h-48 object-cover rounded-full border-4 border-purple-600"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">{data.name}</h2>
          <p className="text-gray-300 mb-1">{data.nb_fan.toLocaleString()} fans</p>
          <p className="text-gray-300 mb-1">{data.nb_album} albums</p>
          <p className="text-gray-400 text-sm mb-4 capitalize">{data.type}</p>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
          >
            Listen on Deezer
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
