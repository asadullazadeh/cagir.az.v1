import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import arrow from "@/icons/arrow.svg";
import arrow_mobile from "@/icons/arrow_mobile.svg";

function ButunXidmetler({ services }) {
  const { messages } = useIntl();

  return (
    <div>
      <Head>
        <title>Cagir.az - Bütün xidmətlər</title>
      </Head>
      <div className="flex flex-col sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] py-[60px] sm:py-[75px] md:py-[90px] lg:py-[105px] xl:py-[120px] 2xl:py-[135px]">
        <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">
          {messages.services}
        </h2>
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
          {services.map(({ id, imageUrl, nameUrl, serviceNames }) => (
            <li key={id}>
              <Link
                href={nameUrl}
                className="block rounded-[10px] lg:rounded-[25px] bg-white p-[11px] lg:p-[26px] group hover:drop-shadow-card transition duration-300"
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
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
                      {item.name}
                    </h5>
                    <div className="hidden group-hover:block transition duration-300">
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
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  
  try {
    const response = await axios.get("https://api.cagir.az/api/service/getAllForFront", {
      headers: {
        "Accept-Language": locale,
      },
    });

    return {
      props: {
        services: response.data.result
      },
      revalidate: 3600 // optional: set a revalidation time in seconds if you want to refresh the data periodically
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true // This will return a 404 page if there's an error, but you can handle errors as you see fit.
    };
  }
}

export default ButunXidmetler;
