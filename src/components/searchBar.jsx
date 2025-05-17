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

            <div className={`relative z-10 flex items-center bg-gray-800 rounded-full transition-all duration-300 ${isFocused ? 'ring-2 ring-purple-500' : ''}`}>
                <input
                    type="text"
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    onKeyDown={handleKeyPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Search artists, albums, tracks..."
                    className="w-full bg-transparent text-white px-4 py-2 rounded-full focus:outline-none placeholder-gray-400"
                />
                <button
                    type="submit"
                    onClick={handleRedirect}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full mr-1 transition-colors duration-200 flex items-center justify-center"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>

            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30 animate-pulse z-0"></div>
        </div>

    );
}

export default SearchBar