import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WorkWithUsDesktop from "@/public/workwithus_desktop.jpg";
import WorkWithUsMobile from "@/public/workwithus_mobile.jpg";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn"

function IsAxtariram() {
  return (
    <div className="flex flex-col pt-[30px] pb-[50px] lg:pb-[90px]">
        <div className="">
            < Image src={WorkWithUsDesktop} alt="WorkWithUsDesktop" className="hidden lg:block w-full aspect-[1392/450]"/>
            < Image src={WorkWithUsMobile} alt="WorkWithUsMobile" className="block lg:hidden w-full aspect-[292/164]" />
        </div>

        <h2 className="my-h2 text-center pt-[15px] lg:pt-[30px]">Sən iş axtarırsan, biz isə səni!</h2>
        {/* desktop version */}
        <p className="hidden lg:flex flex-col font-normal lg:font-medium text-[12px] lg:text-[16px] leading-[22px] lg:leading-[34px]
        pt-[5px] lg:pb-[15px] " >
            <span className="mx-auto">Cagir.az müxtəlif sahələr üzrə vakansiya elan edir. Sən də &quot iş axtarıram &quot, &quot maaş </span> 
            <span className="mx-auto">qane eləmir &quot deyirsənsə bizə qoşul, daha çox müştəriyə çat! Aşağıdakı anketi </span> 
            <span className="mx-auto">doldur, elə sabahdan işə başla! </span>
            <span className="mx-auto"> İşə müraciət anketi: </span>
        </p>
        {/* mobile version */}
        <p className=" lg:hidden flex flex-col font-normal lg:font-medium text-[12px] lg:text-[16px] leading-[22px] lg:leading-[34px]
        pt-[5px] lg:pb-[15px] text-gray900" >
            <span className="mx-auto">Cagir.az müxtəlif sahələr üzrə vakansiya elan edir.  </span> 
            <span className="mx-auto">Sən də &quot iş axtarıram &quot, &quot maaş qane eləmir &quot  </span> 
            <span className="mx-auto">deyirsənsə bizə qoşul, daha çox müştəriyə çat!  </span>
            <span className="mx-auto">Aşağıdakı anketi doldur, elə sabahdan işə başla!  </span>
            <span className="mx-auto pt-[40px]">İşə müraciət anketi:</span>
        </p>
        <div className="flex justify-center pt-[10px] lg:pt-[20px]">
            <PrimaryMdBtn btnName="İşə müraciət anketini doldur" classNames="w-full lg:w-auto" />
        </div>
    </div>
  );
}

export default IsAxtariram;
