import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputCustomized from "@/src/components/input/input";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

function Payment() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h2 className="my-h2 text-center pb-[15px]">Ödəniş</h2>
      <div className="flex flex-col w-full md:w-2/3 gap-y-[15px]">
        <InputCustomized label="Ad və soyad" />
        <InputCustomized label="Telefon nömrəsi" />
        <InputCustomized label="Məbləğ" />
        <div>
          <label
            htmlFor="message"
            className="block lg:pb-[5px] pl-[15px] font-medium lg:font-semibold text-[12px] leading-[18px] 
            lg:leading-[15px] text-gray900 lg:text-black500"
          >
            Qeyd
          </label>
          <textarea
            id="message"
            rows="3"
            className="resize-x block pt-[8px] lg:pt-[15px] px-[10px] lg:pr-[7px] lg:pl-[15px] pb-[20px] w-full  
            font-semibold text-[10px] leading-[15px] 
            text-gray-900 bg-white outline-none
            rounded-lg border border-gray-300"
            placeholder="Qeydlərinizi edin..."
          ></textarea>
        </div>
        <div className="w-full pt-[20px]">
          <Link className="flex justify-center lg:justify-end" href="/payment_result">
            <PrimaryMdBtn btnName="Ödəniş et" classNames="w-full lg:w-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
