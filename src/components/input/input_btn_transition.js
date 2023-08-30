import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

import paper_plane from "@/icons/footer/paper_plane.svg";

const InputBtnTransition = ({ name, classNames }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
    }, 1000); // Adjust the duration as per your requirement
  };

  return (
    <div className="flex justify-center">
      <ul className="  space-y-[10px] lg:space-y-[15px] font-semibold text-[14px] leading-[21px] text-black500">
        <li className={`mb-[5px] ${classNames}`}>
          <div href="#" className="pl-[15px]">
            {name}
          </div>
        </li>
        <li className="w-[235px] h-[58px] bg-white rounded-full flex items-center border ">
          
            <div className="flex items-center h-[46px]">
              <input
                className="appearance-none bg-transparent border-none text-black focus:outline-none text-[14px] 
                    pl-[10px] pr-[6px]
                    leading-[21px] w-[181px]"
                type="text"
                placeholder=""
                aria-label="Full name"
              />
              <button
                id="myButton"
                className="flex w-[46px] h-[46px] rounded-full bg-gradient-to-r from-[#3598EA] to-[#3D55DF] "
                type="button"
                onClick={handleButtonClick}
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
            </div>
       
        </li>
      </ul>
    </div>
  );
};

export default InputBtnTransition;