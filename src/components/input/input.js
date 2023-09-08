import React, { useState, useRef, useEffect } from "react";

const InputCustomized = ({
  label,
  type,
  inputTextId,
  updateInputText,
  updateInputTextId,
  onInputChange,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputId, setInputId] = useState("");
  const inputRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  const handleChange = (id, value) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setInputId(inputTextId);

    if (typeof updateInputText === "function") {
      // updateInputTextId(inputTextId); // Call the function only if it exists
      updateInputText(inputTextId, newValue);
    }
    console.log(newValue);
    // onInputChange(newValue,label);
  };

  // console.log(newValue);

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };
  console.log();
  return (
    <div className="flex flex-col gap-y-[5px]">
      <p className="hidden lg:flex font-semibold text-[12px] leading-[18px] text-black500 pl-[15px]">
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
              className="block lg:hidden absolute mt-[-45px] px-[10px] z-10  font-medium text-[8px] leading-[12px] text-cagiraz"
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
