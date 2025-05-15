import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
    const [searchParam, setSearchParam] = useState('')
    const navigate=useNavigate();
    function handleRedirect() {
        navigate(`/search/${searchParam}`)
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setSearchParam(e.target.value)} placeholder="Search for artists, albums, or tracks..." />
            <button type="submit" onClick={handleRedirect}>Search</button>
        </div>
    )
}

export default SearchBar