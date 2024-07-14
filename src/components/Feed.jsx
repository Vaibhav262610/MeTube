import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { store } from "../store/store";

const Feed = () => {
  const selector = useSelector((store) => store.app.open)
  return (
    <>
      <div className={`${selector ? "w-[85%]" : "w-fit"}`}>
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};

export default Feed;
