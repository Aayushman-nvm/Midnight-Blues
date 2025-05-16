import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../Redux/services/deezerApi";
import ArtistCard from "../components/artistCard.jsx";

function ArtistDetails() {
  const { artistId } = useParams();
  const { data, error, isLoading } = useGetArtistDetailsQuery(artistId);

  if (isLoading) {
    return <div className="text-white text-center mt-10">Loading artist...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Failed to load artist data.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-4">
      <h1 className="text-4xl text-white font-bold mb-8 text-center">Artist Details</h1>
      {data && <ArtistCard key={data.id} data={data} />}
    </div>
  );
}

export default ArtistDetails;
