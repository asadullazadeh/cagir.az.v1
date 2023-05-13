import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import download from "@/icons/form/download.svg";
import validation from "@/icons/form/validation.svg";

const PaymentMethod = () => {
  return (
    <div className="inline-flex flex-col">
      <p className="font-poppins font-semibold text-[12px] leading-[18px] text-black500">
        Ödəniş üsulunu seçin
      </p>
      <div className="flex flex-row px-[16px] h-[40px] space-x-[45px] border border-gray-300 rounded-full ">
        <div className="flex space-x-[10px] items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
          />
          <label
            for="default-radio-1"
            className="text-sm font-medium text-gray-900"
          >
            Nağd ödəniş
          </label>
        </div>
        <div className="flex space-x-[10px] items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
          />
          <label
            for="default-radio-2"
            className=" text-sm font-medium text-gray-900 "
          >
            Kart ilə ödəniş
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
