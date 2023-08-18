import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const InputNumber = ({label,updatedInputNumberValue,changeNbrClasses}) => {
  const inputRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value state
    updatedInputNumberValue(event.target.value)
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="flex flex-col gap-y-[5px]">
      <p className="hidden lg:block font-semibold text-[12px] leading-[18px] text-black500">
        {label}
      </p>
      <div className="inline-flex flex-col w-full">
        <div
          className={`flex flex-row items-center px-[15px] py-[15px] lg:px-[15px] lg:py-[12.5px] border ${
            isClicked ? "border-[#3598EA]" : "border-gray-300"
          } rounded-[10px] lg:rounded-full`}
          ref={inputRef}
        >
          {isClicked && (
            <label
              htmlFor="inpt"
              className="block lg:hidden absolute mt-[-45px] px-[10px] z-10 bg-white font-medium text-[8px] leading-[12px] text-cagiraz"
            >
              {label}
            </label>
          )}
          <input
          type="number"
          id="inpt"
          name="inpt"
          value={inputValue} // Set the input value
          onChange={handleInputChange} // Handle input changes
          className="hidden lg:block w-full font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none focus:ring focus:ring-white border-none p-0"
          placeholder={isClicked ? "" : ""}
          onClick={handleClick}
        />
          <input
          type="number"
          id="inpt"
          name="inpt"
          value={inputValue} // Set the input value
          onChange={handleInputChange} // Handle input changes
          className="block lg:hidden w-full font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none focus:ring focus:ring-white border-none p-0"
          placeholder={isClicked ? "" : label}
          onClick={handleClick}
        />
          
        </div>
      </div>
      {/* Nomreni deyis */}
      <div className={`${changeNbrClasses}`}>
        <Link href="/">
            <p className="font-semibold text-[14px] leading-[21px] text-cagiraz">
            Nömrəni dəyiş
            </p>
        </Link>
      </div>
    </div>
  );
};

export default InputNumber;
