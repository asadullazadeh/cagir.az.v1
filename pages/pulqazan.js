import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InputCustomized from "@/src/components/buttons/input";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";

function PulQazan() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row ">
        <h4 className="block lg:hidden font-semibold text-[16px] leading-[24px] text-center pb-[15px]">
          PulQazan
        </h4>

        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#EAEAEA] w-full">
          <div className="lg:w-2/5 lg:pr-[40px] xl:pr-[80px] 2xl:pr-[120px] pb-[15px] lg:pb-0">
            <p className="font-semibold lg:font-bold text-[12px] lg:text-[20px] leading-[18px] lg:leading-[30px] text-black500 pb-[5px] lg:pb-[30px]">
                  Gün ərzində 100 AZN qazanmaq şansı!
            </p>

            <div className="h-full flex flex-col gap-y-[15px] lg:gap-y-0 lg:justify-between font-normal lg:font-medium text-[12px] lg:text-[16px] leading-[22px] lg:leading-[34px]  text-gray900">
                
                <div className="">
                  <p>
                  Oturduğunuz yerdə pul qazanmaq istəyirsiniz? Bu əla fürsəti
                  sizə cagir.az verir. Bunun üçün:</p>
                </div>

                <div >
                  <p className="flex flex-col">
                  <span>1. Məlumatları doldurursunuz</span>
                  <span>
                    2. Dostunuzun email qutusuna xidmətlərdən istifadə üçün keçid
                    göndərilir
                  </span>
                  <span>
                    3. Dostunuzun hər hansı cagir.az xidmətinə ehtiyacı olduqda bu
                    keçid vasitəsilə sifarişverir və siz hər verilən sifarişə görə
                    10 AZN qazanırsınız
                  </span>
                  <span className="">
                    4. Sifariş tamamlandıqdan sonra cagir.az tərəfindən email alır
                    və mükafatınızı əldə edirsiniz
                  </span>
                  </p>
                </div>

                <div>
                  <p>
                  Qeyd: Bu əməliyyatı istənilən sayda müxtəlif dostlarınıza
                  göndərə bilərsiniz.
                  </p>
                </div>
            </div>
            
          </div>




          <div className="flex flex-col lg:w-3/5 lg:pl-[20px] xl:pl-[70px] 2xl:pl-[120px] pt-[20px] lg:pt-0">
            <h4 className="hidden lg:block font-bold text-[28px] leading-[42px] text-start pb-[30px]">
              PulQazan!
            </h4>
            <div className="flex flex-col gap-y-[15px] justify-between">
              <InputCustomized label="Göndərən şəxsin adı" />
              <InputCustomized label="Göndərən şəxsin emaili" />
              <InputCustomized label="Göndərən şəxsin nömrəsi" />
              <InputCustomized label="Alan şəxsin emaili" />
              <InputCustomized label="Alan şəxsin adı" />
              <InputCustomized label="Alan şəxsin nömrəsi" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end pt-[20px] xl:pt-[25px] 2xl:pt-[30px]">
        <PrimarySmBtn btnName="Təsdiq et" classNames="" />
      </div>
    </div>
  );
}

export default PulQazan;
