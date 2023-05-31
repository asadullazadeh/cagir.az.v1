import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SifarishBtn from "./../buttons/sifarish_btn";
import SocialNetworks from "@/src/components/social_ntwrks";

export default function Carousel1({ carouselPhotos1 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="hidden flex flex-col lg:flex-row justify-between pt-[70px] lg:pt-[60px]">
      {/* first part of carousel section */}
      <div className="flex flex-col justify-between w-auto ">
        <h1 className="flex flex-col my-h1 text-black500">
          <span>Peşəkar xidmət,</span>
          <span>sərfəli qiymət</span>
        </h1>

        <div className="">
          <p className="flex flex-col break-words text-[10px] lg:text-[12px] leading-[18px] lg:leading-[22px] lg:tracking-[0.02em] text-gray900">
            <span>
              Biz dünyanın hər yerində sizə xidmət göstərməyə hazırıq.
            </span>
            <span>
              Sifarişinizi indi yaradın və bizim onlarla xidmətimizdən elə bu
            </span>
            <span>dəqiqə faydalanın.</span>
          </p>
        </div>

        {/* sifaris button-for desktop */}
        <SifarishBtn classNames="hidden lg:block" />

        <div className="hidden lg:block mt-[40px] space-y-[18px]">
          <p className="font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
            Biz sosial şəbəkələrdə
          </p>
          {/* Sosial sebekeler insta, fb, linkedin */}
          <SocialNetworks classNames="flex flex-row space-x-[20px]" />
        </div>
      </div>

      {/* carousel part */}
      <div className="border-2 border-black block w-full aspect-[18/10]">
        <div
          id="default-carousel"
          className="relative overflow-hidden rounded-lg w-full h-full"
          data-carousel="slide"
        >
          {carouselPhotos1.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full ${
                index === currentSlide
                  ? "slide-enter-active"
                  : "slide-exit-active"
              }`}
              style={{ height: "100%", width: "100%" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="right"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
