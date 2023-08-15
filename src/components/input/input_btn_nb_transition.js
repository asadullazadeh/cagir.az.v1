import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { Transition } from "@headlessui/react";
const phonePrefixes = ["+50", "+51", "+55", "+70", "+77", "+90"];

import paper_plane from "@/icons/footer/paper_plane.svg";

const InputBtnNbTransition = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phonePrefix, setPhonePrefix] = useState(
    `${phonePrefixes}`.split(",")[0]
  );
  // console.log(phonePrefix);
  const [isRotated, setIsRotated] = useState(false);

  //
  // useEffect(() => {
  //   setPhonePrefix(`${phonePrefixes}`.split(",")[0])
  // },)
  //
  const handleOptionClick = (option, index) => {
    setPhonePrefix(phonePrefixes[index]);
    setIsOpen(false);
    console.log(index);
  };
  // console.log(phonePrefix);
  //
  const inputRef = useRef(null);
  // this will take the number with code that I entered
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleInputChange = () => {
    const inputValue = inputRef.current.value
      .replace(/[^0-9]/g, "")
      .slice(0, 7);
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

    inputRef.current.value = formattedValue;
    if (inputValue.length) {
      setEnteredNumber(phonePrefix + inputValue);
    }
  };

  //when phonePrefix changes, update enteredNumber with code
  useEffect(() => {
    // Whenever phonePrefix or inputValue changes, update enteredNumber
    handleInputChange();
  }, [phonePrefix]);
  console.log(enteredNumber);
  //

  const handleButtonClick = () => {
    setIsRotated(true);
    console.log("button is clicked");
    console.log(enteredNumber.length);
    // if enteredNumber length is 10: +513852755, run sendNumberBySms()
    if (enteredNumber.length === 10) {
      sendNumberBySms();
    }

    setTimeout(() => {
      setIsRotated(false);
    }, 1000); // Adjust the duration as per your requirement
  };
  /* ----------------- Api part to send the number by sms ----------------- */
  const [numberSentBySms, setNumberSentBySms] = useState(false);

  const sendNumberBySms = () => {
    axios
      .post(
        "https://api.cagir.az/api/suggest/create",
        {
          name: "Anonim",
          mainService: "Bilinmir",
          phoneNumber: enteredNumber,
          suggestDetails: [],
        }, // Make sure you define `objectDetails` before using it
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setNumberSentBySms(response.data.isSuccess);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  return (
    <div>
      <div
        href="#"
        className="font-semibold text-[14px] leading-[21px] text-black500"
      >
        {name}
      </div>
      <div className="flex items-center gap-x-[5px] lg:gap-x-[10px] justify-center ">
        <div className="">
          <button
            className="flex items-center justify-between px-[20px] py-[20px]  text-[14px] leading-[21px] font-extrabold
         text-black bg-white rounded-full focus:outline-none 
         border"
            type="button"
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {phonePrefix}
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
          {phonePrefixes && (
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } absolute z-10  mt-[10px] mx-[10px] rounded-[10px] font-extrabold border bg-white`}
            >
              {phonePrefixes.map((phonePrefix, index) => (
                <div key={index}>
                  <li
                    className="px-[15px] py-[5px] hover:bg-gray-100
                  text-black focus:outline-none text-[14px] 
                  leading-[21px]"
                    onClick={() => handleOptionClick(phonePrefix, index)}
                  >
                    {phonePrefix}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>

        <ul className="flex flex-col  w-[200px] sm:w-[250px] font-semibold text-[14px] leading-[21px] text-black500">
          <li className="flex justify-between bg-white rounded-full items-center h-full border pr-[5px]">
            <input
              ref={inputRef}
              className="appearance-none bg-transparent border-none
                 text-black focus:outline-none text-[14px] pl-[10px]
                    leading-[21px] w-[130px] sm:w-auto"
              minLength="7"
              type="text"
              placeholder="Telefon nömrəsi"
              aria-label="Full name"
              onChange={handleInputChange}
            />
            <button
              id="myButton"
              className="flex w-[46px] h-[46px] my-[5px]  rounded-full bg-gradient-to-r from-[#3598EA] to-[#3D55DF]"
              type="button"
              onClick={() => {
                handleButtonClick();
                handleInputChange();
              }}
            >
              <Transition
                show={!isRotated}
                enter="transition ease-in-out duration-1000 transform"
                enterFrom="translate-x-45"
                enterTo="translate-x-45"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0 -rotate-45"
                leaveTo="translate-x-full -rotate-45 opacity-0"
              >
                <Image
                  id="myImage"
                  className="mt-[14px] ml-[13px] w-[20px] h-[17.44] transform"
                  src={paper_plane}
                  alt="paper plane icon"
                />
              </Transition>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InputBtnNbTransition;
