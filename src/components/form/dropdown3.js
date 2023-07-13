import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import info_btn from "@/icons/form/info_btn.svg";

const Dropdown3 = ({sub2ServicesInfos, subServiceId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSub2Service, setselectedSub2Service] = useState(`zqezq`);
const handleOptionClick = (option) => {
  setselectedSub2Service(option);
  setIsOpen(false);
};

  const [descIsOpen, setdescIsOpen] = useState(false);
  const handleToggleDesc = () => {
    setdescIsOpen(!descIsOpen);
  };
//   console.log(sub2ServicesInfos);
const findNameById = (sub2ServicesInfos, id) =>
  (sub2ServicesInfos.find(obj => obj.sub2Id === id) || {}).sub2Name || null;
const sub2ServiceName = findNameById(sub2ServicesInfos, selectedSub2Service);  
// console.log(subServiceName);
//find Description by knowing id
const findDescById = (sub2ServicesInfos, id) =>
  (sub2ServicesInfos.find(obj => obj.sub2Id === id) || {}).sub2Text || null;
const serviceDesc = findDescById(sub2ServicesInfos, selectedSub2Service);  
// console.log(serviceDesc);

  return (
    <div>
      {/* desktop dropdown */}
      <div className="hidden lg:block relative">
        <div className="flex flex-row justify-between pb-[5px]">
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
        <button
          className="flex items-center justify-between w-full px-[15px] py-[5px] text-[12px] leading-[18px] font-medium
          text-gray900 bg-white rounded-[10px] focus:outline-none focus:border-cagiraz
          border-[1px] border-solid border-gray900"
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {sub2ServiceName}
          {/* {selectedSub2Service} */}
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
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute z-10 w-full mt-[10px] rounded-[10px] border-[1px] border-solid border-cagiraz bg-white`}
        >
          {sub2ServicesInfos &&
            sub2ServicesInfos.map((item, index) => (
              <div key={index}>
                <li
                  className="px-[15px] py-[5px] hover:bg-gray-100"
                  onClick={() => handleOptionClick(item.sub2Id,item.sub2Description,item.sub2TitleUrl, item.sub2Name)}
                >
                  {item.sub2Name}
                </li>
              </div>
            ))}
        </ul>
      </div>

      {/* mobile dropdown */}
      <div className="flex flex-col gap-y-[10px] relative lg:hidden">
        {/* dropdown */}
        <div>
          <label
            htmlfor="button"
            className={`absolute px-[5px] ml-[10px] mt-[-6px] z-10 bg-white 
        
           font-medium text-[8px] leading-[12px] text-cagiraz ${
             isOpen ? "block" : "hidden"
           }`}
          >
            {sub2ServiceName}
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
            {/* onClick={() => handleOptionClick(item.id,item.name)} */}
            <p className={`${isOpen ? "opacity-0" : "opacity-100"}`}>
              {sub2ServiceName}
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
          {sub2ServicesInfos && (
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
                      className="px-[15px] py-[5px] font-medium text-[12px] leading-[18px] text-gray900"
                      onClick={() => handleOptionClick(item.sub2Id,item.sub2Description,item.sub2TitleUrl, item.sub2Name)}
                    >
                      {item.sub2Name}
                    </li>
                  </div>
                ))}
            </ul>
          )}
        </div>
        {/* info part */}
        {serviceDesc && (

        
        <div className="flex lg:hidden flex-row gap-x-[10px]">
          <Image
            className="self-start w-[20px] h-[20px]"
            src={info_btn}
            alt="info_icon"
          />
          <div className="font-medium text-[10px] leading-[15px] text-gray900">
            
            <div dangerouslySetInnerHTML={{ __html: serviceDesc }} />

            {"descIsOpen" ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: serviceDesc }} />
                <button
                  className="font-semibold block text-cagiraz"
                  onClick={handleToggleDesc}
                >
                  Bağla
                </button>
              </>
            ) : (
              <button
                className="font-semibold block text-cagiraz"
                onClick={handleToggleDesc}
              >
                Ətraflı oxu
              </button>
            )}
          </div>
        </div>
        ) }
        {/*  */}

     
      </div>
    </div>
  );
};

export default Dropdown3;