function ArtistCard({ data }) {

  return (

    <div className="max-w-3xl mx-auto bg-black/40 text-white rounded-lg shadow-lg p-6 mt-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={data.picture_xl}
          alt={data.name}
          className="w-48 h-48 object-cover rounded-full border-4 border-white/20"
        />
        <div className="text-center md:text-left">
          <h2 className="font-inter text-white/80 text-3xl font-bold mb-2">{data.name}</h2>
          <p className="font-inter text-white/60 mb-1">{data.nb_fan.toLocaleString()} fans</p>
          <p className="font-inter text-white/60 mb-1">{data.nb_album} albums</p>
          <p className="font-inter text-white/40 text-sm mb-4 capitalize">{data.type}</p>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="font-inter inline-block mt-2 bg-white/10 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition"
          >
            Listen on Deezer
          </a>
        </div>
      </div>
    </div>

  );
}

export default ArtistCard;
