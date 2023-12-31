import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import memnuniyyet from "@/icons/deyerler/memnuniyyet.svg";
import kefiyyet from "@/icons/deyerler/kefiyyet.svg";
import pesekar from "@/icons/deyerler/pesekar.svg";
import qenaet from "@/icons/deyerler/qenaet.svg";
function Deyerler({ messages, chosenLang }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/adminDictionary/getAll?dictionaryType=2`, {
        headers: {
          "Accept-Language": chosenLang,
        },
      })
      .then((response) => {
        // Handle the response data
        setData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [chosenLang]);

  return (
    <div>
      <h2 className="my-h2 mb-[15px] lg:mb-[60px] text-center">
        {messages["our-values"]}
      </h2>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-x-[10px] sm:gap-x-[40px] md:gap-x-[70px] lg:gap-x-[100px] xl:gap-x-[130px] 2xl:gap-x-[156px] 
            gap-y-[15px]"
      >
        {data.map(({ index, title, text, imageUrl, id }) => (
          <div key={index}>
            <div className="flex flex-col">
              <div className="flex justify-center items-center w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] mb-[15px] lg:mb-[30px]">
                <Image
                  src={
                    id === 37
                      ? pesekar
                      : id === 31
                      ? qenaet
                      : id === 34
                      ? memnuniyyet
                      : kefiyyet
                  }
                  alt={title}
                  className=""
                  width={200}
                  height={200}
                />
              </div>

              <h5 className="mb-[5px] my-h5">{title}</h5>

              <p className="font-medium lg:font-semibold text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-[12px] sm:leading-[15px] md:leading-[18px] lg:leading-[21px] text-gray900">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deyerler;
