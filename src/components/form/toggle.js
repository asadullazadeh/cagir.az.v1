import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import up from "@/icons/form/up.svg";
import down from "@/icons/form/down.svg";

const Toggle = ({
  descMain,
  selectedMain,
  descSub,
  selectedSub,
  descSub2,
  selectedSub2,
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

  const [isHidden, setIsHidden] = useState({});

  const toggleHidden = (index) => {
    setIsHidden((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  // isHidden[index] ? "hidden" : ""
  // 

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
              className="flex flex-row justify-between items-center w-full"
            >
              <h6 className="font-bold text-[14px] leading-[21px] text-black">
                {serviceName} haqda təsvir
              </h6>
              
              <div>
                <Image
                  src={isHidden[index] ? up : down}
                  alt={isHidden[index] ? "up_icon" : "down_icon"}
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
