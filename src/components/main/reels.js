import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import InstagramEmbed from "@/src/components/others/InstagramEmbed";

import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "@/src/components/youtubeEmbed";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};

const items = [
  { index: 0, link: "JbIG0LqAdOU?si=ByXyfL6Ba5IMCZD1" },
  { index: 1, link: "aDvHX3No9ec?si=Gi3D-pSQ0NEDo4l7" },
  { index: 2, link: "reOplRv2QW4?si=Pu1-24khQQn_mETa" },
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
      <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">Əl işlərimiz</h2>
      {/* Customized Carousel */}
      {/* {items.map(({ link, index }) => {
        return (
          <div key={index} className="flex items-center justify-center">
            <YoutubeEmbed embedId={link} />
          </div>
        );
      })} */}

      <AliceCarousel
        animationDuration={1300}
        animationType="fadeout"
        controlsStrategy="responsive"
        infinite
        mouseTracking
        items={items.map(({link,index}) => {
          return(
            <div key={index} className="flex items-center justufy-center space-x-4 overflow-x" >
              <YoutubeEmbed embedId={link} />
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
