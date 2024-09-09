import React from 'react'
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

const ChannelCard = ({ channel }) => {

  return (
      <div className="channel-card">
        <img src={channel?.snippet?.thumbnails?.high?.url} alt={channel?.snippet?.title} />
        <div className="channel-title-tick">
          <h3>{channel?.snippet?.title}</h3>
          <span><CheckCircle sx={{ fontSize: 16 }} /></span>
        </div>
        {channel?.statistics?.subscriberCount &&
          <span>subscribers: {parseInt(channel.statistics.subscriberCount).toLocaleString()}</span>
        }
      </div>
  )
}

export default ChannelCard;