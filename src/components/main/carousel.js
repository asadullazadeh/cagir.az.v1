import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";


export default function Carousel() {
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
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, carouselPhotos.length]);


  return (
      <div className="w-full h-full">
        <div
          id="default-carousel"
          className="relative overflow-hidden rounded-lg w-full aspect-[821/438] lg:w-[643.88px] lg:h-[343.5px] xl:w-[821px] xl:h-[438px]"
          data-carousel="slide"
        >
          {carouselPhotos.map(({ index, imageUrl, orderIndex }) => (
            <div
              key={orderIndex}
              className={`absolute w-full aspect-[821/438] lg:w-[643.88px] lg:h-[343.5px] xl:w-[821px] xl:h-[438px] ${
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
                className="w-full aspect-[821/438] lg:w-[643.88px] lg:h-[343.5px] xl:w-[821px] xl:h-[438px]"
              />
            </div>
          ))}
        </div>
      </div>
  );
}



  








