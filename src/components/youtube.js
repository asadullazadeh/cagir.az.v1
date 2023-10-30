import React, { useEffect } from "react";
import YouTube from "react-youtube";

const YoutubeComponent = ({ videoId }) => {
  const opts = {
    height: "195",
    width: "320",
    // playerVars: {
    //   autoplay: 1,
    // },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;
};

export default YoutubeComponent;
