import { useParams } from "react-router-dom";
import { useGetAlbumDetailsQuery } from "../Redux/services/deezerApi";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSong, stopSong } from '../Redux/features/playerSlice.js';
import AlbumCard from "../components/albumCard.jsx";
import Lottie from "lottie-react";
import Loader from "../assets/Loader.json";
import SongCard from "../components/songCard.jsx";

function AlbumDetails() {

  const { albumId } = useParams();
  const { data, error, isLoading } = useGetAlbumDetailsQuery(albumId);

  const audioRef = useRef(new Audio());
  const dispatch = useDispatch()
  const { isPlaying } = useSelector((state) => state.player)

  function handlePlaySong(song, preview) {
    if (audioRef.current.src !== preview) {
      audioRef.current.pause(); // Stop previous
      audioRef.current.src = preview; // New track
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play();
    dispatch(playSong(song));

    audioRef.current.onended = () => {
      dispatch(stopSong());
    };
  }

  function handleStopSong() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    dispatch(stopSong());
  }


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
          <p className="text-lg text-gray-400 animate-pulse">Please wait while we load your experience</p>
        </div>
        <Lottie
          animationData={Loader}
          loop={true}
          className="w-40 h-40 md:w-52 md:h-52"
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Failed to load album data.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">Album Details</h1>
        {data && <AlbumCard key={data.id} data={data} />}
        {data && data.tracks && data.tracks.data && data.tracks.data.length > 0 ? (
          <div className="space-y-4">
            {data.tracks.data.map((song) => (
              <SongCard
                key={song.id}
                data={song}
                handlePlaySong={handlePlaySong}
                handleStopSong={handleStopSong}
                isPlaying={isPlaying}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-center mt-4">No songs available for this album.</p>
        )}
      </div>
    </div>
  );
}

export default AlbumDetails;
