import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import FooterBar from './components/footerBar.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import ArtistDetails from './pages/ArtistDetails.jsx';
import AlbumDetails from './pages/AlbumDetails.jsx';
import AboutDev from './pages/AboutDev.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#071334] via-[#05070c] to-black text-white">

      <header className="z-50">
        <NavBar />
      </header>

      <main className="flex-grow px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchParam" element={<Search />} />
          <Route path="/artist/:artistId" element={<ArtistDetails />} />
          <Route path="/album/:albumId" element={<AlbumDetails />} />
          <Route path="/about" element={<AboutDev />} />
        </Routes>
      </main>

      <footer className="z-50">
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
