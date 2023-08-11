import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Sifaris from "@/src/components/sifaris";

function Sub2Service({ dataMain }) {
  // selectedNames array from sifaris
  const [selectedNamesArray, setSelectedNamesArray] = useState("");
  const handleSelectedNamesArray = (data) => {
    setSelectedNamesArray(data);
  };
  //
  const findMainNameUrlByName = (mainServices, name) => {
    const mainServiceUrl =
      mainServices.find(
        (obj) => obj.serviceNames[0].name === selectedNamesArray[0]
      ) || {};
    return mainServiceUrl || null;
  };
  const defaultMainService = findMainNameUrlByName(
    dataMain,
    selectedNamesArray[0]
  );

  //
  const router = useRouter();
  // // main and sub urls
  const { mainService, subService } = router.query;
  const mainServiceUrl = defaultMainService.nameUrl;
  const subServiceUrl = subService;

  const findMainInfoByNameUrl = (mainServices, nameUrl) => {
    const mainService =
      mainServices.find((obj) => obj.nameUrl === mainServiceUrl) || {};
    return mainService || null;
  };

  const defaultMain = findMainInfoByNameUrl(dataMain, mainServiceUrl);

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

  const findSubInfoByNameUrl = (subServices, nameUrl) => {
    const subService =
      subServices.find((obj) => obj.nameUrl === subServiceUrl) || {};
    return subService;
  };
  const defaultSub = findSubInfoByNameUrl(getSubServices, subServiceUrl);

  // console.log(defaultSub.nameUrl);
  //
  const [subUrlFromSifaris, setSubUrlFromSifaris] = useState("");

  const handleReceiveData = (data) => {
    setSubUrlFromSifaris(data); // Update state with the received data
  };

  // Check for the old path and redirect to the new pathsubServiceUrl
  const previousPath = `/${mainServiceUrl}/${subUrlFromSifaris}`;
  // console.log(previousPath);

  const newPathWhenMainChanges = `/${mainServiceUrl}/${getSubServices?.[0]?.nameUrl}`;
  const newPathWhenSubChanges = `/${mainServiceUrl}/${subUrlFromSifaris}`;
  // Check for the old path and redirect to the new path

  useEffect(() => {
    router.replace(newPathWhenMainChanges); // Update the URL when subUrlFromSifaris changes
  }, [router, newPathWhenMainChanges]);

  useEffect(() => {
    router.replace(newPathWhenSubChanges); // Update the URL when subUrlFromSifaris changes
  }, [router, newPathWhenSubChanges]);

  return (
    <div>
      <Sifaris
        sendSubUrl={handleReceiveData}
        defaultMain={defaultMain}
        defaultSub={defaultSub}
        onSelectedNamesArray={handleSelectedNamesArray}
      />
      {/* <button onClick={handleReplaceSubService}>Replace Path</button> */}
    </div>
  );
}

export async function getServerSideProps() {
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
    // console.log(dataMain);
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
