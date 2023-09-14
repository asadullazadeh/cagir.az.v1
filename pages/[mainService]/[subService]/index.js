import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Sifaris from "@/src/components/sifaris";

function Sub2Service({ dataMain }) {
  // selectedMain from sifaris
  const [selectedMain, setSelectedMain] = useState("");
  // Callback function to update the value in the parent component
  const handleSelectedMain = (newValue) => {
    setSelectedMain(newValue);
  };

  const router = useRouter();
  // // main and sub urls
  const { mainService, subService } = router.query;
  const mainServiceUrl = mainService;
  const subServiceUrl = subService;

  //
  const findMainInfoByName = (mainServices, name) => {
    const mainService =
      mainServices.find((obj) => obj.serviceNames[0].name === selectedMain) ||
      {};
    return mainService || null;
  };
  const defaultMain = findMainInfoByName(dataMain, selectedMain);

  const [getSubServices, setGetSubServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${defaultMain.id}`,
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setGetSubServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [defaultMain.id]);

  const [subUrlFromSifaris, setSubUrlFromSifaris] = useState("");

  const handleReceiveData = (data) => {
    setSubUrlFromSifaris(data); // Update state with the received data
  };

  const findSubInfoByNameUrl = (subServices, nameUrl) => {
    const subService =
      subServices.find((obj) => obj.nameUrl === subServiceUrl) || {};
    return subService;
  };
  const defaultSub = findSubInfoByNameUrl(getSubServices, subServiceUrl);

  
  //bu main page'den gelende

  // const pathMain = !defaultMain.nameUrl ? mainServiceUrl : defaultMain.nameUrl;
  // const pathSub =
  //   (subUrlFromSifaris ?? defaultSub.nameUrl) || getSubServices[0]?.nameUrl;
  // //
  // const newPath = `/${pathMain}/${pathSub}`;
  // useEffect(() => {
  //   router.replace(newPath);
  // }, [newPath]);



  // this takes the last mainService infos to the sifaris page
  const findMainInfoByNameUrlNew = (mainServices, nameUrl) => {
    const mainService =
      mainServices.find((obj) => obj.nameUrl === mainServiceUrl) || {};
    return mainService || null;
  };
  const defaultMainNew = findMainInfoByNameUrlNew(dataMain, selectedMain);

  

  return (
    <div>
      <Head> <title>Sifariş yarat</title></Head>
    <div>
      <Sifaris
        sendSubUrl={handleReceiveData}
        defaultMain={defaultMainNew}
        {...{defaultSub}}
        onSelectedMainChange={handleSelectedMain}
      />
      {/* <button onClick={handleReplaceSubService}>Replace Path</button> */}
    </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const response = await axios.get(
      "https://api.cagir.az/api/service/getAllForFront",
      {
        headers: {
          "Accept-Language": "az",
          // Add any other headers you need
        },
      }
    );

    const dataMain = response.data.result; // Adjust the dataMain structure according to your API response
    return {
      props: { dataMain },
    };
  } catch (error) {
    console.error(error);

    return {
      props: { dataMain: [] }, // You can return an empty array or an error message as needed
    };
  }
}

export default Sub2Service;
