import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import SearchInput from "@/src/components/input/input_search_sm";

export default function Carousel1({ onDataReceived, messages }) {
  const [carouselPhotos, setcarouselPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/adminDictionary/getAll?dictionaryType=6`, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setcarouselPhotos(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      // setCurrentSlide((currentSlide + 1) % 3);
      setCurrentSlide((currentSlide + 1) % carouselPhotos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide, carouselPhotos.length]);

  const [searchIsClicked, setsearchIsClicked] = useState(false);
  const handleSearchClicked = () => {
    setsearchIsClicked(true);
  };

  // passing data from carousel to the main page

  const handleDataChange = (data) => {
    onDataFromCarousel(searchIsClicked); // Call the callback function to send data to parent
  };

  useEffect(() => {
    onDataReceived(searchIsClicked);
  }, [onDataReceived, searchIsClicked]);

  return (
    <div className="flex flex-col justify-between lg:gap-x-[25px] xl:gap-x-[45px] 2xl:gap-x-[75px] lg:flex-row">
      {/* first part of carousel section */}
      <div className="flex flex-col justify-between w-full lg:w-3/5">
        <div>
          <h1 className="flex flex-col my-h1 text-black500 xs:w-[250px] sm:w-1/2 lg:w-full">
            {messages["slider-part-2"]}
          </h1>
          <p className="flex flex-col text-[10px] lg:text-[12px] leading-[18px] lg:leading-[22px] lg:tracking-[0.02em] text-gray900 w-full  screen428:w-[300px] lg:w-[300px] xl:w-[380px] 2xl:w-[411px] lg:pt-[20px] 2xl:pt-[30px]">
            {messages["hero-text"]}
          </p>
        </div>

        {/* search button */}
        <div onClick={handleSearchClicked} className="block lg:hidden">
          <SearchInput {...{ messages }} />
        </div>

        {/* sifaris button-for desktop */}
        <SifarishBtn
          {...{ messages }}
          classNames="hidden lg:block pt-[10px] xl:pt-0"
        />

        <div className="hidden lg:block space-y-[10px]">
          <p className="font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
            {messages["follow-us"]}
            {/* Biz sosial şəbəkələrdə */}
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
          {carouselPhotos.map(({ index, imageUrl, orderIndex }) => (
            <div
              key={orderIndex}
              className={`absolute w-full aspect-[821/438] ${
                orderIndex === currentSlide
                  ? "slide-enter-active"
                  : "slide-exit-active"
              }`}
              // className="slide-enter-active"
              style={{ height: "100%", width: "100%" }}
            >
              <Image
                width={821}
                height={438}
                src={`https://api.cagir.az${imageUrl}`}
                alt={imageUrl}
                className="w-full aspect-[821/438]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
