import React from 'react'
import { Link } from 'react-router-dom';
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  // console.log(video?.id?.videoId);
  return (
    <>
        <Link className='video-link' to={`/video/${video?.id?.videoId}`}>

          <div className="video-box">
            <img src={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} />
            <div className="video-desc">
              <h3>{video?.snippet?.title}</h3>
              <div className="video-channel-title">
                <p>{video?.snippet?.channelTitle}</p>
                <span><CheckCircle sx={{fontSize: 16}} /></span>
              </div>
            </div>
          </div>


        </Link>
    </>
  )
}

export default VideoCard;

