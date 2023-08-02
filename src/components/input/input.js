import React, { useState, useRef, useEffect } from "react";

const InputCustomized = ({ label,type,inputTextId,updateInputTextValue,updateInputTextId }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    updateInputTextValue(newValue);
    updateInputTextId(inputTextId); // Assuming inputTextId is defined somewhere
  };
  
  
  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  console.log(inputValue);
  return (
    <div className="flex flex-col gap-y-[5px]">
      <p className="hidden lg:flex font-semibold text-[12px] leading-[18px] text-black500">
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
            type={type}
            value={inputValue}
            id="inpt"
            name="inpt"
            className="w-full font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none focus:ring focus:ring-white border-none p-0"
            placeholder={isClicked ? "" : label}
            onClick={handleClick}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default InputCustomized;
