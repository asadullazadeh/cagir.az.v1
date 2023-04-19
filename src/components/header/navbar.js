import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import { useState } from "react";

import icon_az from "@/icons/icon_az.svg";
import icon_en from "@/icons/icon_en.svg";
import icon_ru from "@/icons/icon_ru.svg";

// export const Navbar = () => {
export default function Navbar() {
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
    <header>
      <nav className="w-[1392px]">
        <div className="relative z-50 flex items-center justify-between h-[51px]">
          {/* Logo */}
          <Link href="/" className="w-[105px] h-[26px]">
            <Image src={logo} alt="Cagir.az logo" />
          </Link>
          {/* Icons on the right side */}
          <ul className="flex flex-row justify-center items-center space-x-[30px]">
            {/* search icon */}
            <li>
              <Link className="group flex relative" href="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search text-gray900 hover:text-black500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <span
                  className="mt-[8px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium 
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 
                  -translate-x-1/2 translate-y-full opacity-0"
                >
                  Axtarış
                </span>
              </Link>
            </li>

            {/* wallet icon */}
            <li>
              <Link className="group flex relative" href="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-wallet2 text-gray900 hover:text-black500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  </svg>
                </span>
                <span
                  className="mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium 
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 
                  -translate-x-1/2 translate-y-full opacity-0"
                >
                  Ödəniş
                </span>
              </Link>
            </li>
            {/* Profile icon */}
            <li>
              <Link className="group flex relative" href="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person text-gray900 hover:text-black500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </span>
                <span
                  className="mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium 
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2 
                  -translate-x-1/2 translate-y-full opacity-0 whitespace-nowrap"
                >
                  Giriş et
                </span>
              </Link>
            </li>
            {/* Language choice section */}
            <li>
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
            </li>
          </ul>
        </div>

        {/* Navbar 2 */}
        <div className="relative border-b-[1px] border-solid border-white200 z-40 w-[1392px] h-[57px]">
          <div className="flex justify-between">
            <ul className="flex flex-row justify-center items-center font-poppins not-italic font-semibold text-sm leading-[21px] text-gray500 space-x-[40px]">
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Təmizlik xidməti
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Kombi ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Santexnik ustasi
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Kondisioner ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Paltaryuyan ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Elektrik ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Digər xidmətlər
                  </p>
                </Link>
              </li>
            </ul>
            {/* Qeydiyyat button */}
            <div className="mt-[5px] ">
              <button
                className="w-[133px] h-[41px] bg-cagiraz rounded-[30px] py-[10px] px-[26px] 
              font-poppins font-extrabold text-white text-[14px] leading-[21px] transition duration-400 transform hover:-translate-y-1
              shadow-btnShdw"
              >
                Qeydiyyat
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}