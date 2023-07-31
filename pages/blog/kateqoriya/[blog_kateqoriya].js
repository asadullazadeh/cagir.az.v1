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

  //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.cagir.az/api/post/getAll?size=0",
          { categoryName: "Psixoloq" },
          config
        );
        setMainServiceData(response.data.result);

        const newParentId = response.data.result.id;
        newParentId(newParentId);

        setSubServices(subService.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    //need to recheck this condition
    if (mainService && !parentId) {
      fetchData();
    }
  }, [config, mainService]);
  console.log(mainServiceData);
  return <div></div>;
}

export default Page;
