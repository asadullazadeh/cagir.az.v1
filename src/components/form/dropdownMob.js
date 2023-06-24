import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import info_btn from "@/icons/form/info_btn.svg";

const Dropdown = ({ serviceNames }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState(`${serviceNames}`.split(",")[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="block lg:hidden relative">
      <div className="relative">
        <label
          for="button"
          className={`absolute px-[5px] ml-[10px] mt-[-6px] z-10 bg-white 
        
           font-medium text-[8px] leading-[12px] text-cagiraz ${
             isOpen ? "block" : "hidden"
           }`}
        >
          {selectedOption}
        </label>

        <button
          className="relative flex items-center justify-between w-full px-[15px] py-[5px] text-[10px] leading-[15px] font-medium
         text-gray900 bg-white rounded-[10px] focus:outline-none focus:border-cagiraz
         border-[1px] border-solid border-gray900"
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className={`${isOpen ? "opacity-0" : "opacity-100"}`}>
            {selectedOption}
          </p>

          <svg
            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 16a1 1 0 01-.7-.3l-5-5a1 1 0 011.4-1.4L10 13.6l4.3-4.3a1 1 0 011.4 1.4l-5 5a1 1 0 01-.7.3z" />
          </svg>
        </button>
        {serviceNames && (
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute z-10 w-full mt-[10px] rounded-[10px] border-[1px] border-solid	
          border-cagiraz bg-white`}
          >
            {serviceNames.map((serviceName, index) => (
              <div key={index}>
                <li
                  className="px-[15px] py-[5px] font-medium text-[12px] leading-[18px] text-gray900"
                  onClick={() => handleOptionClick(serviceName)}
                >
                  {serviceName}
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
