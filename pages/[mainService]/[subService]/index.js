import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Sifaris from "@/src/components/sifaris";

async function fetchSubServices(parentId) {
  try {
    const response = await axios.get(
      `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${parentId}`,
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

async function fetchMainServices() {
  try {
    const response = await axios.get(
      "https://api.cagir.az/api/service/getAllForFront",
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

function Sub2Service({ dataMain }) {
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
      fetchSubServices(defaultMain.id).then(setGetSubServices);
    }
  }, [defaultMain.id]);

  const handleReceiveData = (data) => {
    setSubUrlFromSifaris(data);
  };

  const findSubInfoByNameUrl = (subServices, nameUrl) =>
    subServices.find((obj) => obj.nameUrl === subService) || {};
  const defaultSub = findSubInfoByNameUrl(getSubServices, subService);

  const pathMain = !defaultMain.nameUrl ? mainService : defaultMain.nameUrl;
  const pathSub =
    (subUrlFromSifaris ?? defaultSub.nameUrl) || getSubServices[0]?.nameUrl;
  const newPath = `/${pathMain}/${pathSub}`;

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
          sendSubUrl={handleReceiveData}
          defaultMain={defaultMainNew}
          defaultSub={defaultSub}
          onSelectedMainChange={handleSelectedMain}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const dataMain = await fetchMainServices();
  return {
    props: { dataMain },
  };
}

export default Sub2Service;
