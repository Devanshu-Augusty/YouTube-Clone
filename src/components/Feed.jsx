import React from 'react';
import './feed.css';
import { useState, useEffect } from 'react';
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) // after the /search here all are params check the params in rapidapi.com api code for youtube v3 api
      .then((data) => { setVideos(data.items) }); //cause fetchFromAPI is asyn function and asyn function always return a promise (ig) so .then() is necessary to do.
  }, [selectedCategory]);
  // why data.items? because we are getting the items property of data

  return (
    <div className="feed">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="videos">
        <h2><p style={{ color: 'white', fontSize: '1em', display: 'inline' }}>{selectedCategory}</p> Videos</h2>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default Feed;