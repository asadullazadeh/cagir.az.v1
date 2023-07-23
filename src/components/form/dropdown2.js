// components/CustomDropdown.js
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import info_btn from "@/icons/form/info_btn.svg";

const Dropdown2 = ({ getSubServices, onSelectSubService }) => {
    // dropdown options are set to false(closed).
  const [isOpen, setIsOpen] = useState(false);
    // subServiceName is set to false as default.
  const [subServiceName, setSubServiceName] = useState("");

  // if "isOpen" is true, toggleDropdown works
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // description for mobile version
  const [descIsOpen, setdescIsOpen] = useState(false);
  const handleToggleDesc = () => {
    setdescIsOpen(!descIsOpen);
  };

  //getting data for Sub Services
  const subServicesInfos = Object.values(getSubServices).map((child) => ({
    subId: child.id,
    subName: child.serviceNames[0].name,
    subText: child.serviceNames[0].text,
  }));
  // console.log(getSubServices);

  //finding subservice description by using Id
  const findSubDescById = (subServicesInfos, name) =>
    subServicesInfos.find((obj) => obj.subName === name)?.subText ?? null;
  const serviceSubDesc = findSubDescById(subServicesInfos, subServiceName);

  //selected sub service
  const handleOptionClick = (subService) => {
    setSubServiceName(subService);
    setIsOpen(false);
    onSelectSubService(subService);
  };

  return (
    <div className="flex flex-col gap-y-[10px] lg:gap-y-0 relative ">
      <div className="hidden lg:flex flex-row justify-between pb-[5px]">
        <label
          htmlFor="button"
          className="font-semibold text-[12px] leading-[18px] text-black500"
        >
          Xidməti seç
        </label>
        <button>
          <Image src={info_btn} alt="info_btn" />
        </button>
      </div>

      <div>
        <label
          htmlFor="button"
          className={`lg:hidden absolute px-[5px] ml-[10px] mt-[-6px] z-10 bg-white 
        
           font-medium text-[8px] leading-[12px] text-cagiraz ${
             isOpen ? "block" : "hidden"
           }`}
        >
          {subServiceName}
        </label>
        <button
          className="dropdown-button relative flex items-center justify-between w-full px-[15px] py-[5px] lg:py-[10px] text-[10px] lg:text-[12px] leading-[15px] lg:leading-[12px] font-medium lg:font-semibold
         text-gray900  bg-white rounded-[10px] lg:rounded-[50px] focus:outline-none focus:border-cagiraz
         border-[1px] border-solid border-gray900"
          onClick={toggleDropdown}
        >
          <p
            className={`lg:text-black500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            {subServiceName ? subServiceName : "Xidməti seç"}
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
        {isOpen && (
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } absolute z-10 w-full mt-[10px] rounded-[10px] border-[1px] border-solid	
          border-cagiraz bg-white`}
          >
            {subServicesInfos &&
              subServicesInfos.map((item, index) => (
                <div key={index}>
                  <li
                    className="px-[15px] py-[5px] font-medium lg:font-semibold text-[12px] leading-[18px] text-gray900 lg:text-black500"
                    onClick={() => {
                      handleOptionClick(item.subName);
                      // handleClick(item)
                    }}
                  >
                    {item.subName}
                  </li>
                </div>
              ))}
          </ul>
        )}
      </div>
      {/* info part */}
      {serviceSubDesc && (
        <div className="flex lg:hidden flex-row gap-x-[10px]">
          <Image
            className="self-start w-[20px] h-[20px]"
            src={info_btn}
            alt="info_icon"
          />

          <div className="flex flex-col font-medium text-[10px] leading-[15px] text-gray900">
            <div classNames="flex flex-row">
              <div
                dangerouslySetInnerHTML={{
                  __html: descIsOpen
                    ? `${serviceSubDesc}`
                    : `${serviceSubDesc.slice(0, 200)}...`,
                }}
              />

              <button
                className="font-semibold block text-cagiraz"
                onClick={handleToggleDesc}
              >
                {descIsOpen ? "Bağla" : "Ətraflı oxu"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;