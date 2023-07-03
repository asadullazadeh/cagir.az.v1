import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { SubService } from "@/src/components/main/subServices";
import Sifaris from "@/src/components/main/sifaris";

function AltXidmet() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    headers: {
      "Accept-Language": "az",
    },
  };
  const router = useRouter();
  const SubServiceUrlName = router.query.SubService;
  const previousPath = router.asPath;
  const segments = previousPath.split("/"); // Split the path by "/"
  const desiredSegment = segments[2]; // Assuming the desired segment is the second one
  console.log(desiredSegment);
  const [mainServiceData, setMainServiceData] = useState({});
  const [subServices, setSubServices] = useState([]);
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://api.cagir.az/api/service/service-name",
          { titleUrl: desiredSegment },
          config
        );
        setMainServiceData(response.data.result);

        const newParentId = response.data.result.id;
        setParentId(newParentId);
        // console.log(newParentId);

        const subService = await axios.get(
          `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${newParentId}`,
          config
        );

        setSubServices(subService.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    if (desiredSegment && !parentId) {
      fetchData();
    }
  }, [config, desiredSegment, parentId]);
  //   const { iconUrl,price, serviceNames } = subServices;
  //     console.log(subServices);

  return (
    <div className="flex flex-row">
      {/* {subServices.map(({ index, iconUrl, price, serviceNames }) => (
        <div className="w-full" key={index}>
          {iconUrl}
          {price}

          {serviceNames.map(({ description, id, name, text }) => (
            <div className="w-full" key={id}>
              <div className="flex items-center justify-between w-full pt-[5px] sm:pt-[10px] lg:pt-[15px]">
                {description}
                {name}
                {id}
                {text}
              </div>
            </div>
          ))}
        </div>
      ))} */}
      <Sifaris />
    </div>
  );
}

export default AltXidmet;
