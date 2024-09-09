import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import './channelDetail.css';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])
  console.log(channelDetail, videos);

  return (
    <div className="channel-detail-box">
      <div className="channel-cover"></div>
      <div className="channel-img">
        <ChannelCard channel={channelDetail} />
      </div>
      <div className="channel-videos">
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetail;