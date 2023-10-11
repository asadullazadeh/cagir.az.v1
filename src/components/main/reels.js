import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InstagramEmbed from "@/src/components/others/InstagramEmbed"

import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import reels1 from "@/public/reels/reels_1.png";
// import reels2 from "@/public/reels/reels_2.png";
// import reels3 from "@/public/reels/reels_3.png";
// import reels4 from "@/public/reels/reels_4.png";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

// const insta_logo = ``;

const items = [
  {index:0,
  link:"https://www.instagram.com/reel/Culwp0sAT2v/?utm_source=ig_embed&amp;utm_campaign=loading"},
  {index:1,
    link:"https://www.instagram.com/reel/Culwp0sAT2v/?utm_source=ig_embed&amp;utm_campaign=loading",},
    {index:2,
      link:"https://www.instagram.com/reel/Ct_EbvagcBM/?utm_source=ig_embed&amp;utm_campaign=loading"},
      {index:3,
        link:"https://www.instagram.com/reel/Culwp0sAT2v/?utm_source=ig_embed&amp;utm_campaign=loading"},
        {index:4,
          link:"https://www.instagram.com/reel/Culwp0sAT2v/?utm_source=ig_embed&amp;utm_campaign=loading"},
          {index:5,
            link:"https://www.instagram.com/reel/Culwp0sAT2v/?utm_source=ig_embed&amp;utm_campaign=loading",}
];

// const sliderCount =
//   items.length < 2 ? 0 : items.length >= 2 && items.length <= 4 ? 2 : 3;

//
// function generateInstagramEmbed(embedCode) {
//   // Generate and return the embed HTML structure using the provided URL.
//   return <div className="" dangerouslySetInnerHTML={{ __html: embedCode }} />;
// }
//

function Reels() {
  return (
    <div>
      <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">
        Bizi Instagram-da izlə
      </h2>
      {/* Customized Carousel */}
      {/* <div className="sk-ww-instagram-reels" data-embed-id="204293"></div>
      <Script
        src="https://widgets.sociablekit.com/instagram-reels/widget.js"
        async
        defer
      /> */}
            <AliceCarousel
        animationDuration={1300}
        animationType="fadeout"
        controlsStrategy="responsive"
        infinite
        mouseTracking
        items={items.map(({link,index}) => {
          return(
            <div key={index} className="flex space-x-4 overflow-x" >
              <InstagramEmbed embedLink={link} />
              {/* {link} */}
              </div>
          )
        })}
        responsive={responsive}
        animationEasingFunction="ease"
        disableButtonsControls
        paddingLeft={0}
        paddingRight={0}
        keyboardNavigation
        touchTracking={true}
        touchMoveDefaultEvents={false}
      />
    </div>
  );
}

export default Reels;
