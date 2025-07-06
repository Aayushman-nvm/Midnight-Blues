import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LuCirclePlay } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";

function Card({ item, handlePlaySong, handleStopSong, isPlaying }) {

  const { currentTrack } = useSelector((state) => state.player);
  const isSongPlaying = currentTrack?.id === item.id && isPlaying;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function handleRedirect(type) {
    type === "artist" ? navigate(`/artist/${item.artist.id}`) : navigate(`/album/${item.album.id}`)
  }

  return (

    <div
      className="bg-black/40 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:bg-gradient-to-b from-[#021241] via-[#05070c] to-black/80 mb-6 p-2 border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item?.artist && (
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <img
              src={item?.artist?.picture_xl}
              alt={`${item.artist.name}'s image`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform rounded"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-70'}`}></div>
          </div>

          <div className="p-6 relative z-10 -mt-16">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 font-inter">{item?.title || 'Untitled'}</h3>
                <p className="text-gray-300 mb-1 font-inter">{item?.title_short}</p>
                {item?.title_version && <p className="text-gray-400 text-sm mb-3 font-inter">{item?.title_version}</p>}
              </div>

              <div className="bg-[#071334]/20 border border-white/30 text-white text-sm px-3 py-1 rounded-full font-inter">
                {Math.floor(item?.duration / 60)}:{(item?.duration % 60).toString().padStart(2, '0')}
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <div
                className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-700"
                style={{ backgroundImage: `url(${item?.artist?.picture_xl})`, backgroundSize: 'cover' }}
              ></div>
              <div>
                <p className="text-white font-medium">{item?.artist?.name}</p>
                <button
                  onClick={() => handleRedirect("artist")}
                  className="font-inter text-white/50 hover:text-white/80 text-sm transition-colors duration-200 flex items-center mt-1"
                >
                  View Artist
                  <FaChevronRight className="w-3 h-3 ml-1 mt-1" />
                </button>
              </div>
            </div>

            {!isSongPlaying && <button
              onClick={() => { handlePlaySong(item) }}
              className="font-inter mt-6 w-full bg-white/20 text-white/80 py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 relative group overflow-hidden"
            >
              <span className="z-10 flex items-center">
                <LuCirclePlay className="w-5 h-5 mr-2" />
                Play Preview
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-l from-[#071334] to-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>}
            {isSongPlaying && <button
              onClick={() => { handleStopSong(item) }}
              className="font-inter mt-6 w-full bg-red-500/80 text-white/80 py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 relative group overflow-hidden"
            >
              <span className="z-10 flex items-center">
                <LuCirclePlay className="w-5 h-5 mr-2" />
                Stop Preview
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/80 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>}
          </div>
        </div>
      )}

      {item?.album && (
        <div>
          <div className="relative h-64 overflow-hidden">
            <img
              src={item?.album?.cover_xl}
              alt={`${item.album.title}'s image`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-70'}`}></div>
          </div>

          <div className="p-6 relative z-10 -mt-16">
            <h3 className="font-inter text-2xl font-bold text-white mb-4 line-clamp-2">{item?.album?.title || 'Untitled Album'}</h3>

            <button
              onClick={() => handleRedirect("album")}
              className="font-inter bg-white/10 text-white/80 py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 w-full group relative overflow-hidden"
            >
              <span className="z-10 flex items-center">
                <FaRegMap className="w-5 h-5 mr-2" />
                View Album Details
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-white/5 to-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>
          </div>
        </div>
      )}
    </div>

  )
}

export default Card