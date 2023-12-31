import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import icon_az from "@/icons/icon_az.svg";
import icon_en from "@/icons/icon_en.svg";
import icon_ru from "@/icons/icon_ru.svg";

const LangSection = () => {
  const router = useRouter();

  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;

  const [navbar, setNavbar] = useState(false);
  const options = [
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
    {
      lang: "ru",
      value: 2,
      label: <Image src={icon_ru} alt="Russia flag" />,
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  // const [LangBckgrnd, setLangBckgrnd] = useState(false)

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    // router.push(`/${chosenLang}/${router.asPath}`)
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const excludedPaths = [
      "/master",
      "/plumber",
      "/combi",
      "/climate",
      "/clean",
    ];
    // Check if the current pathname matches any of the excluded paths
    const shouldExclude = excludedPaths.includes(router.pathname);

    // If not excluded, then push the new locale to the router
    if (!shouldExclude) {
      if(router.pathname ==="/[mainService]/[subService]"){
        router.push("/","/",{locale: selectedOption.lang})
      }else{
        router.push(router.pathname, router.asPath, {
          locale: selectedOption.lang,
        });
      }


      


    }
  }, [selectedOption.lang]);

// /[mainService]/[subService]
  return (
    <div>
      <div
        className={`absolute  rounded-full bg-gray900 bg-opacity-30 right-[50.2px] lg:right-[-1.3px] w-[25px] lg:w-[28px] h-[83px] lg:h-[98px] ${
          isDropdownOpen || isHovered ? "" : "hidden"
        }`}
      ></div>
      <div className="dropdown inline-block item-center">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex items-center pt-[10px] w-[20px] lg:w-[25px] h-[20px] lg:h-[25px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
                className="bg-transparent rounded-full
                      mt-[5px]  hover:bg-[#B5B5B5] ml-[1px] lg:ml-0 w-[22px] h-[22px] lg:w-[27px] lg:h-[27px]"
              >
                <button
                  onClick={() => handleOptionClick(option)}
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
