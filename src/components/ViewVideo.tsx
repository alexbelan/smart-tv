import React from 'react';
// import './App.css';
import ForestVideo from "../assets/Forest.mp4";

const ViewVideo: React.FC = () => {
  return (
    <video id="background-video" loop autoPlay={true}>
        <source src={ForestVideo} type="video/mp4" />
        {/* <source src={this.state.videoURL} type="video/ogg" /> */}
        {/* Your browser does not support the video tag. */}
    </video>
    );
}

export default ViewVideo;