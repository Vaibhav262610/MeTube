import axios from "axios";
import React, { useEffect, useState } from "react";
import { APII_KEY } from "../constants/youtube";

const VideoCard = ({ items }) => {
  const [ytIcon, setYtIIcon] = useState("");
  const getYtIcons = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${items.snippet.channelId}&key=${APII_KEY}`
    );
    setYtIIcon(res.data.items[0].snippet.thumbnails.high.url);
    console.log(res);
  };

  useEffect(() => {
    getYtIcons();
  }, []);

  return (
    <>
      <div className="">
        <img
          src={items.snippet.thumbnails.medium.url}
          alt="404 IMAGE NOT FOUND"
          // height={350}
          className="thumbnail-main h-[100%] sm:w-[100%] w-[600px] sm:h-[100%] cursor-pointer video-ani duration-200 transition-all ease-in-out rounded-none md:rounded-lg"
          // width={350}
        />
        <div className="flex gap-4 cursor-pointer mt-3">
          <div>
            <img
              src={ytIcon}
              alt="404 not found"
              height={40}
              width={40}
              className="rounded-full"
            />
          </div>
          <div className="text-sm h-20">
            <h1 className="w-72  text-white">
              {items.snippet.title.slice(0, 70)}...
            </h1>
            <h2 className="text-gray-400 text-sm">
              {items.snippet.channelTitle}
            </h2>
            <div className="text-gray-400 flex gap-5 text-sm">
              <h2>48M views</h2>
              <h2>3 years ago</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
