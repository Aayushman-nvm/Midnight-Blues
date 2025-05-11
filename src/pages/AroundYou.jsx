import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Error from '../components/Error'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import {useGetSongsByCountryQuery} from '../Redux/shazam'
function AroundYou() {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_tYlWLoSh1ye9lLuEMuIqx8eOB55rB')
      .then((response) => {
        setCountry(response?.data?.location?.country?.code);
        return axios.get(`https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=${response?.data?.location?.country?.code}`, {
          headers: {
            'X-RapidAPI-Key': '0f81f11d05msh60ae6ec37968b38p1487a0jsn5dcb0b3c6987',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
          }
        });
      })
      .then((response) => {
        setSongs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  if (loading && isFetching) return <Loader title="Loading songs around you..." />;
  if (error && country) return <Error />;
  return (
    <div>
      <h2>Around You</h2>
      <span>{country}</span>
      <div>
        {data?.map((song, i) => (
          <SongCard
            key={song.id}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default AroundYou