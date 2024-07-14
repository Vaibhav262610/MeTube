import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import Footer from "./Footer";

const Feed = () => {
  const selector = useSelector((store) => store.app.open);
  return (
    <>
      <div className={` width-main ${selector ? "w-[85%]" : "w-fit"}`}>
        <ButtonList />
        <VideoContainer />
        <Footer />
      </div>
    </>
  );
};

export default Feed;
