import SearchBar from "../components/searchBar";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Loader from "../assets/Loader.json";
import { IoSearch } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const featured = [
        {
            id: 4050205,
            name: "The Weeknd",
            image: "https://cdn-images.dzcdn.net/images/artist/581693b4724a7fcfa754455101e13a44/1000x1000-000000-80-0-0.jpg",
            genre: "R&B",
            link: `/artist/4050205`,
        },
        {
            id: 5868765,
            name: "Chase Atlantic",
            image: "https://cdn-images.dzcdn.net/images/artist/1bcec073ae065a16c79c32eaab5293e8/1000x1000-000000-80-0-0.jpg",
            genre: "Alternative/Indie",
            link: `/artist/5868765`,
        },
        {
            id: 1518490,
            name: "A$AP Rocky",
            image: "https://cdn-images.dzcdn.net/images/artist/5eebb137c5f4d0eb8fb5f9227e1b6288/1000x1000-000000-80-0-0.jpg",
            genre: "Hip-Hop/Rap",
            link: `/artist/1518490`,
        },
        {
            id: 12416876,
            name: "Seedhe Maut",
            image: "https://cdn-images.dzcdn.net/images/artist/c2fa998d7faada1fd7727c4f8cf8e8ff/1000x1000-000000-80-0-0.jpg",
            genre: "Desi Hip-Hop",
            link: `/artist/12416876`,
        },
    ]

    const analytics = [
        {
            title: "Tracks",
            value: "10M+"
        },
        {
            title: "Artists",
            value: "1M+"
        }, {
            title: "Albums",
            value: "10M+"
        }, {
            title: "Genres",
            value: "100+"
        },
    ]

    const guides = [
        {
            title: "Search",
            icon: <IoSearch className="w-8 h-8" />,
            description: "Find your favorite artists, albums, or discover new music."
        },
        {
            title: "Listen",
            icon: <FaRegCirclePlay className="w-8 h-8" />,
            description: "Preview 30-second snippets of any track."
        },
        {
            title: "Enjoy",
            icon: <FaRegHeart className="w-8 h-8" />,
            description: "Discover new music you'll love with full track info."
        },
    ]

    function handleRedirect(link) {
        navigate(link);
    }

    if (!isLoaded) {
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

    return (
        <div className="min-h-screen text-white">

            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="font-playfair text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-t from-white/10 via-white/70 to-white bg-clip-text text-transparent">
                        Midnight
                    </h1>
                    <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-t from-white/10 via-white/70 to-white bg-clip-text text-transparent">
                        Blues
                    </h2>
                    <p className="font-inter text-xl md:text-2xl text-gray-500 mb-8">
                        Discover your next favorite track with 30-second music snippets
                    </p>

                    <div className="max-w-lg mb-12">
                        <SearchBar />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                        {analytics.map((item, index) => {
                            return (
                                <div key={index} className="relative group text-center p-4 bg-transparent border border-white/20 rounded-lg shadow-lg backdrop-blur-md transition-all duration-1000 delay-100 transform overflow-hidden text-white/50 hover:text-white/80">

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />

                                    <span className="block text-3xl font-bold mb-1 font-inter">{item.value}</span>
                                    <span className="font-inter">{item.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={`mb-12 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 flex items-center text-white/70 font-inter">
                        <svg className="w-8 h-8 mr-2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z"></path>
                        </svg>
                        Featured Artists
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {featured.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-lg transition-all duration-1000 delay-${100 * (index + 5)} transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            >
                                <div className="aspect-w-1 aspect-h-1 w-full bg-gray-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                    <div className="w-full h-48 bg-gradient-to-br animate-pulse">
                                        <img src={item.image} alt={`${item.name}'s profile picture`} className="w-full h-full object-cover object-center" />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-white/80 font-inter">{item.name}</h3>
                                    <p className="text-sm text-gray-400 font-inter">{item.genre}</p>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                    <button onClick={() => handleRedirect(item.link)} className="px-4 py-2 bg-gray-900 text-white/60 rounded-full hover:bg-gray-800 border border-gray-700 font-inter transform scale-0 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center gap-2">
                                        View Artist
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`transition-all duration-1000 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 flex items-center text-white/70 font-inter">
                        <svg className="w-8 h-8 mr-2 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {guides.map((guide, index) => {
                            return (
                                <div key={index} className="relative group bg-white/5 bg-opacity-50 p-6 rounded-lg text-center">

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />

                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-black flex items-center justify-center">
                                        {guide.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 font-inter">{guide.title}</h3>
                                    <p className="text-gray-400 font-inter">{guide.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home