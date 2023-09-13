import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import RelatedBlogs from "@/src/components/blog/relatedBlogs";
import CategoriesBlog from "@/src/components/blog/categoriesBlog";
import SocialNetworks from "@/src/components/others/social_ntwrks";

function TagsBlog({ blogId,messages, chosenLang}) {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/post/detail?id=${blogId}`, {
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
  }, [blogId]);
  const { id, imageUrl, viewCount, insertDate, postNames, tags, categoryId } =
    responseData;
  
  return (
    <div className="">
      <h4
        className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start
            border-t border-[#EAEAEA] lg:border-none"
      >
        Təqlər
      </h4>
      {tags && tags.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-[10px] lg:gap-[15px]">
          {tags.map(({ name, index }) => (
            <div key={index}>
              <Link href={`/blog/tag/${name}`}>
                <p
                  className="font-medium lg:font-semibold text-[8px] lg:text-[10px] leading-[12px] lg:leading-[15px]
                  border border-cagiraz rounded-[5px] py-[2px] lg:py-[4px] px-[8px] lg:px-[10px] text-cagiraz"
                >
                  {name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TagsBlog;
