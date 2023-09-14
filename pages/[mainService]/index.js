import React from "react";
import axios from "axios";
import Head from "next/head";
import Badge from "@/src/components/others/badge";
import SubServiceTrend from "@/src/components/service/subServicesTrend";
import SubServiceNoTrend from "@/src/components/service/subServicesNoTrend";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import { useIntl } from "react-intl";

const Page = ({ mainServiceData, subServices, chosenLang, parentId }) => {
  const intl = useIntl();
  const messages = intl.messages;
  const { serviceNames } = mainServiceData;
  const { text: textService, metaTitle } = serviceNames?.[0] || {};

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
      </Head>
      <Badge {...{ chosenLang }} />
      <SubServiceTrend {...{ mainServiceData, subServices, chosenLang }} />
      <div className={containerClass}>
        <SubServiceNoTrend
          {...{ mainServiceData, subServices, chosenLang, messages }}
        />
        <Reyler {...{ parentId, chosenLang, messages }} />
        <Icracilar {...{ parentId, chosenLang, messages }} />
        <div>
          <h2 className="my-h2 mb-[15px] text-center">
            {messages.description}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: textService }} />
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
      { titleUrl: mainServiceUrl },
      {
        headers: {
          "Accept-Language": chosenLang,
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
      `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${parentId}`,
      {
        headers: {
          "Accept-Language": chosenLang,
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
  const mainServiceUrl = context.query.mainService;
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
      parentId: mainServiceData.id,
    },
  };
}
