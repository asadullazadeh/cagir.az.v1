import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import Sifaris from "@/src/components/sifaris";

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

async function fetchMainServices(chosenLang) {
  try {
    const response = await axios.get(
      "https://api.cagir.az/api/service/getAllForFront",
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

function Sub2Service({ dataMain, chosenLang }) {
  const [selectedMain, setSelectedMain] = useState("");
  const [getSubServices, setGetSubServices] = useState([]);
  const [subUrlFromSifaris, setSubUrlFromSifaris] = useState("");
  const router = useRouter();
  const { mainService, subService } = router.query;
  const handleSelectedMain = (newValue) => {
    setSelectedMain(newValue);
  };

  const findMainInfoByName = (mainServices, name) =>
    mainServices.find((obj) => obj.serviceNames[0].name === selectedMain) || {};
  const defaultMain = findMainInfoByName(dataMain, selectedMain);

  useEffect(() => {
    if (defaultMain.id) {
      fetchSubServices(defaultMain.id, chosenLang).then(setGetSubServices);
    }
  }, [defaultMain.id, chosenLang]);

  const handleReceiveData = (data) => {
    setSubUrlFromSifaris(data);
  };

  const findSubInfoByNameUrl = (subServices, nameUrl) =>
    subServices.find((obj) => obj.nameUrl === subService);
  const defaultSub = findSubInfoByNameUrl(getSubServices, subService);

  const pathMain = !defaultMain.nameUrl ? mainService : defaultMain.nameUrl;
  const pathSub = subService
  // subUrlFromSifaris ||  getSubServices[0]?.nameUrl || subService 

  const newPath = `/${pathMain}/${pathSub}`;
  // console.log(subUrlFromSifaris || defaultSub?.[0]?.nameUrl ||  getSubServices[0]?.nameUrl || subService )
  // console.log(!subUrlFromSifaris || typeof subUrlFromSifaris === "undefined"
  // ? getSubServices[0]?.nameUrl
  // : subUrlFromSifaris);
  // defaultSub evvel secileni sonra en birinci elementi goturur.
  console.log("subUrlFromSifaris:",subUrlFromSifaris)
  console.log("defaultSub?.[0]?.nameUrl:",defaultSub?.[0]?.nameUrl)
  console.log("getSubServices[0]?.nameUrl:",getSubServices[0]?.nameUrl)
  console.log("subService:",subService)

  // console.log("subUrlFromSifaris typeof:", typeof subUrlFromSifaris);
  // console.log("subUrlFromSifaris length:",subUrlFromSifaris?.length);
  // console.log("subUrlFromSifaris:",subUrlFromSifaris);

  // console.log("subService:", subService);
  // console.log("getSubServices[0]?.nameUrl:", getSubServices[0]?.nameUrl);

  useEffect(() => {
    router.replace(newPath);
  }, [newPath]);

  const findMainInfoByNameUrlNew = (mainServices, nameUrl) =>
    mainServices.find((obj) => obj.nameUrl === mainService) || {};
  const defaultMainNew = findMainInfoByNameUrlNew(dataMain, selectedMain);

  return (
    <div>
      <Head>
        <title>Sifariş yarat</title>
      </Head>
      <div>
        <Sifaris
          getMainServices={dataMain}
          {...{ getSubServices }}
          sendSubUrl={handleReceiveData}
          defaultMain={defaultMainNew}
          {...{ defaultSub }}
          onSelectedMainChange={handleSelectedMain}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const chosenLang = context.locale || "az";
  const dataMain = await fetchMainServices(chosenLang);

  return {
    props: { dataMain, chosenLang },
  };
}

export default Sub2Service;
