import React, { useRef } from "react";

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  let isHovered = false;

  const handleMouseEnter = () => {
    isHovered = true;
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    isHovered = false;
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset video to beginning
  };

  const handleTimeUpdate = () => {
    if (!isHovered) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to beginning
    }
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        className="w-[200px] h-[400px]"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
