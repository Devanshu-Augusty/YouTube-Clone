import { VideoCard, ChannelCard } from './';
import './videos.css';
import { Link } from 'react-router-dom';

const Videos = ({ videos }) => {
  console.log(videos);
  // console.log(videos[0].id.videoId);
  return (
    <div className="videos-content">
      {videos.map((item, ind) => (
        <div className="feed-videos" key={ind}>
          {item?.id?.videoId && <VideoCard video={item} />}
          <Link className='channel-link' to={`/channel/${item?.id?.channelId}`}>
            {item?.id?.channelId && <ChannelCard channel={item} />}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Videos;