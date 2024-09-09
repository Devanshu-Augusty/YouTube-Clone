import './feed.css';
import { useState, useEffect } from 'react';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => { setVideos(data.items) });
  }, [searchTerm]);

  return (
    <div className="feed">
      <div className="videos">
        <h2 className='search-text'>Search Results for<p style={{color: 'white', fontSize: '1em', display: 'inline'}}> {searchTerm}</p></h2>
        <div className="search-videos">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  )
}

export default SearchFeed;