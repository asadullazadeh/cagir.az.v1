import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import reels1 from "@/public/reels/reels_1.png";
import reels2 from "@/public/reels/reels_2.png";
import reels3 from "@/public/reels/reels_3.png";
import reels4 from "@/public/reels/reels_4.png";

const responsive = {
  0: { items: 3 },
  568: { items: 4 },
  1024: { items: 5 },
};

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Image
    key="1"
    src={reels1}
    alt="reels1"
    className="pr-[10px] lg:pr-[15px] "
  />,
  <Image
    key="2"
    src={reels2}
    alt="reels2"
    className="pr-[10px] lg:pr-[15px] "
  />,
  <Image
    key="3"
    src={reels3}
    alt="reels3"
    className="pr-[10px] lg:pr-[15px] "
  />,
  <Image
    key="4"
    src={reels4}
    alt="reels4"
    className="pr-[10px] lg:pr-[15px] "
  />,
  <Image
    key="5"
    src={reels1}
    alt="reels5"
    className="pr-[10px] lg:pr-[15px] "
  />,
  <Image
    key="6"
    src={reels2}
    alt="reels6"
    className="pr-[10px] lg:pr-[15px] "
  />,
  <Image
    key="7"
    src={reels4}
    alt="reels7"
    className="pr-[10px] lg:pr-[15px] "
  />,
];

const sliderCount = items.length < 2 ? 0 : (items.length >= 2 && items.length <= 4 ? 2 : 3);


const Reels = () => {
  return (
    <div>
      <h2 className="my-h2 pb-[15px] lg:pb-[30px] text-center">
        Bizi Instagram-da izlə
      </h2>
      <div className="grid place-items-end">
        <Image
          className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]"
          src={arrow}
          alt="arrow_icon"
        />
      </div>
      {/* Customized Carousel */}
      <AliceCarousel
        // activeIndex = {1}
        animationDuration={1300}
        animationType="fadeout"
        // autoHeight={true}
        //autoWidth={true}
        // autoPlayControls
        autoPlayInterval={1300}
        autoPlay
        autoPlayStrategy="action"
        controlsStrategy="alternate"
        infinite
        mouseTracking
        items={items.map((item, index) => (
          <span key={index} className="pr-[10px]">
            {item}
          </span>
        ))}
        responsive={responsive}
        // disableSlideInfo={false}
        disableDotsControls
        animationEasingFunction="ease"
        disableButtonsControls
        paddingLeft={0}
        paddingRight={0}
        keyboardNavigation
        touchTracking={true}
        touchMoveDefaultEvents={false}
      />
      <div className="flex flex-row gap-x-[20px] justify-center text-[50px]">
        
      {Array.from({ length: sliderCount }, (_, index) => (
        <React.Fragment key={index}>
          .
          <span className="ml-2" /> {/* Add a margin-left of 2px */}
        </React.Fragment>
      ))}
    </div>
    </div>
  );
};

export default Reels;
