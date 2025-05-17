import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:bg-gray-700 mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item?.artist && (
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <img
              src={item?.artist?.picture_xl}
              alt={`${item.artist.name}'s image`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-70'}`}></div>
          </div>

          <div className="p-6 relative z-10 -mt-16">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{item?.title || 'Untitled'}</h3>
                <p className="text-gray-300 mb-1">{item?.title_short}</p>
                {item?.title_version && <p className="text-gray-400 text-sm mb-3">{item?.title_version}</p>}
              </div>

              <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
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
                  className="text-purple-400 hover:text-purple-300 text-sm transition-colors duration-200 flex items-center mt-1"
                >
                  View Artist
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {!isSongPlaying && <button
              onClick={() => { handlePlaySong(item), setPlaying(true) }}
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 relative group overflow-hidden"
            >
              <span className="z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Play Preview
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>}
            {isSongPlaying && <button
              onClick={() => { handleStopSong(item), setPlaying(false) }}
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 relative group overflow-hidden"
            >
              <span className="z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Stop Preview
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
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
            <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">{item?.album?.title || 'Untitled Album'}</h3>

            <button
              onClick={() => handleRedirect("album")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 w-full group relative overflow-hidden"
            >
              <span className="z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                View Album Details
              </span>
              <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Card