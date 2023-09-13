import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import RelatedBlogs from "@/src/components/blog/relatedBlogs";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import img_banner_blog from "@/public/img_banner_blog.png";

function CategoriesBlog({ categoryId, id, messages, chosenLang }) {
  //
  const [categoriesData, setcategoriesData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/category/getAll`, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setcategoriesData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  //
  console.log(categoriesData);

  return (
    <div className="">
      <h4
        className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start
            border-t border-[#EAEAEA] lg:border-none"
      >
        {messages.categories}
      </h4>

      <div className="grid grid-cols-2  gap-[10px] lg:gap-[15px]">
        {Object.keys(categoriesData).map((childObjectName, index) => {
          const { name, title } =
            categoriesData[childObjectName].categoryNames[0];
          const { categoryNames, id, insertDate, isActive, titleUrl } =
            categoriesData[childObjectName];

          // console.log(titleUrl);
          return (
            <div key={index}>
              <Link href={`/blog/kateqoriya/${titleUrl}`}>
                <p
                  className="font-semibold text-[14px] lg:text-[18px] leading-[21px] lg:leading-[27px]
                    text-cagiraz"
                >
                  {name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesBlog;
