import React from 'react';
import ReactPlayer from "react-player";
import './Video.css'
 
function Video() {
  return (
    <div className="App">
      <h3><a href="https://www.youtube.com/c/griffinjoshs"></a></h3>
      <ReactPlayer id='video'
        url="https://www.youtube.com/watch?v=8VcVeW9hAZ8&ab_channel=GriffinJoshs"
      />
    </div>
  );
}
 
export default Video;