import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";
import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import Invoice_Card from "@/src/components/cards/invoice_card";

function Receipt({ dataReceipt }) {
  return (
    <div className="flex flex-col md:mx-[100px] lg:mx-[200px] 2xl:mx-[250px] pt-[30px] lg:pt-[60px] pb-[60px]">
      <h2 className="my-h2 text-center pb-[5px] lg:pb-[15px]">
        {}Ödənişin uğurla tamamlandı
      </h2>
      <p
        className="font-medium lg:font-semibold text-[12px] lg:text-[18px] leading-[18px] 
      lg:leading-[27px] text-center pb-[15px] lg:pb-[60px]"
      >
        Təşəkkür edirik!
      </p>
      <div className="bg-white rounded-[20px] drop-shadow-card">
        <Invoice_Card dataReceipt={dataReceipt} />
      </div>

      {/* button part */}
      <div className="flex flex-col pt-[20px] lg:pt-[35px] space-y-[15px] ">
        <div className="flex lg:justify-end">
          <PrimaryMdBtn btnName="Qəbzi yüklə" classNames="w-full lg:w-auto" />
        </div>

        <PrimaryOutlineSmBtn
          btnName="Emailə göndər"
          classNames="block lg:hidden"
        />
      </div>
    </div>
  );
}

export default Receipt;
