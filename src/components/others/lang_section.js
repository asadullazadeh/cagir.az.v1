import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import icon_az from "@/icons/icon_az.svg";
import icon_en from "@/icons/icon_en.svg";
import icon_ru from "@/icons/icon_ru.svg";

const LangSection = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const flagOptions = [
    {
      lang: "az",
      value: 0,
      label: <Image src={icon_az} alt="Azerbaijan flag" />,
    },
    {
      lang: "en",
      value: 1,
      label: <Image src={icon_en} alt="United Kingdom flag" />,
    },
    { lang: "ru", value: 2, label: <Image src={icon_ru} alt="Russia flag" /> },
  ];

  const [selectedOption, setSelectedOption] = useState(flagOptions[0]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    router.push(router.pathname, router.asPath, {
      locale: selectedOption.lang,
    });
  }, [selectedOption.lang]);

  const dropdownBackgroundClasses =
    "absolute rounded-full bg-gray900 bg-opacity-30 right-[50.2px] lg:right-[-1px] w-[25px] lg:w-[28px] h-[83px] lg:h-[98px]";
  const dropdownButtonClasses =
    "inline-flex items-center pt-[10px] w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]";
  const dropdownMenuClasses = "dropdown-menu absolute mt-[-6px] ml-[-2px]";

  return (
    <div>
      <div
        className={`${dropdownBackgroundClasses} ${
          isDropdownOpen || isHovered ? "" : "hidden"
        }`}
      ></div>
      <div className="dropdown inline-block item-center">
        <button
          onClick={toggleDropdown}
          className={dropdownButtonClasses}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>{selectedOption.label}</span>
        </button>
        <ul
          className={`${dropdownMenuClasses} ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          {flagOptions
            .filter((option) => option.value !== selectedOption.value)
            .map((option) => (
              <li
                key={option.value}
                className="bg-transparent rounded-full mt-[5px] hover:bg-[#B5B5B5] ml-[1px] lg:ml-0 w-[22px] h-[22px] lg:w-[27px] lg:h-[27px]"
              >
                <button
                  onClick={() => setSelectedOption(option)}
                  className="ml-[1px] mt-[0.9px] w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                >
                  {option.label}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LangSection;
