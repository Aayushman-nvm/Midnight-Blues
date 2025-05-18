import React from 'react';
import { useSelector } from 'react-redux';

function SongCard({ handlePlaySong, handleStopSong, data, isPlaying }) {
    const { title, artist, album, duration, preview, id } = data;
    const { currentTrack } = useSelector((state) => state.player);
    const isSongPlaying = currentTrack?.id === id && isPlaying;

    return (
        <div className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg hover:shadow-2xl transition-all duration-300">

            {/* Album Art + Info */}
            <div className="flex items-center gap-4 w-full sm:w-auto flex-grow">
                <img
                    src={album.cover_xl}
                    alt={title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shadow-md"
                />
                <div className="flex flex-col">
                    <h2 className="text-white font-semibold text-lg sm:text-xl truncate">{title}</h2>
                    <p className="text-gray-400 text-sm sm:text-base truncate">{artist.name}</p>
                </div>
            </div>

            {/* Duration + Play Button */}
            <div className="flex items-center gap-4 shrink-0">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm shadow-md">
                    {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                </span>
                <button
                    onClick={() =>
                        isSongPlaying ? handleStopSong() : handlePlaySong(data, preview)
                    }
                    className={`px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 shadow-md
            ${isSongPlaying
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                >
                    {isSongPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
}

export default SongCard;
