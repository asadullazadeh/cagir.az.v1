import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ModalStandart from "@/src/components/modal/modal_stand";
import exit_modal from "@/icons/exit_modal.svg";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  // 1024: { items: 4 },
  1300: { items: 4 },
};

function Reyler({ parentId }) {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.cagir.az/api/providerFeed/getAllByServiceId?serviceId=${parentId}`
        );
        const resultArrays = response.data.result; // Assuming the response structure has a "data" object containing a "result" object with arrays
        // console.log(resultArrays);
        const formattedData = resultArrays.map((result) => ({
          name: result.providerName,
          star: result.star,
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
            className="flex flex-col relative
              rounded-[10px] lg:rounded-[20px]"
          >
            <div className="p-[10px] lg:p-[30px] space-y-[10px] lg:space-y-[15px]">
              {/* photo, name */}
              <div className="flex gap-x-[10px] lg:gap-x-[15px]">
                <Image
                  width={65}
                  height={65}
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Profile picture"
                  className="z-8 rounded-full w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] ml-[3.5px] lg:ml-[7px] mt-[3.5px] lg:mt-[7px] object-cover object-center"
                />
                <div className="absolute z-[-5]">
                  <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] mt-0 ml-0"></div>
                  <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] mt-[3.5px] lg:mt-[7px] ml-[7px] lg:ml-[14px]"></div>
                  <div className="absolute rounded-full bg-bluebckg opacity-[15%] w-[33px] lg:w-[65px] h-[33px] lg:h-[65px] ml-[1px] lg:ml-[2px] mt-[7px] lg:lg:mt-[14px]"></div>
                </div>

                <h6
                  className="w-[80px]
                    font-semibold text-[8px] lg:text-[12px] leading-[12px] 
                   lg:leading-[18px]
                    text-black500 mt-[2px] lg:mt-[18px]"
                >
                  <span>{child.name}</span>
                </h6>
              </div>

              {/* rey */}
              <div className="overflow-hidden ">
                <div
                  className="w-full italic font-semibold lg:font-bold text-[10px] sm:text-[12px] lg:text-[14px] leading-[18px]
                  sm:leading-[19px] lg:leading-[21px] text-black100"
                >
                  {child.description}
                </div>
              </div>

              {/* review stars */}
              <div className="rating rating-sm">
                {Array.from({ length: child.star }, (_, index) => (
                  <input
                    key={index}
                    type=""
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-[#F9C00B]"
                  />
                ))}
              </div>

              {/* scroll section for services  */}
              {/* <div className="overflow-x-scroll overflow-hidden w-[140px] lg:w-[270px]">
                      <div className="flex gap-x-[4px]">
                        {rey.jobs?.map((job) => (
                        <div key={job.name}>
                          <div className="border rounded-lg border-cagiraz">
                            <p className="font-semibold text-[10px] leading-[15px] px-[10px] py-[4px] text-cagiraz whitespace-nowrap">
                              {job}
                            </p>
                          </div>
                        </div>
                      ))}
                      </div>
                    </div> */}
            </div>
          </div>
        </div>
    ),
  }));

  return (
    <div>
      <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Müştəri rəyləri</h2>
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
        disableDotsControls
        autoPlay
        autoPlayStrategy="action"
        controlsStrategy="alternate"
        infinite
        mouseTracking
        items={childDataArray.map((child, index) => (
          <div key={index} className="pr-[15px] 2xl:pr-[60px]">
            {child.jsxElement}
          </div>
        ))}
        responsive={responsive}
        // disableSlideInfo={false}
        animationEasingFunction="ease"
        disableButtonsControls
        paddingLeft={0}
        paddingRight={0}
        keyboardNavigation
        touchTracking={true}
        touchMoveDefaultEvents={false}
      />

      {/* <div className="flex flex-row gap-x-[20px] justify-center text-[50px]">
      {".".repeat(sliderCount)}
      </div> */}
      <div className="flex flex-row gap-x-[20px] justify-center ">
        {Array.from({ length: sliderCount }, (_, index) => (
          <React.Fragment key={index}>
            <div className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg></div>
            
            <span className="ml-2" /> {/* Add a margin-left of 2px */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Reyler;
