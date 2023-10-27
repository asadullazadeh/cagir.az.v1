import React from "react";
import Link from "next/link";

function SifarishBtn({ classNames, messages }) {

  const btnClasses = `
    font-extraBold text-[14px] lg:text-[18px] leading-[22px] lg:leading-[27px]
    px-[26px] py-[10px] lg:px-[56px] lg:py-[16px] transition duration-300 
    rounded-[30px] transform hover:-translate-y-[5px] shadow-btnShdw 
    bg-cagiraz text-white focus:outline-none
  `;

  return (
    <div className={classNames}>
      <Link href="/temizlik-xidmeti/ev-temizleme">
        <button className={btnClasses}>
          {messages["order-create"]}
        </button>
      </Link>
    </div>
  );
}

export default SifarishBtn;
