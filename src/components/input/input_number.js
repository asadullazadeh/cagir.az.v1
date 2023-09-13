import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { Transition } from "@headlessui/react";
const phonePrefixes = ["+50", "+51", "+55", "+70", "+77", "+90"];

const InputNumber = ({ label }) => {
  const inputRef = useRef(null);
  const inputReff = useRef(null);

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
  const [phonePrefix, setPhonePrefix] = useState(
    `${phonePrefixes}`.split(",")[0]
  );
  const [isRotated, setIsRotated] = useState(false);


  // this will take the number with code that I entered
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleInputChange = () => {
    const inputValue = inputReff.current.value
      .replace(/[^0-9]/g, "")
      .slice(0, 10);
    // console.log("Telefon nömrəsi:", phonePrefix + inputValue);
    let formattedValue = "";

    if (inputValue.length > 3) {
      formattedValue += inputValue.slice(0, 3) + "-";
      if (inputValue.length > 5) {
        formattedValue += inputValue.slice(3, 5) + "-";
        formattedValue += inputValue.slice(5);
      } else {
        formattedValue += inputValue.slice(3);
      }
    } else {
      formattedValue = inputValue;
    }

    inputReff.current.value = formattedValue;
    // if (inputValue.length) {
    setInputValue(formattedValue);
    // }
  };

  //when phonePrefix changes, update enteredNumber with code
  useEffect(() => {
    // Whenever phonePrefix or inputValue changes, update enteredNumber
    handleInputChange();
  }, [inputValue]);

  return (
    <div className="flex flex-col gap-y-[5px]">
      <p className="hidden lg:block font-semibold text-[12px] leading-[18px] text-black500 pl-[15px]">
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
            ref={inputReff}
            className="w-full font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none focus:ring focus:ring-white border-none p-0"
            minLength="7"
            type="text"
            placeholder={isClicked ? "" : label}
            aria-label="Full name"
            onChange={handleInputChange}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
