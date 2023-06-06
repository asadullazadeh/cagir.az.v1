import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "@/icons/phone.svg";
import envelope from "@/icons/envelope.svg";
import SocialNetworks from "@/src/components/social_ntwrks";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";

function Elaqe() {
  return (
    <div className="flex items-start justify-center  ">
      <div className="flex flex-col items-center">
        <h4 className="my-h4 pb-[30px] lg:pb-[60px]">Bizimlə əlaqə</h4>
        <p className="flex flex-col font-medium lg:font-semibold text-[12px] lg:text-[18px] leading-[18px] lg:leading-[34px] pb-[60px]">
          <span className="mx-auto">Hər hansı çətinliyiniz var?</span>
          <span className="mx-auto">
            O zaman{" "}
            <span className="text-cagiraz"> Tez-tez verilən suallar </span>
            bölməsinə keçin{" "}
          </span>
          <span className="mx-auto">
            və ya aşağıdakı əlaqə vasitələri ilə bizə yazın
          </span>
        </p>

        <div className="flex flex-col gap-y-[30px] mx-auto">
          {/* email section */}
          <div className="flex flex-row gap-x-[15px]">
            <div className="inline-flex row-span-2 w-[42px] h-[42px] items-center justify-center rounded-full bg-cagiraz">
              <Image src={envelope} alt="envelope_icon" />
            </div>
            <div className="flex flex-col">
              <div class="col-span-1">
                <p className="font-semibold text-[14px] leading-[21px]">
                  {" "}
                  info@cagir.az{" "}
                </p>
              </div>
              <div class="row-span-1 col-span-1">
                <p className="font-semibold text-[14px] leading-[21px]">
                  {" "}
                  hr@cagir.az{" "}
                </p>
              </div>
            </div>
          </div>

          {/* phone section */}
          <div class="grid grid-rows-2 grid-flow-col items-center gap-x-[15px]">
            <div class="flex row-span-2 w-[42px] h-[42px] items-center justify-center rounded-full bg-cagiraz">
              <Image src={phone} alt="phone_icon" />
            </div>
            <div class="row-span-2 col-span-1">
              <p className="font-semibold text-[14px] leading-[21px]">
                {" "}
                +994 70 348 26 06{" "}
              </p>
            </div>
          </div>
          {/* Sosial sebekeler insta, fb, linkedin */}
          <div className="flex flex-col  space-y-[18px]">
            <h6 className="font-semibold lg:font-bold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-black500">
              Biz sosial şəbəkələrdə
            </h6>
            <SocialNetworks classNames="flex flex-row gap-x-[20px]" />
          </div>
        </div>
      </div>

      <SifarishBtn classNames="block lg:hidden bottom-[70px] fixed" />
    </div>
  );
}

export default Elaqe;
