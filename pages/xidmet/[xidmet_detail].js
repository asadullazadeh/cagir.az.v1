import React, { useEffect, useState } from "react";
import axios from "axios";
import { useIntl } from "react-intl";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Reyler from "@/src/components/main/reyler";
import Musteriler from "@/src/components/main/musteriler";

function XidmetDetail({ xidmetDetail }) {
  const [responseData, setResponseData] = useState({});
  const intl = useIntl();

  useEffect(() => {
    axios
      .post(
        "https://api.cagir.az/api/serviceInfo/detail",
        { titleUrl: xidmetDetail },
        { headers: { "Accept-Language": "az" } }
      )
      .then((response) => setResponseData(response.data.result))
      .catch((error) => console.error(error));
  }, [xidmetDetail]);

  const {
    imageUrl,
    insertDate,
    serviceInfoNames,
    serviceInfoTags,
    titleUrl,
    viewCount,
    metaDescription,
    metaTitle
  } = responseData;
  const { description = "" } = serviceInfoNames?.[0] || {};
  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />
      </Head>
      <div className="flex flex-col items-center py-[15px] lg:py-[30px]">
        <div className="flex flex-col w-full  gap-y-[30px] lg:gap-y-[60px]">
          <div className="flex flex-col pb-[30px] lg:pb-0 drop-shadow-card lg:drop-shadow-none lg:hover:drop-shadow-card transition duration-300">
            <Image
              width={1000}
              height={900}
              src={`https://api.cagir.az${imageUrl}`}
              alt={titleUrl}
              className="rounded-[20px] w-full aspect-[300/164] lg:aspect-[908/499] "
            />
            <div className="flex flex-row justify-between pt-[5px] lg:pt-[30px] pb-[15px] lg:pb-[30px]">
              <p className="font-medium lg:font-semibold text-[8px] lg:text-[14px] leading-[12px] lg:leading-[21px] text-gray900">
                {insertDate ? insertDate.slice(0, 10) : ""}
              </p>
              <p className="font-semibold text-[10px] lg:text-[18px] leading-[15px] lg:leading-[27px] text-cagiraz">
                Sifariş sayı: {viewCount}
              </p>
            </div>
            <h2 className="my-h2 pt-[5px] lg:pt-[10px] pb-[5px] lg:pb-[20px]">
              {serviceInfoNames?.[0].title}
              </h2>

            <div
              dangerouslySetInnerHTML={{
                __html: description
                  .replaceAll(
                    "<ul>",
                    '<ul class="list-disc list-inside pt-[3px] pb-[7px]'
                  )
                  .replaceAll("<a", '<a class="font-semibold text-cagiraz"')
                  .replaceAll("<span", '<span class="text-[#959595]"'),
              }}
            />
          </div>
          {serviceInfoTags?.length > 0 && (
            <div>
              <h4 className="font-semibold lg:font-bold text-[16px] lg:text-[20px] lg:leading-[30px] leading-[24px] pb-[15px] pt-[30px] lg:pt-0 text-center lg:text-start border-t border-[#EAEAEA] lg:border-none">
                Təqlər
              </h4>
              <div className="flex flex-row flex-wrap gap-[10px] lg:gap-[15px]">
                {serviceInfoTags.map(({ name }, index) => (
                  <div key={index}>
                    <Link href={`/xidmet/tag/${name}`}>
                      <p className="font-medium lg:font-semibold text-[10px] lg:text-[12px] leading-[15px] lg:leading-[16px] border border-cagiraz rounded-[5px] py-[2px] lg:py-[4px] px-[8px] lg:px-[10px] text-cagiraz">
                        {name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Reyler {...{ messages: intl.messages }} parentId={1} />
          <Musteriler {...{ messages: intl.messages }} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      xidmetDetail: context.query.xidmet_detail,
    },
  };
}

export default XidmetDetail;
