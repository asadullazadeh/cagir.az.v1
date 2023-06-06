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
        <div class="px-[12px] flex lg:hidden items-center justify-start rounded-[10px] border border-[#959595]
        mt-[15px] mb-[30px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#959595" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input class="w-full rounded border-none text-left text-sm leading-none text-gray-600 outline-none
          focus:outline-none focus:ring-white" type="text" placeholder="Axtar" />
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
      <div className=" w-full h-full">
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
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                className="w-full aspect-[821/438] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
