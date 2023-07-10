import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import arrow_right from "@/icons/arrow_right.svg";
import arrow from "@/icons/arrow.svg";

function Butun_xidmetler() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config = {
    headers: {
      "Accept-Language": "az",
    },
  };
  const router = useRouter();
  const mainService = router.query.mainService;

  const [mainServiceData, setMainServiceData] = useState({});
  const [subServices, setSubServices] = useState([]);
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
        // console.log(newParentId);

        const cavab = await axios.get(
          `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${newParentId}`,
          config
        );
        setSubServices(cavab.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    if (mainService && !parentId) {
      fetchData();
    }
  }, [config, mainService, parentId]);

  const { id, someProperty, serviceNames } = mainServiceData;
  const serviceName =
    serviceNames && serviceNames.length > 0 ? serviceNames[0].name : "";
  const textService =
    serviceNames && serviceNames.length > 0 ? serviceNames[0].text : "";


    //this is a boolean variable.True if there is any trend service
  const isServiceTrends = Object.values(subServices).some(
    (childObj) => childObj.isServiceTrend
  );

  return (
    <div>
      {/* title */}
      {isServiceTrends ? (
        <h2 className="my-h2 mb-0 lg:mb-[15px] text-center">Bütün xidmətlər</h2>
      ) : null}

      {mainServiceData && (
        <div
          className="flex flex-col gap-y-[60px] sm:gap-y-[75px] md:gap-y-[90px]
        lg:gap-y-[105px] xl:gap-y-[120px] 2xl:gap-y-[135px]
         pt-[30px] sm:pt-[36px] md:pt-[42px] lg:pt-[48px] xl:pt-[54px] 2xl:pt-[60px] 
         pb-[60px] sm:pb-[75px] md:pb-[90px] lg:pb-[105px] xl:pb-[120px] 2xl:pb-[135px]"
        >
            <ul
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[35px]
          xl:gap-y-[51px] 2xl:gap-[60px] "
            >
              {subServices.map(
                ({
                  id,
                  imageUrl,
                  nameUrl,
                  price,
                  serviceNames,
                  isServiceTrend,
                }) => {
                  if (isServiceTrend == false) {
                    return (
                      <li className="" key={id}>
                        <Link
                          href={`${mainService}/${nameUrl}`}
                          className="flex items-center justify-between w-full aspect-[15/3] sm:aspect-[302/91] rounded-[20px] drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 bg-white px-[15px] sm:px-[30px] py-[9.5px] sm:py-[15px] group"
                        >
                          <div>
                            <h5 className="relative font-semibold lg:font-bold text-[16px]	lg:text-[20px] leading-[24px] lg:leading-[30px] text-black500">
                              {serviceNames[0].name}
                            </h5>
                            <p className="font-medium sm:font-semibold text-[12px] leading-[18px] text-gray900 mt-0 sm:mt-[2px]">
                              {price}
                            </p>
                          </div>
                          <div className=" transition duration-300 sm:group-hover:block">
                            <Image src={arrow_right} alt="arrow_icon" />
                          </div>
                        </Link>
                      </li>
                    );
                  }
                  return null; // Return null for elements where isServiceTrend is false
                }
              )}
            </ul>
        </div>
      )}
    </div>
  );
}

export default Butun_xidmetler;
