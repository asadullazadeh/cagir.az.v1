import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fb from "@/icons/social_ntwrk/fb.svg";
import fb1 from "@/icons/social_ntwrk/fb1.svg";
import insta from "@/icons/social_ntwrk/insta.svg";
import insta1 from "@/icons/social_ntwrk/insta1.svg";
import linkedin from "@/icons/social_ntwrk/linkedin.svg";
import linkedin1 from "@/icons/social_ntwrk/linkedin1.svg";

export default function Karusel({ carouselPhotos1 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex justify-between mt-[60px] h-[442px]">
      {/* left part of carousel section */}
      <div className="flex">
        <div className="flex flex-col">
          <div className="h-[330px] w-[477px]">
            <h1 className="w-[477px] h-[148px] h1-styles">
              Peşəkar xidmət, sərfəli qiymət
            </h1>

            <div className="h-[66px] w-[411px] font-poppins font-normal ml-[3px] mt-[30px]">
              <p className="break-words non-italic text-xs leading-[22px] tracking-[0.02em] text-gray900">
                Biz dünyanın hər yerində sizə xidmət göstərməyə hazırıq.
              </p>
              <p className="break-words non-italic text-xs leading-[22px] tracking-[0.02em] text-gray900">
                Sifarişinizi indi yaradın və bizim onlarla xidmətimizdən elə bu{" "}
              </p>
              <p className="break-words non-italic text-xs leading-[22px] tracking-[0.02em] text-gray900">
                dəqiqə faydalanın.
              </p>
            </div>

            <Link href="/profil" className="=">
              <button className="h-[59px] w-[233px] mt-[35px] font-extrabold text-lg leading-[27px] bg-cagiraz text-white focus:outline-none font-bold py-[16px] px-[56px] transition duration-300 rounded-[30px] transform hover:-translate-y-1 shadow-btnShdw">
                Sifarişi yarat
              </button>
            </Link>
          </div>

          <div className="h-[60px] w-[163px] mt-[40px] space-y-[18px]">
            <p className="font-poppins font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
              Biz sosial şəbəkələrdə
            </p>
            {/* Sosial sebekeler insta, fb, linkedin */}
            <div className="flex justify-start space-x-[20px]">

              {/* Insta icon */}
              <div class="relative w-[22px] h-[22px]">
                {/* before hover */}
                <div class="transition-opacity duration-300 hover:opacity-0">
                  <Link href="#"><Image src={insta} alt="insta_icon"/></Link>
                </div>
                {/* after hover */}
                <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Link href="#"><Image src={insta1} alt="insta_icon"/></Link>
                </div>
              </div>


              {/* Facebook icon */}
              <div class="relative w-[23px] h-[23px]" >
                {/* before hover */}
                <div class="transition-opacity duration-300 hover:opacity-0">
                  <Link href="#"><Image src={fb} alt="fb_icon"/></Link>
                </div>
                {/* after hover */}
                <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href="#"><Image src={fb1} alt="fb_icon"/></Link>
                </div>
              </div>


              {/* Linkedin icon */}
              <div class="relative w-[21px] h-[21px]">
                {/* before hover */}
                <div class="transition-opacity duration-300 hover:opacity-0">
                  <Link href="#"><Image src={linkedin} alt="fb_icon"/></Link>
                </div>
                {/* after hover */}
                <div class="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link href=""><Image src={linkedin1} alt="linkedin_icon"/></Link>
                </div>
              </div>

              </div>
          </div>
        </div>
      </div>

      {/* carousel part */}
      <div className="h-[438px] w-[821px] mr-0">
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
