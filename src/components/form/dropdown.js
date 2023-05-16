import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Təmizlik xidməti");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-full px-[15px] py-[5px] text-[12px] leading-[18px] font-medium
         text-gray900 bg-white rounded-[10px] focus:outline-none focus:border-cagiraz
         border-[1px] border-solid border-gray900"
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
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 w-full mt-[10px] rounded-[10px] border-[1px] border-solid	
         border-cagiraz bg-white`}
      >
        <li
          className="px-[15px] py-[5px] hover:bg-gray-100"
          onClick={() => handleOptionClick("Təmizlik xidməti")}
        >
          Təmizlik xidməti
        </li>
        <li
          className="px-[15px] py-[5px] hover:bg-gray-100"
          onClick={() => handleOptionClick("Usta xidməti")}
        >
          Usta xidməti
        </li>
        <li
          className="px-[15px] py-[5px] hover:bg-gray-100"
          onClick={() => handleOptionClick("Masaj xidməti")}
        >
          Masaj xidməti
        </li>
        <li
          className="px-[15px] py-[5px] hover:bg-gray-100"
          onClick={() => handleOptionClick("Gözəllik xidməti")}
        >
          Gözəllik xidməti
        </li>
        <li
          className="px-[15px] py-[5px] hover:bg-gray-100"
          onClick={() => handleOptionClick("Yoqa, Meditasiya")}
        >
          Yoqa, Meditasiya
        </li>
        <li
          className="px-[15px] py-[5px] hover:bg-gray-100"
          onClick={() => handleOptionClick("Əyləncə")}
        >
          Əyləncə
        </li>
      </ul>
    </div>
  );
};
export default Dropdown;
