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

  return (
    <div className="flex flex-row">
      <Sifaris />
    </div>
  );
}

export default AltXidmet;
