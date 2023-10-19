import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Image from "next/image";
import Head from "next/head";
import SocialNetworks from "@/src/components/others/social_ntwrks";
import RelatedMediaPosts from "@/src/components/main/relatedMediaPosts";

function MediaPost({ mediaId }) {
  const [responseData, setResponseData] = useState([]);
  
  const intl = useIntl();
  const messages = intl.messages;

  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/media/getDetail?id=${mediaId}`, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => setResponseData(response.data.result))
      .catch((error) => console.error(error));
  }, [mediaId]);

  const {
    imageUrl,
    mediaNames: [
      { description, shortDescription, title, insertDate,mediaNames } = {},
    ] = [],
  } = responseData;
  return (
    <div>
      <Head>
        <title>Cagir.az - {title}</title>
      </Head>
      <div className="flex flex-col lg:flex-row lg:gap-x-[40px] xl:gap-x-[50px] 2xl:gap-x-[60px] pb-[60px] lg:pb-[90px] pt-[20px] lg:pt-[50px]">
        <div className="w-full lg:w-2/3 pb-[30px] lg:pb-0 drop-shadow-card lg:drop-shadow-none lg:hover:drop-shadow-card transition duration-300">
        <div className="hidden lg:flex flex-row gap-x-[10px]">
          <p className="font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
          {messages.share}: 
            </p>
            
          <SocialNetworks classNames="hidden lg:flex flex-row gap-x-[20px] pb-[30px]" isSharingEnabled={true} />
          </div>
          <Image
            width={300}
            height={300}
            src={`https://api.cagir.az${imageUrl}`}
            alt={title}
            className="rounded-[20px] w-full aspect-[300/164] lg:aspect-[908/499]"
          />
          <div className="flex flex-row justify-between pt-[5px] lg:pt-[30px] pb-[15px] lg:pb-[30px]">
            <p className="font-medium lg:font-semibold text-[8px] lg:text-[14px] leading-[12px] lg:leading-[21px] text-gray900">
              {insertDate?.slice(0, 10)}
            </p>
          </div>
          <h2 className="my-h2 pt-[5px] lg:pt-[10px] pb-[5px] lg:pb-[20px]">
            {responseData.mediaNames?.[0].title}
            </h2>
          <div
            className="font-semibold text-[#959595]"
            dangerouslySetInnerHTML={{
              __html: (description || "")
                ?.replaceAll(
                  "<ul>",
                  '<ul class="list-disc list-inside pt-[3px] pb-[7px]">'
                )
                .replaceAll("<a", '<a class="text-cagiraz"')
                .replaceAll("<span", '<span class=""'),
            }}
          />
          <div className="flex flex-row items-center gap-x-[10px] pt-[10px] lg:pt-[30px]">
          <p className="font-semibold non-italic tracking-[0.02em] text-[14px] leading-[22px] text-black500">
          {messages.share}: 
            </p>
          <SocialNetworks classNames="flex flex-row gap-x-[20px] " isSharingEnabled={true} />
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col lg:gap-y-[40px]">
          <RelatedMediaPosts />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      mediaId: context.query.id,
    },
  };
}

export default MediaPost;
