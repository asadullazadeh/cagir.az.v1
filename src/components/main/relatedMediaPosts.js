import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";


function RelatedMediaPosts() {
  // Related medias
  const [relatedMediaPosts, setrelatedMediaPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.cagir.az/api/media/getRelatives",
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setrelatedMediaPosts(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h4
        className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start
        border-t border-[#EAEAEA] lg:border-none"
      >
        Oxşar yazılar
      </h4>
      <div className="overflow-y-scroll h-[300px]">
      {relatedMediaPosts.map(({id,imageUrl,insertDate,mediaNames,index}) => (
        <div key={index} className="flex flex-row gap-x-[10px] lg:gap-x-[20px] p-[10px]  rounded-[10px] shadow-rectangle4 lg:shadow-none">
            <Image
                src={`https://api.cagir.az${imageUrl}`}
                alt={mediaNames}
                width={400}
                height={400}
                className="w-[54px] h-[54px] sm:w-[84px] sm:h-[84px] 
                  md:w-[104px] md:h-[104px] lg:w-[84px]
                   lg:h-[84px] rounded-[5px] object-center"
              />
              <div className="w-full flex flex-col justify-between lg:justify-normal">
                <Link href={`/media/media-detail/${id}`}>
                  <h4 className="flex flex-wrap font-semibold lg:font-bold text-[12px] lg:text-[12px] leading-[18px] lg:leading-[21px]">
                    {mediaNames[0].title}
                  </h4>
                </Link>
                <div className="flex flex-row justify-between">
                  <p
                    className="lg:order-2 font-medium lg:font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[15px]
                  border border-cagiraz rounded-[5px] py-[2px] lg:py-[4px] px-[8px] lg:px-[10px] text-cagiraz"
                  >
                    subject
                  </p>

                  <p className="lg:order-1 font-medium lg:font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[15px] text-gray900">
                    {insertDate.slice(0, 10)}
                  </p>
                </div>
              </div>
        </div>
      ))}
      </div>
      <div className="flex justify-center pt-[30px] lg:pt-[15px]">
        <Link
          href="/media"
          className="lg:py-[10px] lg:px-[26px]
          font-medium lg:font-extrabold text-cagiraz text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px]"
        >
          Daha çox gör
        </Link>
      </div>
    </div>
  );
}

export default RelatedMediaPosts;
