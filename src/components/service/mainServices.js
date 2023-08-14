import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import arrow_mobile from "@/icons/arrow_mobile.svg";

function Xidmetler() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Xidmətlər</h2>
      {/* <OrderCardPrimary /> */}
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
        {responseData
          ?.slice(0, 6)
          .map(({ id, imageUrl, nameUrl, serviceNames }) => (
            <li key={id}>
              <Link
                href={nameUrl}
                passHref
                className="block rounded-[10px] lg:rounded-[25px] bg-white p-[11px] lg:p-[26px]  group
              hover:drop-shadow-card transition duration-300 "
              >
                <div className="relative mb-[5px] lg:mb-[15px]">
                  <Image
                    width={367}
                    height={283}
                    src={`https://api.cagir.az${imageUrl}`}
                    alt={nameUrl}
                    className="rounded-[5px] sm:rounded-[20px] w-full aspect-[123/96] object-cover object-center"
                  />
                </div>

                {serviceNames.map((item, index) => (
                  <div key={index}>
                    <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500"></h5>
                    <div className="flex flex-row items-center justify-between">
                      <div className="">
                        <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
                          {item.name}
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
                  </div>
                ))}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Xidmetler;
