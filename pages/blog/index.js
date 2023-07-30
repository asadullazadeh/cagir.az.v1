import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import views from "@/icons/bloq/views.svg";
import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import SearchInputMd from "@/src/components/input/input_search_md";
import Router from "next/router";

function Blogs() {
  const [size, setSize] = useState(0);
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/post/getAll?size=${size}`, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        const newData = response.data.result;
        setResponseData((prevData) => [...prevData, ...newData]);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [size]);

  const handleClick = () => {
    setSize((prevSize) => prevSize + 1);
  };

  console.log(responseData);

  return (
    <div className="">
      <h2 className="my-h2 mb-[15px] lg:mb-[30px] text-center">Bloq</h2>
      <div className="flex justify-center">
        <SearchInputMd />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:gap-[60px] px-[10px] justify-between">
        {Object.keys(responseData).map((childObjectName, index) => {
          const { shortDescription, postId, title } =
            responseData[childObjectName].postNames[0];
          const {
            id,
            adImageUrl,
            imageUrl,
            nameUrl,
            titleUrl,
            viewCount,
            insertDate,
            categoryName,
            category
          } = responseData[childObjectName];
          // console.log(category);
          return (
            <div key={index}>
              <div className="drop-shadow-card lg:drop-shadow-none hover:drop-shadow-card transition duration-300 bg-white p-[15px] sm:p-[18px] md:p-[21px] lg:p-[24px] lx:p-[27px] 2xl:p-[30px] rounded-[20px] 2xl:rounded-[25px]">
                <Link href={`/blog/${titleUrl}/${id}`}>
                  <Image
                    width={360}
                    height={257}
                    src={`https://api.cagir.az${imageUrl}`}
                    alt={nameUrl}
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
                    <Link href={`blog/kateqoriya/${category.titleUrl}`}>
                    <p className="font-semibold	text-[10px] leading-[15px] text-cagiraz px-[10px] py-[4px] ">
                      {categoryName}
                    </p></Link>
                    
                  </div>
                </div>
                <Link href={`blog/${titleUrl}`}>
                  <h5 className="my-h5 mt-[5px] lg:mt-[15px]">{title}</h5>
                </Link>

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
                      className="font-extrabold text-[14px] leading-[21px]"
                      href={`blog/${titleUrl}/${id}`}
                    >
                      Ətrafli oxu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        onClick={handleClick}
        className="flex items-center justify-center max-w-[155px] mx-auto rounded-[25px] mt-[15px] lg:mt-[30px]"
      >
          <PrimaryOutlineSmBtn btnName="Daha çox gör" />
      </div>
    </div>
  );
}

export default Blogs;
