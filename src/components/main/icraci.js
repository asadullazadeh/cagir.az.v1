import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 2 },
  420: { items: 2 },
  580: { items: 3 },
  1300: { items: 4 },
};

function Icraci({ parentId }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.cagir.az/api/executer/getAll?serviceId=${parentId}`
        );
        const resultArrays = response.data.result; // Assuming the response structure has a "data" object containing a "result" object with arrays
        const formattedData = resultArrays.map((result) => ({
          name: result.name,
          title: result.title,
          image: result.imageUrl,
          description: result.description,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [parentId]);

  if (data.length === 0) {
    return null; // Don't render anything if the data array is empty
  }
  // const sliderCount =
  //   data.length < 2 ? 0 : data.length >= 2 && data.length <= 4 ? 2 : 3;
  // console.log(sliderCount);
  const childDataArray = Object.values(data).map((child) => ({
    jsxElement: (
      <div
        key={child.name[0]}
        className="flex flex-row items-center justify-center py-[10px]"
      >
        <div
          className="w-[145px] screen360:w-[160px] screen375:w-[175px] screen412:w-[185px] sm:w-[195px] lg:w-[302px] h-full 
              rounded-[10px] lg:rounded-[20px] flex flex-col
              bg-white
              drop-shadow-cardAlt"
        >
          <div className="p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
            {/* photo, name */}
            <div className="flex gap-x-[10px] lg:gap-x-[15px] items-center">
              <Image
                width={200}
                height={200}
                src={`https://api.cagir.az/${child.image}`}
                alt="Profile picture"
                className="rounded-full w-[65px] lg:w-[112px] h-[65px] lg:h-[112px] object-cover object-center border-2 border-cagiraz border-opacity-20"
              />
              <div className="flex flex-col">
                <h6
                  className="
                        font-semibold lg:font-bold text-[8px] lg:text-[12px] leading-[12px] 
                        lg:leading-[18px] text-black500"
                >
                  {child.name}
                </h6>

                <p
                  className="lg:font-semibold italic text-[12px] lg:text-[14px] leading-[18px]
                    lg:leading-[21px] text-[#959595]"
                >
                  {child.title}
                </p>
              </div>
            </div>

            {/* icraci */}
            <div className="w-full h-full">
              <p
                className=" italic font-semibold lg:font-bold text-[10px] sm:text-[12px] lg:text-[14px] leading-[18px]
                  sm:leading-[19px] lg:leading-[21px] text-black100"
              >
                {child.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div>
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">İcraçı profilləri</h2>
      <div
        className={`grid place-items-end ${data.length > 2 ? "" : "hidden"}`}
      >
        <Image
          className="w-[22px] lg:w-[28px] h-[14px] lg:h-[24px]"
          src={arrow}
          alt="arrow_icon"
        />
      </div>
      {/* Customized Carousel */}
      {/* justify-center gap-x-[10px] screen375:gap-x-[15px] screen412:gap-x-[25px] sm:gap-x-[40px] */}
      <div className="flex flex-row justify-between sm:justify-center sm:gap-x-[40px]">
        {data.length < 3 ? (
          childDataArray.map((child, index) => (
            <div key={index} className="w-1/2 sm:w-auto">
              {child.jsxElement}
            </div>
          ))
        ) : (
          <AliceCarousel
            // activeIndex = {1}
            animationDuration={1300}
            animationType="fadeout"
            // autoHeight={false}
            //autoWidth={true}
            // autoPlayControls
            // autoPlayInterval={1300}
            // autoPlay
            // autoPlayStrategy="action"
            controlsStrategy="alternate"
            infinite
            mouseTracking
            responsive={responsive}
            items={childDataArray.map((child, index) => (
              <div key={index} className="md:pr-[15px] lg:pr-[60px]">
                {child.jsxElement}
              </div>
            ))}
            // disableSlideInfo={false}
            // disableDotsControls
            animationEasingFunction="ease"
            disableButtonsControls
            paddingLeft={0}
            paddingRight={0}
            keyboardNavigation
            touchTracking={true}
            touchMoveDefaultEvents={false}
          />
        )}
      </div>
    </div>
  );
}

export default Icraci;
