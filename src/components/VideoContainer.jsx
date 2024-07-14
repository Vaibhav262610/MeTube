import axios from "axios";
import React, { useEffect, useState } from "react";
import { YT_VIDEO } from "../constants/youtube";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  const fetchYoutubeVideos = async () => {
    const res = await axios.get(YT_VIDEO);
    console.log(res?.data?.items);
    setVideo(res?.data?.items);
  };

  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  return (
    <>
      <div className=" w-full">
        <div className="sm:p-12 p-0 flex-wrap gap-5 flex justify-center w-full items-center">
          {video.map((items) => {
            return <VideoCard items={items} />;
          })}
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
