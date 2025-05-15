import { useParams } from "react-router-dom"
import { useGetAlbumDetailsQuery } from "../Redux/services/deezerApi"
import AlbumCard from "../components/AlbumCard.jsx"
function AlbumDetails() {
  const {albumId}=useParams();
  const {data, error, isLoading} = useGetAlbumDetailsQuery(albumId);
  console.log(data);
  console.log(albumId);
  return (
    <div>AlbumDetails
      {data && 
        <AlbumCard key={data.id} data={data} />
      }
    </div>
  )
}

export default AlbumDetails