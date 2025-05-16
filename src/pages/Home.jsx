import SearchBar from "../components/searchBar";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const featured=[
        {
            id:4050205,
            name:"The Weeknd",
            image:"https://cdn-images.dzcdn.net/images/artist/581693b4724a7fcfa754455101e13a44/1000x1000-000000-80-0-0.jpg",
            genre:"R&B",
            link:`/artist/4050205`,
        },
        {
            id:5868765,
            name:"Chase Atlantic",
            image:"https://cdn-images.dzcdn.net/images/artist/1bcec073ae065a16c79c32eaab5293e8/1000x1000-000000-80-0-0.jpg",
            genre:"Alternative/Indie",
            link:`/artist/5868765`,
        },
        {
            id:1518490,
            name:"A$AP Rocky",
            image:"https://cdn-images.dzcdn.net/images/artist/5eebb137c5f4d0eb8fb5f9227e1b6288/1000x1000-000000-80-0-0.jpg",
            genre:"Hip-Hop/Rap",
            link:`/artist/1518490`,
        },
        {
            id:12416876,
            name:"Seedhe Maut",
            image:"https://cdn-images.dzcdn.net/images/artist/c2fa998d7faada1fd7727c4f8cf8e8ff/1000x1000-000000-80-0-0.jpg",
            genre:"Desi Hip-Hop",
            link:`/artist/12416876`,
        },
    ]

    function handleRedirect(link){
        navigate(link);
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Midnight Blues
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Discover your next favorite track with 30-second music snippets
                    </p>
                    
                    {/* Search Bar */}
                    <div className="max-w-lg mb-12">
                        <SearchBar />
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
                        <div className={`text-center p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-1000 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block text-3xl font-bold text-purple-400 mb-1">10M+</span>
                            <span className="text-gray-400">Tracks</span>
                        </div>
                        <div className={`text-center p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-1000 delay-200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block text-3xl font-bold text-blue-400 mb-1">1M+</span>
                            <span className="text-gray-400">Artists</span>
                        </div>
                        <div className={`text-center p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block text-3xl font-bold text-indigo-400 mb-1">5M+</span>
                            <span className="text-gray-400">Albums</span>
                        </div>
                        <div className={`text-center p-4 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-1000 delay-400 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <span className="block text-3xl font-bold text-pink-400 mb-1">100+</span>
                            <span className="text-gray-400">Genres</span>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Featured Section with animation */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className={`mb-12 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                        <svg className="w-8 h-8 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z"></path>
                        </svg>
                        Featured Artists
                    </h2>
                    
                    {/* Featured Artists Grid */}
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
                                    <h3 className="text-lg font-medium">{item.name}</h3>
                                    <p className="text-sm text-gray-400">{item.genre}</p>
                                </div>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                    <button onClick={()=>handleRedirect(item.link)} className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                                        View Artist
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* How It Works */}
                <div className={`transition-all duration-1000 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                        <svg className="w-8 h-8 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        How It Works
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Search</h3>
                            <p className="text-gray-400">Find your favorite artists, albums, or discover new music.</p>
                        </div>
                        
                        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Listen</h3>
                            <p className="text-gray-400">Preview 30-second snippets of any track.</p>
                        </div>
                        
                        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-600 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Enjoy</h3>
                            <p className="text-gray-400">Discover new music you'll love with full track info.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Animated background circles */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            
            {/* Custom animation keyframes would be defined in your CSS */}
        </div>
    )
}

export default Home