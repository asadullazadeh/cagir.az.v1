import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import views from "@/icons/bloq/views.svg";


function Media() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/media/getAll`, {
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
    <div>
      <Head><title>Cagir.az - Media</title></Head>
    <div className="py-[15px] lg:py-[30px]">
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Media</h2>
      {/* <div className="flex justify-center">
        <SearchInputMd />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
        {responseData.map(({ imageUrl, insertDate, mediaNames, index, id }) => (
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
                <div className="ml-auto border border-cagiraz rounded-lg">
                  <Link href={`/media/media-detail/${id}`}>
                    <p className="font-semibold	text-[10px] leading-[15px] text-cagiraz px-[10px] py-[4px] ">
                      categoryName
                    </p>
                  </Link>
                </div>
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
                <div className="flex flew-row justify-center items-center space-x-[5px]">
                  <Image
                    className="w-[22px] h-[15px]"
                    src={views}
                    alt="views logo"
                  />
                  <div>
                    <p className="font-semibold text-[16px]	lg:text-[18px] leading-[24px] lg:leading-[27px]">
                      viewCount
                    </p>
                  </div>
                </div>
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
        ))}
      </div>
    </div>
    </div>
  );
}

export default Media;
