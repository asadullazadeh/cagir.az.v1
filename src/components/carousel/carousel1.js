import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fb from "@/icons/social_ntwrk/fb.svg";
import fb1 from "@/icons/social_ntwrk/fb1.svg";
import insta from "@/icons/social_ntwrk/insta.svg";
import insta1 from "@/icons/social_ntwrk/insta1.svg";
import linkedin from "@/icons/social_ntwrk/linkedin.svg";
import linkedin1 from "@/icons/social_ntwrk/linkedin1.svg";
import SifarishBtn from "./../buttons/sifarish_btn";

export default function Carousel1({ carouselPhotos1 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex justify-between desktop:pt-[168px] mobile:pt-[70px]">
      {/* first part of carousel section */}
      <div className="flex">
        <div className="flex flex-col">
          <div className="w-full">
            <h1
              className="mobile:mx-[10px] flex flex-col h1-styles 
            mobile:text-[28px] mobile:leading-[38px] mobile:font-semibold"
            >
              <span>Peşəkar xidmət,</span>
              <span>sərfəli qiymət</span>
            </h1>

            <div className="mobile:mx-[10px] font-poppins font-normal ml-[3px] mt-[30px]">
              <p className="desktop:flex desktop:flex-col break-words non-italic text-xs leading-[22px] tracking-[0.02em] text-gray900">
                <span>
                  Biz dünyanın hər yerində sizə xidmət göstərməyə hazırıq.
                </span>
                <span>
                  Sifarişinizi indi yaradın və bizim onlarla xidmətimizdən elə
                  bu
                </span>
                <span>dəqiqə faydalanın.</span>
              </p>
            </div>

            {/* search button */}
            <div class="mt-[15px] mx-[10px] desktop:hidden border border-gray100 border-[1px] rounded-[10px]">
              <div class="relative flex items-center w-full h-[35px] rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Axtar"
                />
              </div>
            </div>

            <br></br>
            {/* carousel for mobile */}
            <div className=" w-full mr-0 px-0 desktop:hidden aspect-[32/17]">
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
            <SifarishBtn className="hidden" />
          </div>

          <div className="mobile:hidden h-[60px] w-[163px] mt-[40px] space-y-[18px]">
            <p className="font-poppins font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
              Biz sosial şəbəkələrdə
            </p>
            {/* Sosial sebekeler insta, fb, linkedin */}
            <div className="flex justify-start space-x-[20px]">
              {/* Insta icon */}
              <div class="relative w-[22px] h-[22px]">
                {/* before hover */}
                <div class="transition-opacity duration-300 hover:opacity-0">
                  <Link href="#">
                    <Image src={insta} alt="insta_icon" />
                  </Link>
                </div>
                {/* after hover */}
                <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href="#">
                    <Image src={insta1} alt="insta_icon" />
                  </Link>
                </div>
              </div>

              {/* Facebook icon */}
              <div class="relative w-[23px] h-[23px]">
                {/* before hover */}
                <div class="transition-opacity duration-300 hover:opacity-0">
                  <Link href="#">
                    <Image src={fb} alt="fb_icon" />
                  </Link>
                </div>
                {/* after hover */}
                <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href="#">
                    <Image src={fb1} alt="fb_icon" />
                  </Link>
                </div>
              </div>

              {/* Linkedin icon */}
              <div class="relative w-[21px] h-[21px]">
                {/* before hover */}
                <div class="transition-opacity duration-300 hover:opacity-0">
                  <Link href="#">
                    <Image src={linkedin} alt="fb_icon" />
                  </Link>
                </div>
                {/* after hover */}
                <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href="">
                    <Image src={linkedin1} alt="linkedin_icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* carousel part desktop */}
      <div className="h-[438px] w-[821px] mr-0 mobile:hidden">
        <div
          id="default-carousel"
          className="relative h-56 overflow-hidden rounded-lg w-full h-full"
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
