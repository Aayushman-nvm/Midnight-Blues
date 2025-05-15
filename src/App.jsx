import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import TopPlay from './components/TopPlay';
import MusicPlayer from './components/MusicPlayer/index'
import ArtistDetails from './pages/ArtistDetails'
import TopArtists from './pages/TopArtists'
import AroundYou from './pages/AroundYou'
import Discover from './pages/Discover'
import Search from './pages/Search'
import SongDetails from './pages/SongDetails'
import TopCharts from './pages/TopCharts'

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex bg-[#0f0f1b] text-white min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col bg-[#0d0d1a]">
        <SearchBar />

        <div className="px-4 sm:px-6 md:px-8 h-[calc(100vh-72px)] overflow-y-auto hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/5 to-[#17172f] backdrop-blur-md rounded-t-3xl z-10 border-t border-white/10 shadow-[0_-4px_12px_rgba(0,0,0,0.4)]">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;