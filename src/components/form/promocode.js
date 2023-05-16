import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import download from "@/icons/form/download.svg";
import validation from "@/icons/form/validation.svg";

const Promocode = () => {
    const [promoCode, setPromoCode] = useState('');
    const [errorMsgOpacity, setErrorMsgOpacity] = useState(0);
  
    const handlePromoCodeChange = (e) => {
      setPromoCode(e.target.value);
      setErrorMsgOpacity(0); // Reset error message opacity when promo code is changed
    };
  
    const handlePromoCodeBlur = () => {
      // Check if promo code is correct on blur event
      if (promoCode === 'Cagir2023') {
        setPromoCode(''); // Clear input field after correct promo code is typed
      } else {
        setErrorMsgOpacity(100);
      }
    };
  
    return (
      <div className="inline-flex flex-col w-full">
        <div className="flex flex-row items-center h-[40px] px-[15px] space-x-[15px] border border-gray-300 rounded-full">
          <input
            type="text"
            id="promo_code"
            className="block w-full font-poppins font-semibold text-[10px] leading-[15px] text-black500 focus:outline-none"
            placeholder="promokod"
            value={promoCode}
            onChange={handlePromoCodeChange}
            onBlur={handlePromoCodeBlur}
          />
          <Image
            src={validation}
            alt="validation_icon"
            className={`opacity-${promoCode === 'Cagir2023' ? '100' : '0'}`}
          />
        </div>
        <p
          className={`ml-auto font-semibold text-[10px] leading-[15px] text-gray900 lg:text-black500 text-danger opacity-${errorMsgOpacity}`}
        >
          Promokod səhvdir
        </p>
      </div>
    );
  };
  
  export default Promocode;