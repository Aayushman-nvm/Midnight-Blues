import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Loader from "../assets/loader.json";

function AboutDev() {
    const [loading, setLoading] = useState(false);
    const [gitData, setGitData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${import.meta.env.VITE_GIT_HUB}`);
                const data = await res.json();
                setGitData(data);
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) {
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

    if (!gitData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
                <p className="text-lg">Failed to load GitHub data.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4 py-12">
            <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-6">

                {/* Animated banner */}
                <div className="relative w-full flex justify-center">
                    <div className="w-full h-36 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse" />

                    {/* Profile image overlapping banner */}
                    <img
                        src={gitData.avatar_url}
                        alt={`${gitData.name}'s profile`}
                        className="w-24 sm:w-28 md:w-32 h-auto rounded-full border-4 border-white shadow-xl absolute top-1/2 transform -translate-y-1/2"
                    />
                </div>

                {/* Info section */}
                <div className="pt-8 text-center space-y-2">
                    <h1 className="text-3xl font-bold">{gitData.name}</h1>
                    <p className="text-gray-400">@{gitData.login}</p>
                    <a
                        href={gitData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline hover:text-blue-300 transition border-2 border-blue-400 rounded-lg px-4 py-2 mt-2 inline-block"
                    >
                        View GitHub Profile
                    </a>
                    <p className="text-sm text-gray-300 mt-2">{gitData.bio}</p>
                </div>

                {/* About description */}
                <div className="bg-gray-700 rounded-lg p-4 w-full text-sm text-gray-200 leading-relaxed">
                    <p>
                        Hey there! Aayushman here, a passionate developer with a knack for
                        creating engaging web applications. This project is a testament to
                        my love for music and coding. I hope you find it as enjoyable to use
                        as I did to build it!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutDev;
