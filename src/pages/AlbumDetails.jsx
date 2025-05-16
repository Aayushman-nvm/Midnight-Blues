import { useParams } from "react-router-dom";
import { useGetAlbumDetailsQuery } from "../Redux/services/deezerApi";
import AlbumCard from "../components/albumCard.jsx";

function AlbumDetails() {
  const { albumId } = useParams();
  const { data, error, isLoading } = useGetAlbumDetailsQuery(albumId);

  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading album...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Failed to load album data.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-4">
      <h1 className="text-4xl text-white font-bold mb-8 text-center">Album Details</h1>
      {data && <AlbumCard key={data.id} data={data} />}
    </div>
  );
}

export default AlbumDetails;
