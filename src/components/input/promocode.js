import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import download from "@/icons/form/download.svg";
import validation from "@/icons/form/validation.svg";

const Promocode = ({ serviceId, priceBeforePromo, onPromoPriceChange }) => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const prevPromoCodeRef = useRef("");
  const promocodes = ["Cagiraz", "Turgut", "Alpay", "Orxan"];
  const [promoCode, setPromoCode] = useState("");

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value.toUpperCase().slice(0, 8));
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
  /* ----------------- Promocode api ----------------- */
  const [promoCodeRequest, setPromoCodeRequest] = useState({});

  const checkIfPromoIsValid = () => {
    axios
      .post(
        "https://api.cagir.az/api/promo/calculate",
        {
          serviceId: serviceId,
          amount: priceBeforePromo,
          promoCode: promoCode,
        }, // Make sure you define `objectDetails` before using it
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setPromoCodeRequest(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  useEffect(() => {
    setPromoCodeRequest({});
    if (promoCode.length === 8) {
      checkIfPromoIsValid();
    }
  }, [serviceId, priceBeforePromo, promoCode]);

  //checking if promocode is valid
  const isPromoCodeValid =
    promoCode.length === 8 && priceBeforePromo !== promoCodeRequest.amount;

  // passing promocode result from this component to sifaris page.
  useEffect(() => {
    onPromoPriceChange(promoCodeRequest.amount); // Call the callback function with the new value
  }, [onPromoPriceChange, promoCodeRequest.amount]);

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
            className={`${isPromoCodeValid ? "" : "hidden"}`}
          />
        </div>

        <p
          className={`${
            !isPromoCodeValid && promoCode.length === 8 ? "" : "hidden"
          } ml-auto font-semibold text-[10px] leading-[15px] text-danger`}
        >
          Promokod səhvdir
        </p>

        {/* {!isPromoCodeValid && (
          <p
            className={`block lg:hidden ml-auto font-semibold text-[10px] leading-[15px] text-danger `}
          >
            Xəta baş verdi
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Promocode;
