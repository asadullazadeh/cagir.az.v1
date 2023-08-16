import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import arrow_right from "@/icons/arrow_right.svg";
import Head from "next/head";
import Badge from "@/src/components/others/badge";
import SubServiceTrend from "@/src/components/service/subServicesTrend";
import Reels from "@/src/components/main/reels";
import Banner from "@/src/components/main/banner";
import Reyler from "@/src/components/main/reyler";
import Icracilar from "@/src/components/main/icraci";
import SubServiceNoTrend from "@/src/components/service/subServicesNoTrend";
function Page() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    headers: {
      "Accept-Language": "az",
    },
  };
  const router = useRouter();
  // mainService is a path for main services.
  const mainServiceUrl = router.query.mainService;
  console.log(mainServiceUrl);
  // we get the data of "mainService" service

  // subServices for an individual main service.
  //
  const [parentId, setParentId] = useState(null);

// 
const [mainServiceData, setMainServiceData] = useState({});
  useEffect(() => {
    axios
      .post("https://api.cagir.az/api/service/service-name",
      { titleUrl: mainServiceUrl },
       {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setMainServiceData(response.data.result)
        const newParentId = response.data.result.id;
        console.log(newParentId);
        setParentId(newParentId);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [mainServiceUrl]);
  console.log(mainServiceData);
  // 
  const [subServices, setSubServices] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${mainServiceData.id}`,
       {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setSubServices(response.data.result)
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [mainServiceData]);
  console.log(parentId);

  console.log(subServices);
  console.log(mainServiceData);
  const { id, someProperty, serviceNames } = mainServiceData;

  const serviceName = serviceNames?.[0].name
  const textService = serviceNames?.[0].text

  return (
    <div>
      {/* badge */}
      <div className="mt-[30px] lg:mt-[60px]">
        <Badge />
      </div>
      <SubServiceTrend 
      mainServiceData={mainServiceData}
      subServices={subServices}
       />
      <div
        className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
        lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
         pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
         pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
      >
        <SubServiceNoTrend
        mainServiceData={mainServiceData}
        subServices={subServices} />
        {/* <Reels /> */}
        {/* <Banner /> */}
        <Reyler parentId={parentId} />
        <Icracilar parentId={parentId} />

        {/* Tesvir */}
        <div>
          <h2 className="my-h2 mb-[15px] text-center">Təsvir</h2>
          <div dangerouslySetInnerHTML={{ __html: textService }} />
        </div>
      </div>
    </div>
  );
}

export default Page;
