import React from 'react'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <div>
        <FiSearch />
        <input
          type="search"
          id="search-field"
          name="search"
          placeholder="Search for songs, artists, albums..."
          autoComplete='off'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
      <button type="submit">Search</button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Results</h2>
        {/* Add your search results here */}
      </div>
    </form>
  )
}

export default SearchBar