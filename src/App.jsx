import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/navBar.jsx'
import FooterBar from './components/footerBar.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx';
import ArtistDetails from './pages/ArtistDetails.jsx';
import AlbumDetails from './pages/AlbumDetails.jsx';

function App() {

  return (

    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchParam" element={<Search />} />
        <Route path="/artist/:artistId" element={<ArtistDetails />} />
        <Route path="/album/:albumId" element={<AlbumDetails />} />
      </Routes>

      <FooterBar />
    </div>

  );
};

export default App;