import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import './App.css';
import React from 'react';

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="box">
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Feed />} /> {/* using exact means that this navbar will stay for every page */}
      <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App;
