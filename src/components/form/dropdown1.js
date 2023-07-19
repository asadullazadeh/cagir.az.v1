// components/CustomDropdown.js
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import info_btn from "@/icons/form/info_btn.svg";

const Dropdown1 = ({ getMainServices, onSelectOption  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(option, "clicked");
    onSelectOption(option); // Call the callback function with the selected option
  };

  const [descIsOpen, setdescIsOpen] = useState(false);
  const handleToggleDesc = () => {
    setdescIsOpen(!descIsOpen);
  };

  //
  const mainServicesInfos = Object.values(getMainServices).map(
    ({ serviceNames: [{ id, name, text, titleUrl }] }) => ({
      mainId: id,
      mainName: name,
      mainText: text,
      mainTitleUrl: titleUrl,
    })
  );

  const findDescById = (mainServicesInfos, name) =>
    mainServicesInfos.find((obj) => obj.mainName === name)?.mainText ?? null;
  const serviceDesc = findDescById(mainServicesInfos, selectedOption);
  //
  const handleClick = () => {
    // const data = selectedOption;
    onDataReceived(selectedOption);
  };
  //

  return (
    // mobile dropdown
    <div className="flex flex-col gap-y-[10px] relative lg:hidden">
      <div>
        <label
          htmlFor="button"
          className={`absolute px-[5px] ml-[10px] mt-[-6px] z-10 bg-white 
        
           font-medium text-[8px] leading-[12px] text-cagiraz ${
             isOpen ? "block" : "hidden"
           }`}
        >
          {selectedOption}
        </label>
        <button
          className="dropdown-button relative flex items-center justify-between w-full px-[15px] py-[5px] text-[10px] leading-[15px] font-medium
         text-gray900 bg-white rounded-[10px] focus:outline-none focus:border-cagiraz
         border-[1px] border-solid border-gray900"
          onClick={toggleDropdown}
        >
          <p className={`${isOpen ? "opacity-0" : "opacity-100"}`}>
            {selectedOption ? selectedOption : "Xidməti seç"}
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
            {mainServicesInfos &&
              mainServicesInfos.map((item, index) => (
                <div key={index}>
                  <li
                    className="px-[15px] py-[5px] font-medium text-[12px] leading-[18px] text-gray900"
                    onClick={() => {
                      handleOptionClick(item.mainName);
                    }}
                  >
                    {item.mainName}
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

          <div className="flex flex-col font-medium text-[10px] leading-[15px] text-gray900">
            <div classNames="flex flex-row">
              <div
                dangerouslySetInnerHTML={{
                  __html: descIsOpen
                    ? `${serviceDesc}`
                    : `${serviceDesc.slice(0, 200)}...`,
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

export default Dropdown1;
