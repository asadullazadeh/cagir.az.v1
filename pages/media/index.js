import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useIntl } from "react-intl";

function Media(props) {
  const { responseData } = props;

  const intl = useIntl();
  const messages = intl.messages;

  return (
    <div>
      <Head>
        <title>Cagir.az - Media</title>
      </Head>
      <div className="py-[15px] lg:py-[30px]">
        <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">
          {messages.media}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
          {responseData.map(
            ({ imageUrl, insertDate, mediaNames, index, id }) => (
              <div key={index}>
                <div className="drop-shadow-card lg:drop-shadow-none hover:drop-shadow-card transition duration-300 bg-white p-[15px] sm:p-[18px] md:p-[21px] lg:p-[24px] lx:p-[27px] 2xl:p-[30px] rounded-[20px] 2xl:rounded-[25px]">
                  <Link href={`/media/media-detail/${id}`}>
                    <Image
                      width={360}
                      height={257}
                      src={`https://api.cagir.az${imageUrl}`}
                      alt={mediaNames}
                      className="rounded-[10px] lg:rounded-[20px] w-full aspect-[360/257]"
                    />
                  </Link>
                  <div className="flex justify-between mt-[10px] lg:mt-[15px] items-center">
                    <p
                      className="font-semibold text-[10px] lg:text-[14px] leading-[15px] 
              lg:leading-[21px] text-gray900 lg:text-gray400"
                    >
                      {insertDate.slice(0, 10)}
                    </p>
                  </div>
                  <Link href={`/media/media-detail/${id}`}>
                    <h5 className="my-h5 mt-[5px] lg:mt-[15px]">
                      {mediaNames[0].title}
                    </h5>
                  </Link>
                  <p
                    className="font-semibold text-[10px] lg:text-[14px] leading-[15px] 
            lg:leading-[21px] text-gray900 mt-[5px] "
                  >
                    {mediaNames[0].shortDescription}
                  </p>
                  <div className="flex justify-between mt-[5px] lg:mt-[15px] text-cagiraz">
                    <div className="ml-auto">
                      <Link
                        className="font-extrabold text-[14px] leading-[21px]"
                        href={`/media/media-detail/${id}`}
                      >
                        Ətrafli oxu
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Media;



export async function getStaticProps() {
  try {
    const response = await axios.get(`https://api.cagir.az/api/media/getAll`, {
      headers: {
        "Accept-Language": "az",
      },
    });
    return {
      props: {
        responseData: response.data.result
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        responseData: []  // You can return an empty array or handle it however you'd like.
      }
    };
  }
}
