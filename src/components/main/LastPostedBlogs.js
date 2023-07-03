import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import arrow from "@/icons/arrow.svg";
import arrow_mobile from "@/icons/arrow_mobile.svg";
import views from "@/icons/bloq/views.svg";
import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";

function LastPostedBlogs() {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/post/getRecently", {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
        console.log(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Bloq</h2>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
        {responseData?.map(
          ({
            id,
            imageUrl,
            shortDescription,
            title,
            titleUrl,
            viewCount,
            insertDate,
          }) => (
            <li key={id}>
              <div className="drop-shadow-card lg:drop-shadow-none hover:drop-shadow-card transition duration-300 bg-white p-[15px] sm:p-[18px] md:p-[21px] lg:p-[24px] lx:p-[27px] 2xl:p-[30px] rounded-[20px] 2xl:rounded-[25px]">
                <Image
                  width={360}
                  height={257}
                  src={`https://api.cagir.az${imageUrl}`}
                  alt={title}
                  className="rounded-[10px] lg:rounded-[20px] w-full aspect-[360/257]"
                />

                <div className="flex justify-between mt-[10px] lg:mt-[15px] items-center">
                  <p
                    className="font-semibold text-[10px] lg:text-[14px] leading-[15px] 
              lg:leading-[21px] text-gray900 lg:text-gray400"
                  >
                    {insertDate.slice(0, 10)}
                  </p>
                  <div className="ml-auto border border-cagiraz rounded-lg">
                    {/* what to add for this part? */}
                    <p className="font-semibold	text-[10px] leading-[15px] text-cagiraz px-[10px] py-[4px] ">
                      Mövzu
                    </p>
                  </div>
                </div>

                <h5 className="my-h5 mt-[5px] lg:mt-[15px]">{title}</h5>

                <p
                  className="font-semibold text-[10px] lg:text-[14px] leading-[15px] 
            lg:leading-[21px] text-gray900 mt-[5px] "
                >
                  {shortDescription}
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
                        {viewCount}
                      </p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Link
                      className="font-extrabold	text-[14px] leading-[21px]"
                      href="#"
                    >
                      Ətrafli oxu
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
      <div className="flex items-center justify-center max-w-[155px] mx-auto rounded-[25px] mt-[15px] lg:mt-[30px]">
        <Link href="http://localhost:3000/blog">
          <PrimaryOutlineSmBtn btnName="Hamısına bax" />
        </Link>
      </div>
    </div>
  );
}

export default LastPostedBlogs;
