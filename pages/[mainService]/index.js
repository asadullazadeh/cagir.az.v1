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
  const mainService = router.query.mainService;
  // we get the data of "mainService" service
  const [mainServiceData, setMainServiceData] = useState({});
  // subServices for an individual main service.
  const [subServices, setSubServices] = useState([]);
  //
  const [parentId, setParentId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.cagir.az/api/service/service-name",
          { titleUrl: mainService },
          config
        );
        setMainServiceData(response.data.result);

        const newParentId = response.data.result.id;
        setParentId(newParentId);

        const subService = await axios.get(
          `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${newParentId}`,
          config
        );
        setSubServices(subService.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    //need to recheck this condition
    if (mainService && !parentId) {
      fetchData();
    }
  }, [config, mainService, parentId]);

  const { id, someProperty, serviceNames } = mainServiceData;
  const serviceName =
    serviceNames && serviceNames.length > 0 ? serviceNames[0].name : "";
  const textService =
    serviceNames && serviceNames.length > 0 ? serviceNames[0].text : "";
  return (
    <div>
      {/* badge */}
      <div className="mt-[30px] lg:mt-[60px]">
        <Badge />
      </div>
      <SubServiceTrend />
      <div
        className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
        lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
         pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
         pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
      >
        <SubServiceNoTrend />
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
