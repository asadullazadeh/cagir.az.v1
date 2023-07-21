// components/CustomDropdown.js
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import info_btn from "@/icons/form/info_btn.svg";

const Dropdown3 = ({ getSub2Services, onSelectSub2Service }) => {
      // dropdown options are set to false(closed).
  const [isOpen, setIsOpen] = useState(false);
      // sub2ServiceName is set to false as default.
  const [sub2ServiceName, setSub2ServiceName] = useState("");

  // if "isOpen" is true, toggleDropdown works
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // description for mobile version
  const [descIsOpen, setdescIsOpen] = useState(false);
  const handleToggleDesc = () => {
    setdescIsOpen(!descIsOpen);
  };

  //getting data for Sub2 Services
  const sub2ServicesInfos = Object.values(getSub2Services).map((child) => ({
    sub2Id: child.id,
    sub2Name: child.serviceNames[0].name,
    sub2Text: child.serviceNames[0].text,
  }));

  //finding Description by using Id
  const findSub2DescById = (sub2ServicesInfos, name) =>
    sub2ServicesInfos.find((obj) => obj.sub2Name === name)?.sub2Text ?? null;
  const serviceSub2Desc = findSub2DescById(sub2ServicesInfos, sub2ServiceName);

  //selected sub service
  const handleOptionClick = (sub2Service) => {
    setSub2ServiceName(sub2Service);
    setIsOpen(false);
    onSelectSub2Service(sub2Service);
  };
  console.log(getSub2Services);
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
          {sub2ServiceName}
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
            {sub2ServiceName ? sub2ServiceName : "Xidməti seç"}
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
            {sub2ServicesInfos &&
              sub2ServicesInfos.map((item, index) => (
                <div key={index}>
                  <li
                    className="px-[15px] py-[5px] font-medium lg:font-semibold text-[12px] leading-[18px] text-gray900 lg:text-black500"
                    onClick={() => {
                      handleOptionClick(item.sub2Name);
                      // handleClick(item)
                    }}
                  >
                    {item.sub2Name}
                  </li>
                </div>
              ))}
          </ul>
        )}
      </div>
      {/* info part */}
      {serviceSub2Desc && (
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
                    ? `${serviceSub2Desc}`
                    : `${serviceSub2Desc.slice(0, 200)}...`,
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

export default Dropdown3;
