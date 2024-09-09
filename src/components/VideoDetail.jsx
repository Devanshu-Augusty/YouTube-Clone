import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './videoDetail.css'
import fetchFromAPI from '../utils/fetchFromAPI';
import { CheckCircle } from "@mui/icons-material";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  //   useParams() returns an object with the parameter names as keys and their corresponding values. So, to access the id parameter, you would need to do something like id.id. This can be a bit confusing and less intuitive.
  // By using destructuring, you can directly extract the value of the id parameter from the returned object


  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
  }, [id])

  const date = new Date(videoDetail?.snippet?.publishedAt) // converting the string to a Date object using the Date constructor:

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is 0-indexed, so add 1
  const day = date.getDate();

  console.log(videoDetail)

  return (
    <div className="video-detail">
      <div className="video-detail-box">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          className="react-player"
          height="85%"
          width="100%"
        />
        <div className="video-views">
          <h3 className="video-title">{videoDetail?.snippet?.title}</h3>
          <p>{parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views</p>
        </div>
        <div className="publish-date">
          <Link to={`/channel/${videoDetail?.snippet?.channelId}`} className='channel-link'>
            <div className="channel-title">
              <h4>{videoDetail?.snippet?.channelTitle}</h4>
              <span><CheckCircle sx={{ fontSize: 16 }} /></span>
            </div>
          </Link>
          <p>Published on: {year}-{month}-{day}</p>
        </div>

      </div>
    </div>
  )
}

export default VideoDetail