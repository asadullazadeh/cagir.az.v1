import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import arrow_right from "@/icons/arrow_right.svg";

function SubService() {
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
      <h2 className="my-h2 mt-[20px] lg:mt-[60px] mb-0 lg:mb-[15px] text-center">
        {serviceName}
      </h2>

      {mainServiceData && (
        <div>
          {isServiceTrends && (
            <h5
              className="relative text-center font-semibold lg:font-bold text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 
    leading-[18px] sm:leading-[22px] md:leading-[27px] lg:leading-[32px] xl:leading-[37px] 2xl:leading-[42px] mb-[15px] lg:mb-[30px] text-gray900"
            >
              Ən çox axtarılan xidmətlər
            </h5>
          )}
          {isServiceTrends ? (
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
                      if (isServiceTrend) {
                        return (
                          <li
                            className="drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 rounded-[10px] bg-white"
                            key={id}
                          >
                            <Link
                              href={`${mainService}/${nameUrl}`}
                              className=" 
                            flex flex-row sm:flex-col rounded-[10px] sm:rounded-[25px]
                          p-[10px] sm:p-[15px] space-x-[15px] sm:space-x-0"
                            >
                              <Image
                                width={272}
                                height={205}
                                src={`https://api.cagir.az${imageUrl}`}
                                // src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt={nameUrl}
                                className="w-[70px] sm:w-full rounded-[5px] sm:rounded-[20px] object-cover object-center"
                              />

                              {serviceNames.map(({ id, name, text }) => (
                                <div className="w-full" key={id}>
                                  <div className="flex items-center justify-between w-full pt-[5px] sm:pt-[10px] lg:pt-[15px]">
                                    <h5 className="font-bold text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] text-black500">
                                      {name}
                                    </h5>
                                    <div className="transition duration-300 group-hover:block">
                                      <Image
                                        src={arrow_right}
                                        alt="arrow_right_icon"
                                        className="w-[28px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </Link>
                          </li>
                        );
                      }
                      return null; // Return null for elements where isServiceTrend is false
                    }
                  )}
                </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default SubService;
