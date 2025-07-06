import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../Redux/services/deezerApi";
import ArtistCard from "../components/artistCard.jsx";
import Lottie from "lottie-react";
import Loader from "../assets/Loader.json";

function ArtistDetails() {

  const { artistId } = useParams();
  const { data, error, isLoading } = useGetArtistDetailsQuery(artistId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-bold animate-pulse">Loading...</h1>
          <p className="text-lg text-gray-400 animate-pulse">Please wait while we load your experience</p>
        </div>
        <Lottie
          animationData={Loader}
          loop={true}
          className="w-40 h-40 md:w-52 md:h-52"
        />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Failed to load artist data.</div>;
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-4xl mt-7 text-white/80 font-bold mb-8 text-center font-inter">Artist Details</h1>
      {data && <ArtistCard key={data.id} data={data} />}
    </div>
  );
}

export default ArtistDetails;
