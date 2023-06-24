import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import icon_az from "@/icons/icon_az.svg";
import icon_en from "@/icons/icon_en.svg";
import icon_ru from "@/icons/icon_ru.svg";

const LangSection = () => {
  const [navbar, setNavbar] = useState(false);

  const options = [
    {
      value: "1",
      label: (
        <Image src={icon_az} alt="Azerbaijan flag" width="20" height="20" />
      ),
    },
    {
      value: "2",
      label: (
        <Image src={icon_en} alt="United Kingdom flag" width="20" height="20" />
      ),
    },
    {
      value: "3",
      label: <Image src={icon_ru} alt="Russia flag" width="20" height="20" />,
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown inline-block item-center">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="inline-flex items-center pt-[5.33px]"
      >
        <span>{selectedOption.label}</span>
      </button>
      <ul
        className={`dropdown-menu absolute mt-[-6px] ml-[-2px] ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {options
          .filter((option) => option.value !== selectedOption.value)
          .map((option) => (
            <li
              key={option.value}
              className=" bg-transparent rounded-full hover:bg-gray500
                      mt-[5px] w-[24px] h-[24px]"
            >
              <button
                onClick={() => handleOptionClick(option)}
                className="mt-[2px] ml-[2px]"
              >
                {option.label}
                {/* block mt-[5px] hover:border-solid hover:border-gray-300 hover:border-[2px]
                          hover:rounded-full */}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LangSection;
