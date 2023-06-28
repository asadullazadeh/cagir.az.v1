import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import download from "@/icons/form/download.svg";
import validation from "@/icons/form/validation.svg";

const Promocode = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const prevPromoCodeRef = useRef("");

  const promocode = "Cagiraz";
  const [promoCode, setPromoCode] = useState("");
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleInputClick = () => {
    if (isInputClicked) {
      setPromoCode(prevPromoCodeRef.current);
    } else {
      prevPromoCodeRef.current = promoCode;
    }
    setIsInputClicked(!isInputClicked);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.matches("#promo_code")) {
      setPromoCode(prevPromoCodeRef.current);
      setIsInputClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-[5px]">
      <p className="hidden lg:block font-semibold text-[12px] leading-[18px] text-black500">
        Promokod
      </p>
      <div className="inline-flex flex-col w-full">
        <div
          className={`flex flex-row items-center px-[15px] py-[15px] lg:px-[15px] lg:py-[12.5px] border border-gray-300 rounded-[10px] lg:rounded-full ${
            isInputClicked ? "border-[#3598EA]" : ""
          }`}
        >
          {isInputClicked && (
            <label
              htmlFor="promo_code"
              className="block lg:hidden absolute mt-[-45px] px-[10px] z-10 bg-white font-medium text-[8px] leading-[12px] text-cagiraz"
            >
              promocode
            </label>
          )}
          <input
            type="text"
            id="promo_code"
            name="promo_code"
            className="block w-full font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none focus:ring focus:ring-white border-none p-0"
            placeholder={isInputClicked ? "" : "promokod"}
            value={promoCode}
            onChange={handlePromoCodeChange}
            // onBlur={handlePromoCodeBlur}
            onClick={handleInputClick}
          />
          <Image
            src={validation}
            alt="validation_icon"
            className={`opacity-${promoCode === "Cagir2023" ? "100" : "0"}`}
          />
        </div>
        {promoCode !== promocode && (
          <p
            className={`hidden lg:block ml-auto font-semibold text-[10px] leading-[15px] text-danger `}
          >
            Promokod səhvdir
          </p>
        )}
        {promoCode !== promocode && (
          <p
            className={`block lg:hidden ml-auto font-semibold text-[10px] leading-[15px] text-danger `}
          >
            Xəta baş verdi
          </p>
        )}
      </div>
    </div>
  );
};

export default Promocode;