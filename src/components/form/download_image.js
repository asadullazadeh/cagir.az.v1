import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import download from "@/icons/form/download.svg";
import delete_icon from "@/icons/form/delete.svg";

const Download_image = () => {
  return (
    <div className="flex flex-col gap-y-[5px]">
      <p className="hidden lg:block font-semibold text-[12px] leading-[18px] text-black500">Şəkil yüklə</p>

    <div className="inline-flex flex-col w-full">
      
      <label
        for="dropzone-file"
        className="flex flex-row justify-between items-center border-2 h-[40px] space-x-[16px] border-cagiraz border-dashed rounded-[10px] lg:rounded-full cursor-pointer px-[16px] "
      >
        <Image src={download} alt="download_icon" />
        <p className="block lg:hidden font-semibold text-[10px] leading-[15px] text-gray900">
        Şəkil yüklə (Maksimum həcmi 1MB olmalıdır)
        </p>
        <p className="hidden lg:block font-semibold text-[10px] leading-[15px] text-gray900">
        Maksimum həcmi 1MB olmalıdır
        </p>
        <Image src={delete_icon} alt="delete_icon" className=""/>

        <input id="dropzone-file" type="file" className="hidden" />
      </label>


    </div>
    </div>
  );
};

export default Download_image;