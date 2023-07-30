import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
const phonePrefixes = ["+50", "+51", "+55", "+70", "+77", "+90"];

import paper_plane from "@/icons/footer/paper_plane.svg";

const InputBtnNbTransition = ({ name }) => {
  const inputRef = useRef(null);

  function handleInputChange() {
    const inputValue = inputRef.current.value;
    console.log("Telefon nömrəsi:", selectedOption + inputValue);
    // Perform any further processing with the input value
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedOption, setSelectedOption] = useState(
    `${phonePrefixes}`.split(",")[0]
  );
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    //
  };

  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
    }, 1000); // Adjust the duration as per your requirement
  };

  // console.log(selectedOption);
  return (
    <div>
      <div
        href="#"
        className="font-semibold text-[14px] leading-[21px] text-black500"
      >
        {name}
      </div>
      <div className="flex items-center gap-x-[5px] lg:gap-x-[10px] justify-center ">
        <div className="">
          <button
            className="flex items-center justify-between px-[20px] py-[20px]  text-[14px] leading-[21px] font-extrabold
         text-black bg-white rounded-full focus:outline-none 
         border"
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
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
          {phonePrefixes && (
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } absolute z-10  mt-[10px] mx-[10px] rounded-[10px] font-extrabold border bg-white`}
            >
              {phonePrefixes.map((phonePrefix, index) => (
                <div key={index}>
                  <li
                    className="px-[15px] py-[5px] hover:bg-gray-100
                  text-black focus:outline-none text-[14px] 
                  leading-[21px]"
                    onClick={() => handleOptionClick(phonePrefix)}
                  >
                    {phonePrefix}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>

        <ul className="flex flex-col  w-[200px] sm:w-[250px] font-semibold text-[14px] leading-[21px] text-black500">
          {/* <li className="">
          <div href="#" className="">
            {name}
          </div>
        </li> */}
          <li className="flex justify-between bg-white rounded-full items-center h-full border pr-[5px]">
            <input
              ref={inputRef}
              className="appearance-none bg-transparent border-none
                 text-black focus:outline-none text-[14px] pl-[10px]
                    leading-[21px] w-[130px] sm:w-auto"
              minLength="7"
              type="text"
              placeholder="Telefon nömrəsi"
              aria-label="Full name"
              onChange={handleInputChange}
            />
            <button
              id="myButton"
              className="flex w-[46px] h-[46px] my-[5px]  rounded-full bg-gradient-to-r from-[#3598EA] to-[#3D55DF]"
              type="button"
              onClick={() => {
                handleButtonClick();
                handleInputChange();
              }}
            >
              <Transition
                show={!isRotated}
                enter="transition ease-in-out duration-1000 transform"
                enterFrom="translate-x-45"
                enterTo="translate-x-45"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0 -rotate-45"
                leaveTo="translate-x-full -rotate-45 opacity-0"
              >
                <Image
                  id="myImage"
                  className="mt-[14px] ml-[13px] w-[20px] h-[17.44] transform"
                  src={paper_plane}
                  alt="paper plane icon"
                />
              </Transition>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InputBtnNbTransition;
