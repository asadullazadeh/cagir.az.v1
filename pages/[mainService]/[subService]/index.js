import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Sifaris from "@/src/components/sifaris";

function Sub2Service({ dataMain }) {
  const router = useRouter();
  // // main and sub urls
  const { mainService, subService } = router.query;
  const mainServiceUrl = mainService;
  const subServiceUrl = subService;
  console.log(subServiceUrl);
  const findMainInfoByNameUrl = (mainServices, nameUrl) => {
    const mainService =
      mainServices.find((obj) => obj.nameUrl === mainServiceUrl) || {};
    return mainService || null;
  };
  // to get id and text of selected main service, defaultSelectedMainService.id or defaultSelectedMainService.text
  const defaultMain = findMainInfoByNameUrl(dataMain, mainServiceUrl);
  console.log(defaultMain);

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

  console.log(getSubServices);

  const findSubInfoByNameUrl = (subServices, nameUrl) => {
    const subService =
      subServices.find((obj) => obj.nameUrl === subServiceUrl) || {};
    return subService;
  };
  const defaultSub = findSubInfoByNameUrl(getSubServices, subServiceUrl);

  console.log(defaultSub.serviceNames?.[0]?.["name"]);
  //
  const [subUrlFromSifaris, setSubUrlFromSifaris] = useState("");

  const handleReceiveData = (data) => {
    setSubUrlFromSifaris(data); // Update state with the received data
  };
  console.log(subUrlFromSifaris);

  // Check for the old path and redirect to the new path
  const previousPath = `/${defaultMain.nameUrl}/${defaultSub.nameUrl}`;
  const newPath = `/${defaultMain.nameUrl}/${subUrlFromSifaris}`;

  // Check for the old path and redirect to the new path
  // if (router.asPath === previousPath) {
  //   router.replace(newPath);
  // }
  useEffect(() => {
    if (router.asPath === previousPath) {
      router.replace(newPath); // Update the URL when subUrlFromSifaris changes
    }
  }, [router,newPath,previousPath,subUrlFromSifaris]);
  // console.log(router.asPath === `/${defaultMain.nameUrl}/${defaultSub.nameUrl}`);
  // console.log("/" + defaultMain.nameUrl + "/" + defaultSub.nameUrl);

  //
  return (
    <div>
      <Sifaris
        sendSubUrl={handleReceiveData}
        defaultMain={defaultMain}
        defaultSub={defaultSub}
      />
      {/* <button onClick={handleReplaceSubService}>Replace Path</button> */}
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
    console.log(dataMain);
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
