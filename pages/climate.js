import React from "react";
import axios from "axios";
import Head from "next/head";
import Badge from "@/src/components/others/badge";
import SubServiceForReklam from "@/src/components/service/subServicesTrendforReklam";
import SubServiceNoTrendforReklam from "@/src/components/service/subServicesNoTrendforReklam";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Reels from "@/src/components/main/reels"
import az from "@/data/az.json";

const Page = ({ mainServiceData, subServices, parentId }) => {
  const chosenLang = "az";
  const messages = az;
  const { serviceNames } = mainServiceData;
  const { text: textService, metaTitle,metaDescription } = serviceNames?.[0] || {};

  const containerClass = `
    flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
    lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
    pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px]
    pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]
  `;

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
        />
      </Head>
      <Badge {...{ chosenLang, messages }} />
      <SubServiceForReklam
        {...{ mainServiceData, subServices, chosenLang, messages }}
      />
      <div className={containerClass}>
        <SubServiceNoTrendforReklam
          {...{ mainServiceData, subServices, chosenLang, messages }}
        />
        <Reels/>
        <Reyler {...{ parentId, chosenLang, messages }} />
        <Icracilar {...{ parentId, chosenLang, messages }} />
        <div>
          <h2 className="my-h2 mb-[15px] text-center ">
            {messages.description}
          </h2>
          <div
            className="text-[10px] lg:text-[16px] leading-[18px] lg:leading-[34px] font-normal lg:font-medium text-[#959595]"
            dangerouslySetInnerHTML={{
              __html: (textService || "") // Ensure textService is not null or undefined
                .replaceAll(
                  "<ul>",
                  '<ul class="list-disc pt-[3px] pb-[7px] ml-[17px]">'
                )
                .replaceAll("<p", '<p class=""')
                .replaceAll("<span", "<span class=''"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

// Separate function for fetching mainServiceData
async function fetchMainServiceData(mainServiceUrl, chosenLang) {
  try {
    const response = await axios.post(
      "https://api.cagir.az/api/service/service-name",
      { titleUrl: "kondisioner-ustasi" },
      {
        headers: {
          "Accept-Language": "az",
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
    return {};
  }
}

// Separate function for fetching subServices
async function fetchSubServices(parentId, chosenLang) {
  try {
    const response = await axios.get(
      `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${1539}`,
      {
        headers: {
          "Accept-Language": "az",
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getServerSideProps(context) {
  const mainServiceUrl = "kondisioner-ustasi";
  const chosenLang = context.locale || "az";
  const mainServiceData = await fetchMainServiceData(
    mainServiceUrl,
    chosenLang
  );
  const subServices = await fetchSubServices(mainServiceData.id, chosenLang);
  return {
    props: {
      mainServiceData,
      subServices,
      chosenLang,
      parentId: 1539,
    },
  };
}
