import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import download from "@/icons/form/download.svg";
import delete_icon from "@/icons/form/delete.svg";

const Download_image = () => {
  return (
    <div className="inline-flex flex-col">
      <div className="mb-[5px]">
        <p>Şəkil yüklə</p>
      </div>



      <label
        for="dropzone-file"
        className="flex flex-row items-center justify-center border-2 h-[40px] space-x-[16px]  border-cagiraz border-dashed rounded-full cursor-pointer px-[16px] "
      >
        <Image src={download} alt="download_icon" />
        <p className="font-poppins text-[10px] leading-[15px] text-gray900">
          Maksimum həcmi 1MB olmalıdır
        </p>
        <Image src={delete_icon} alt="delete_icon" className=""/>

        <input id="dropzone-file" type="file" className="hidden" />
      </label>


    </div>
  );
};

export default Download_image;
