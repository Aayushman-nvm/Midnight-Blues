import { useParams } from 'react-router-dom'
import { useGetSearchQuery } from '../Redux/services/deezerApi'
import Card from '../components/Card.jsx'
function Search() {
    const { searchParam } = useParams();
    const { data, error, isLoading } = useGetSearchQuery(searchParam);
    console.log(data);
    return (
        <div>Search
            {searchParam}

            {data && data.data.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Search