import React, { useState, useEffect, useRef } from "react";
import useOutsideClick from "@/src/components/others/useOutsideClick";
import { Transition } from "@headlessui/react";

const MAX_PHONE_LENGTH = 10;
const phonePrefixes = [
  "+50",
  "+51",
  "+55",
  "+70",
  "+77",
  "+90",
  "+99",
  "+10",
  "+65",
];
const INITIAL_PHONE_PREFIX = phonePrefixes[0];

const InputNumber = ({ label }) => {
  const inputRef = useRef(null);
  const outsideClickRef = useRef(null);

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [phonePrefix] = useState(INITIAL_PHONE_PREFIX);

  const toggleInputFocus = () => setIsInputFocused(!isInputFocused);

  useOutsideClick(outsideClickRef, () => setIsInputFocused(false));

  const formatInputValue = (value) => {
    let onlyNumbers = value.replace(/[^0-9]/g, "").slice(0, MAX_PHONE_LENGTH);
    if (onlyNumbers.length <= 3) return onlyNumbers;

    let formattedValue = `${onlyNumbers.slice(0, 3)}-`;
    if (onlyNumbers.length > 5) {
      formattedValue += `${onlyNumbers.slice(3, 5)}-${onlyNumbers.slice(5)}`;
    } else {
      formattedValue += onlyNumbers.slice(3);
    }
    return formattedValue;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatInputValue(e.target.value);
    setInputValue(formattedValue);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <p className="hidden lg:block font-semibold text-[12px] leading-[18px] text-black500 pl-4">
        {label}
      </p>
      <div ref={outsideClickRef} className="inline-flex flex-col w-full">
        <div
          className={`flex flex-row items-center px-4 py-4 border ${
            isInputFocused ? "border-blue-600" : "border-gray-300"
          } rounded-[10px] lg:rounded-full`}
          ref={inputRef}
        >
          {isInputFocused && (
            <label
              htmlFor="input"
              className="block lg:hidden absolute mt-[-45px] px-[10px] z-10 bg-white font-medium text-[8px] leading-[12px] text-cagiraz"
            >
              {label}
            </label>
          )}
          <input
            ref={inputRef}
            className="w-full font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none p-0"
            minLength="7"
            type="text"
            placeholder={!isInputFocused ? label : ""}
            aria-label="Phone Number"
            value={inputValue}
            onChange={handleInputChange}
            onClick={toggleInputFocus}
          />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
