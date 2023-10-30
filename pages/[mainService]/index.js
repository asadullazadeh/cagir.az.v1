import React from "react";
import axios from "axios";
import Head from "next/head";
import Badge from "@/src/components/others/badge";
import SubServiceTrend from "@/src/components/service/subServicesTrend";
import SubServiceNoTrend from "@/src/components/service/subServicesNoTrend";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import Reels from "@/src/components/main/reels";
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
        <meta
          name="description"
          content={mainServiceData.serviceNames[0].metaDescription}
        />
        <title>{metaTitle}</title>
      </Head>
      <Badge {...{ chosenLang, messages }} />
      <SubServiceTrend
        {...{ mainServiceData, subServices, chosenLang, messages }}
      />
      <div className={containerClass}>
        <SubServiceNoTrend
          {...{ mainServiceData, subServices, chosenLang, messages }}
        />
        <Reyler {...{ parentId, chosenLang, messages }} />
        <Icracilar {...{ parentId, chosenLang, messages }} />
        {/* <Reels /> */}
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

export async function getStaticProps(context) {
  const mainServiceUrl = context.params.mainService; // Changed from context.query to context.params
  const chosenLang = context.locale || "az";

  const mainServiceData = await fetchMainServiceData(mainServiceUrl, chosenLang);

  if (!mainServiceData || !mainServiceData.id) {
    return {
      notFound: true
    };
  }

  const subServices = await fetchSubServices(mainServiceData.id, chosenLang);
  
  return {
    props: {
      mainServiceData,
      subServices,
      chosenLang,
      parentId: mainServiceData.id,
    },
    revalidate: 3600, // Optionally re-fetch the data every 60 seconds
  };
}

export async function getStaticPaths() {
  // Assuming you have a function that fetches all possible values of mainService. 
  // This is just a placeholder and should be replaced with actual API call or logic.
  const allPossibleMainServiceValues = await fetchAllMainServiceValues();

  const paths = allPossibleMainServiceValues.map((service) => ({
    params: { mainService: service },
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}

// Placeholder for fetchAllMainServiceValues (replace this with actual logic)
async function fetchAllMainServiceValues() {
  // Fetch all the possible values for mainService from your API or source of truth
  // and return them as an array.
  return [];
}