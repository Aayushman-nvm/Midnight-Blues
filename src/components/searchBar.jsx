import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

    const [searchParam, setSearchParam] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    function handleRedirect() {
        navigate(`/search/${searchParam}`)
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleRedirect();
        }
    }

    return (

        <div className="relative w-full">

            <div className={`border border-white/30 hover:border-white relative z-10 flex items-center bg-gray-950 hover:bg-gray-900 rounded-full transition-all duration-300 ${isFocused ? 'ring-2 ring-white/50' : ''}`}>
                <input
                    type="text"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search artists, albums, tracks..."
                    className="w-full bg-transparent text-white px-4 my-2 focus:outline-none border-r-2 border-r-white/30 placeholder-gray-400 font-inter"
                />
                <button
                    type="submit"
                    onClick={handleRedirect}
                    className="bg-gray-950 hover:bg-gray-900 hover:text-white text-white/40 p-2 rounded-full mx-1 transition-colors duration-200 flex items-center justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>

        </div>

    );
}

export default SearchBar