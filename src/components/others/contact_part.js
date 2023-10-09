import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Head from "next/head";
import TeamCard from "@/src/components/cards/team_card"
import phone from "@/icons/phone.svg";
import phone_black from "@/icons/phone_black.svg";
import envelope from "@/icons/envelope.svg";
import SocialNetworks from "@/src/components/others/social_ntwrks";


function Contact_Part() {
  return (
    <div className="grid grid-cols-3 items-center bg-cagiraz w-full px-[50px]  py-[20px] rounded-[20px]">
            <div class="col-span-1 w-[60px] h-[60px] bg-white rounded-full flex justify-center">
              <Image src={phone_black} alt="phone_icon" className=" " />
            </div>
            <div class="flex flex-col gap-[10px] items-center col-span-1">
              <p className="text-white">Əlaqə nömrəsi:</p>
              <div className="flex flex-row bg-white items-center py-[3px] px-[15px] gap-x-[10px] rounded-full">
                <Link href="tel:+994703482606">
                  <p className="font-semibold text-[14px] leading-[21px]">
                    +994 70 348 26 06
                  </p>
                </Link>
                <p className="text-[#959595]">7/24</p>
              </div>
              <div className="flex flex-row items-center gap-x-[5px]">
                <Link href="tel:+994703482606">
                  <p className="font-semibold text-[14px] leading-[21px] text-white">
                    +994 70 348 26 06
                  </p>
                </Link>
                <p className="font-semibold text-[14px] leading-[21px]">
                  -Həftə içi, 10<sup class="text-[8px]">00</sup>-18
                  <sup class="text-[8px]">00</sup>
                </p>
              </div>
            </div>
          </div>
  );
}

export default Contact_Part;
