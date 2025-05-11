import React from 'react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../Redux/playerSlice'
import { useGetTopChartsQuery } from '../Redux/shazam'

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div key={song.id}>
    <Link to={`/songs/${song.id}`}>
      {song.attributes.name}
    </Link>
    <img alt="song_image" src={song.attributes?.artwork?.url} />
    <div>
      <PlayPause
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  </div>
)

function TopPlay() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  const topPlays = data?.slice(0, 5);
  function handlePlayClick() {
    dispatch(setActiveSong({ song, i, data }))
    dispatch(playPause(true))
  }

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [divRef]);

  function handlePauseClick() {
    dispatch(playPause(false))
  }
  return (
    <div ref={divRef}>
      <div>
        <div>
          <h2>
            Top Charts
          </h2>
          <Link to="/top-charts">
            <p>See more</p>
          </Link>
        </div>
        <div>
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.id}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2>
            Top Artists
          </h2>
          <Link to="/top-artists">
            <p>See more</p>
          </Link>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          centeredSlides
          centeredSlidesBounds
        >{topPlays?.map((song, i) => (
          <SwiperSlide
            key={song.id}
            style={{ width: '25%', height: 'auto' }}
            className="rounded-full shadow-lg animate-slideup">
            <Link to={`/artists/v2/tracks/details?track_id=${song.id}`}>
              <img src={song?.images?.background} alt="name" />
            </Link>
          </SwiperSlide>
        ))}</Swiper>
      </div>
    </div>
  )
}

export default TopPlay