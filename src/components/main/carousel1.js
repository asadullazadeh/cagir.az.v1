import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import SearchInput from "@/src/components/input/input_search_sm";

export default function Carousel1({ carouselPhotos1, onDataReceived }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const [searchIsClicked, setsearchIsClicked] = useState(false);
  const handleSearchClicked = () => {
    setsearchIsClicked(true);
  };

  // passing data from carousel to the main page

  const handleDataChange = (data) => {
    // const newData = event.target.value;

    onDataFromCarousel(searchIsClicked); // Call the callback function to send data to parent
  };

  useEffect(() => {
    onDataReceived(searchIsClicked);
  }, [onDataReceived, searchIsClicked]);

  return (
    <div className="flex flex-col justify-between lg:gap-x-[25px] xl:gap-x-[45px] 2xl:gap-x-[75px] lg:flex-row">
      {/* first part of carousel section */}
      <div className="flex flex-col justify-between w-full lg:w-1/2">
        <h1 className="flex flex-col my-h1 text-black500">
          <span>Peşəkar xidmət,</span>
          <span>sərfəli qiymət</span>
        </h1>

        <div className="">
          <p className="flex flex-col text-[10px] xl:text-[12px] leading-[18px] xl:leading-[22px] lg:tracking-[0.02em] text-gray900 max-w-[470px]">
            <span>
              Biz dünyanın hər yerində sizə xidmət göstərməyə hazırıq.
              Sifarişinizi indi yaradın və bizim onlarla xidmətimizdən elə bu
              dəqiqə faydalanın.
            </span>
          </p>
        </div>
        {/* search button */}
        <div onClick={handleSearchClicked} className="block lg:hidden">
          <SearchInput />
        </div>

        {/* sifaris button-for desktop */}
        <SifarishBtn classNames="hidden lg:block" />

        <div className="hidden lg:block space-y-[18px]">
          <p className="font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
            Biz sosial şəbəkələrdə
          </p>
          {/* Sosial sebekeler insta, fb, linkedin */}
          <SocialNetworks classNames="flex flex-row space-x-[20px]" />
        </div>
      </div>

      {/* carousel part */}
      <div className="w-full h-full">
        <div
          id="default-carousel"
          className="relative overflow-hidden rounded-lg w-full aspect-[821/438]"
          data-carousel="slide"
        >
          {carouselPhotos1.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full aspect-[821/438] ${
                index === currentSlide
                  ? "slide-enter-active"
                  : "slide-exit-active"
              }`}
              style={{ height: "100%", width: "100%" }}
            >
              <Image
                width={821}
                height={438}
                src={slide.src}
                alt={slide.alt}
                // layout="responsive"
                // objectFit="contain"
                // objectPosition="center"
                className="w-full aspect-[821/438] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
