import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import up from "@/icons/form/up.svg";
import down from "@/icons/form/down.svg";

const Form = ({serviceDescription}) => {
  const [isHidden, setIsHidden] = useState(false);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
        {/* Toggle part */}
        <div className=""> 
          <button
            id="clickMe"
            onClick={toggleHidden}
            className="flex justify-between items-center w-full"
          >  
              <h6 className="font-bold text-[14px] leading-[21px] text-black">
                Ev təmizləmə haqda təsvir
              </h6>
            <div>
              <Image
                src={isHidden ? up : down}
                alt={isHidden ? "up_icon" : "down_icon"}
              />
            </div>
          </button>

          <div
            id="hiddenText"
            className={`relative  over bg-white py-2 rounded mt-2 ${
              isHidden ? "hidden" : ""
            }`}
          >
            {serviceDescription}
          </div>
        </div>
      
    </>
  );
};

export default Form;
