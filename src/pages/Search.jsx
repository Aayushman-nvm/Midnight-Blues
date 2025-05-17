import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSearchQuery } from '../Redux/services/deezerApi'
import Card from '../components/card.jsx'
import SearchBar from '../components/searchBar'
import { playSong, stopSong } from '../Redux/features/playerSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import Lottie from "lottie-react";
import Loader from "../assets/loader.json";

function Search() {
    const { searchParam } = useParams()
    const { data, error, isLoading } = useGetSearchQuery(searchParam)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, []);

    const audioRef = useRef(new Audio());
    const dispatch = useDispatch()
    const { isPlaying } = useSelector((state) => state.player)

    function handlePlaySong(song) {
        audioRef.current.src = song.preview;
        audioRef.current.currentTime = 0;
        audioRef.current.play()
        dispatch(playSong(song))

        audioRef.current.onended = () => {
            dispatch(stopSong(song))
        }
    }
    function handleStopSong(song) {
        audioRef.current.src = null;
        audioRef.current.currentTime = 0;
        audioRef.current.pause()
        dispatch(stopSong(song))
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
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Search Results for: {searchParam}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                        Explore music results based on your search
                    </p>

                    {/* Search Bar Again (Optional) */}
                    <div className="max-w-lg mb-10">
                        <SearchBar />
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {isLoading && (
                            <p className="col-span-full text-center text-gray-400 animate-pulse">
                                Loading results...
                            </p>
                        )}
                        {error && (
                            <p className="col-span-full text-center text-red-400">
                                Error fetching results.
                            </p>
                        )}
                        {data && data.data.length === 0 && (
                            <p className="col-span-full text-center text-gray-400">
                                No results found for "{searchParam}".
                            </p>
                        )}
                        {data && data.data.map((item) => (
                            <Card key={item.id} item={item}
                                isPlaying={isPlaying} handlePlaySong={handlePlaySong} handleStopSong={handleStopSong} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search
