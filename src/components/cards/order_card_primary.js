import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import arrow_mobile from "@/icons/arrow_mobile.svg";

const OrderCardPrimary = ({ responseData }) => {
  console.log(responseData);
  return (
    <div>
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Xidmətlər</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
        {/*parentObject to responseData */}
        {/* Accessing the parentObject prop */}
        {Object.keys(responseData)
          .slice(0, 6)
          .map((childObjectName, index) => {
            const { description, id, name, text, titleUrl, trendText } =
              responseData[childObjectName].serviceNames[0];
            const { imageUrl, nameUrl } = responseData[childObjectName];

            return (
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <div
                  key={index}
                  className="block rounded-[10px] lg:rounded-[25px] bg-white p-[11px] lg:p-[26px]  group
                hover:drop-shadow-card transition duration-300 "
                >
                  <Link href={titleUrl}>
                    <div className="relative mb-[5px] lg:mb-[15px]">
                      <Image
                        width={367}
                        height={283}
                        src={`https://api.cagir.az/${imageUrl}`}
                        alt={name}
                        className="rounded-[5px] sm:rounded-[20px] w-full aspect-[123/96] object-cover object-center"
                      />
                    </div>
                    <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500"></h5>
                    <div className="flex flex-row items-center justify-between">
                      <div className="">
                        <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
                          {name}
                        </h5>
                      </div>

                      <div className="">
                        <div className=" hidden group-hover:block transition duration-300">
                          <Image
                            src={arrow}
                            alt="arrow_icon"
                            className="hidden lg:block"
                          />
                          <Image
                            src={arrow_mobile}
                            alt="arrow_mobile_icon"
                            className="block lg:hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderCardPrimary;
