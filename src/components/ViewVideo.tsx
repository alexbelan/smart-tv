import React, { useState } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player'
// import './App.css';
// import ForestVideo from "../assets/Forest.mp4";

const ViewVideo: React.FC = () => {

  const [showBanner, setShowBanner] = useState<boolean>(false)

  const progressPlayr = (event: ReactPlayerProps) => {
    if (event.playedSeconds >= 5 && !showBanner) {
      setShowBanner(true)
    }
  }

  return (
    <ReactPlayer 
      url='https://www.youtube.com/watch?v=M7FIvfx5J10'
      loop={true}
      controls={true}
      width={"100%"}
      height={"720px"}
      onProgress={progressPlayr}
     />
    );
}

export default ViewVideo;