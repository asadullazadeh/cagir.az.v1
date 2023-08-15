import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import up_blue from "@/icons/form/up_blue.svg";
import down from "@/icons/form/down.svg";
const Toggle = ({
  descMain,
  selectedMain,
  descSub,
  selectedSub,
  descSub2,
  selectedSub2,
  whichServiceCategory,
  selectedNamesArray,
}) => {
  const toggleInfos = {
    0: {
      description: descMain,
      serviceName: selectedMain,
    },
    1: {
      description: descSub,
      serviceName: selectedSub,
    },
    2: {
      description: descSub2,
      serviceName: selectedSub2,
    },
  };
  // console.log(selectedSub2);

  // this object takes all cases to give three key value to show which toggle need to be shown.
  //0-when a main service is clicked, 1-sub,2-sub2.
  // objectForToggle-which service toggle is open as default.
  let objectForToggle = {
    0: { 0: false, 1: true, 2: true },
    1: toggleInfos[1].description ? 
    { 0: true, 1: false, 2: true } :
    { 0: false, 1: true, 2: true },
    2: toggleInfos[2].description && toggleInfos[1].description
      ? { 0: true, 1: true, 2: false } : !toggleInfos[2].description && toggleInfos[1].description ?
      { 0: true, 1: false, 2: true }
      : { 0: false, 1: true, 2: true },
  };

  // isHidden takes the previous
  const [isHidden, setIsHidden] = useState({
    ...objectForToggle[
      selectedNamesArray[0] && !selectedSub2 ? 1 : whichServiceCategory
    ],
  });
  useEffect(() => {
    setIsHidden({
      ...objectForToggle[
        selectedNamesArray[0] && !selectedSub2 ? 1 : whichServiceCategory
      ],
    });
  }, [selectedNamesArray, selectedSub2, whichServiceCategory]);
  console.log(selectedNamesArray);
  const toggleHidden = (index) => {
    setIsHidden((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div>
      {Object.keys(toggleInfos).map((index) => {
        const description = toggleInfos[index].description;
        const serviceName = toggleInfos[index].serviceName;
        if (!description) {
          // If the description is null or empty, skip rendering this item
          return null;
        }
        return (
          <div key={index} className="pb-[40px]">
            <button
              id="clickMe"
              onClick={() => toggleHidden(index)}
              className={`flex flex-row justify-between items-center w-full
              ${!isHidden[index] ? "border-b-2 border-cagiraz" : ""}
              `}
            >
              <h6
                className={`font-bold text-[14px] leading-[21px] text-black 
              ${!isHidden[index] ? "text-cagiraz" : ""}`}
              >
                {serviceName} haqda təsvir
              </h6>

              <div>
                <Image
                  src={isHidden[index] ? down : up_blue}
                  alt={isHidden[index] ? "down_icon" : "up_icon"}
                />
              </div>
            </button>

            <div
              id="hiddenText"
              className={`relative  over bg-white py-2 rounded mt-2 ${
                isHidden[index] ? "hidden" : ""
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toggle;
