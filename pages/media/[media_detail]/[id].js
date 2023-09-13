import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import SocialNetworks from "@/src/components/others/social_ntwrks";


import RelatedMediaPosts from "@/src/components/main/relatedMediaPosts"
function MediaPost() {
  const [responseData, setResponseData] = useState([]);
  const router = useRouter();
  const { query } = router;
  const { media_detail,id } = query;
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale
  const messages = intl.messages
  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/media/getDetail?id=${id}`, {
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
  }, [id]);

  const {
    imageUrl,
    insertDate,
    mediaNames,
  } = responseData;

  const { description,shortDescription, title } =
    responseData.mediaNames && responseData.mediaNames.length > 0
      ? responseData.mediaNames[0]
      : {};
      

  return (
    <div>
      <Head><title>Cagir.az - {mediaNames?.[0].title}</title></Head>
    <div
      className="flex flex-col lg:flex-row lg:gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] 
    pb-[60px] lg:pb-[90px]"
    >
      
      {/* Left part-a full blog description */}
      <div
        className="w-full lg:w-2/3 pb-[30px] lg:pb-0 
      drop-shadow-card lg:drop-shadow-none lg:hover:drop-shadow-card transition duration-300"
      >
        <SocialNetworks classNames="hidden lg:flex flex-row gap-x-[20px] pb-[30px]" />
        <Image
          width={300}
          height={300}
          src={`https://api.cagir.az${imageUrl}`}
          // src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
          alt={title}
          className="rounded-[20px] w-full aspect-[300/164] lg:aspect-[908/499]"
        />
        <div className="flex flex-row justify-between pt-[5px] lg:pt-[30px] pb-[15px] lg:pb-[30px]">
          <p className="font-medium lg:font-semibold text-[8px] lg:text-[14px] leading-[12px] lg:leading-[21px] text-gray900">
            {insertDate ? insertDate.slice(0, 10) : ""}
          </p>
          <p className="font-semibold text-[10px] lg:text-[18px] leading-[15px] lg:leading-[27px] text-cagiraz">
            Baxış: viewCount 
          </p>
        </div>
        {/* <h3 className="my-h2 pb-[5px] lg:pb-[30px]">{title}</h3> */}

        <div dangerouslySetInnerHTML={{ __html: description }} />

        <SocialNetworks classNames="flex flex-row gap-x-[20px] pt-[10px] lg:pt-[30px]" />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col lg:gap-y-[40px]">
        {/* Oxsar yazilar */}
        <RelatedMediaPosts
          
        />
      </div>
    </div>
    </div>
  );
}

export default MediaPost;

