import { useParams } from "react-router-dom";
import { useGetArtistDetailsQuery } from "../Redux/services/deezerApi";
import ArtistCard from "../components/ArtistCard.jsx";
function ArtistDetails() {
  const {artistId}=useParams();
  const {data, error, isLoading} = useGetArtistDetailsQuery(artistId);
  console.log(data);
  console.log(artistId);
  return (
    <div>ArtistDetails
      {data && 
        <ArtistCard key={data.id} data={data} />
      }
    </div>
  )
}

export default ArtistDetails