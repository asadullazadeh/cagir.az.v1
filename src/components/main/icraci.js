import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
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
  const sliderCount =
    data.length < 2 ? 0 : data.length >= 2 && data.length <= 4 ? 2 : 3;

  const childDataArray = Object.values(data).map((child) => ({
    jsxElement: (
      <div key={child.name[0]}>
        <div
          className="w-full h-full 
              rounded-[10px] lg:rounded-[20px] flex flex-col"
        >
          <div className="w-full h-full p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
            {/* photo, name */}
            <div className="flex gap-x-[10px] lg:gap-x-[15px] items-center">
              <Image
                width={200}
                height={200}
                src={`https://api.cagir.az/${child.image}`}
                alt="Profile picture"
                className="rounded-full w-[65px] lg:w-[112px] h-[65px] lg:h-[112px] object-cover object-center"
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
            <div className="w-[175px] lg:w-[265px] h-full">
              <p
                className="w-4/5 sm:w-full italic font-semibold lg:font-bold text-[10px] sm:text-[12px] lg:text-[14px] leading-[18px]
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
          <div key={index} className="pr-[15px] lg:pr-[60px]">
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
      <div className="flex flex-row gap-x-[20px] justify-center">
        {
//         Array.from({ length: sliderCount }, (_, index) => (
//           <React.Fragment key={index}>
//             <div><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
//   <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
// </svg></div>
//             <span className="ml-2" /> {/* Add a margin-left of 2px */}
//           </React.Fragment>
//         ))
        }
      </div>
    </div>
  );
}

export default Icraci;
