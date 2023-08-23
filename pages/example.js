import React from 'react';
import Image from "next/image"
import VideoPlayer from "@/src/components/VideoHover"
// import video from "@/public/video";
const HomePage = () => {
  const videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/479/original/banana.mp4'; // Update with the actual video path

  return (
    <div>
      <h1>Welcome to My Next.js Video Page</h1>
      <div className="flex flex-row">
      <VideoPlayer videoSrc={videoSrc} />
      <VideoPlayer videoSrc={videoSrc} />
      <VideoPlayer videoSrc={videoSrc} />
      <VideoPlayer videoSrc={videoSrc} />
      <VideoPlayer videoSrc={videoSrc} />
      </div>
      
    </div>
  );
};

export default HomePage;