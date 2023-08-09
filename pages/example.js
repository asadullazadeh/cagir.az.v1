import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import LiveChat from "@/src/components/livechat";

const InputNumber = () => {
  const [getMainServices, setgetMainServices] = useState([]);
  const handleMainSelect = (mainService) => {
    setSelectedMain(mainService);
  };


  useEffect(() => {
    axios
      .post("https://api.cagir.az/api/service/service-name",{
        titleUrl:"temizlik-xidmeti"
      }, {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setgetMainServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  console.log(getMainServices);

  // const findInfoByName = (mainServices, name) => {
  //   const mainService =
  //     mainServices.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
  //   return {
  //     id: mainService?.id || null,
  //     text: mainService?.serviceNames?.[0]?.text || null,
  //   };
  // };
  // // to get id and text of selected main service, selectedMainService.id or selectedMainService.text
  // const selectedMainService = findInfoByName(getMainServices, selectedMain);


  return (
    <div className="flex flex-col gap-y-[5px]">
  <LiveChat />
    </div>
  );
};

export default InputNumber;
