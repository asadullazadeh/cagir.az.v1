import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import SearchInputMd from "@/src/components/input/input_search_md";
import arrow_right from "@/icons/arrow_right.svg";
import close from "@/icons/header/close.svg";
function SearchComponents({onExit, searchInptClicked }) {
  const router = useRouter();
  /* ----------------- mainServices ----------------- */
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;


  const [mainServices, setMainServices] = useState([]);
  // return null
  useEffect(() => {
    // if (!searchInptClicked) return;
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
        headers: {
          "Accept-Language": chosenLang,
        },
      })
      .then((response) => {
        // Handle the response data
        setMainServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [searchInptClicked, chosenLang]);

  // getting all mainService ids in an array.
  const mainServiceIds = mainServices.map((child) => child.id);

  // mainServiceId-key,mainServiceNameUrl-value
  const mainServiceNameUrls = mainServices.map((child) => child.nameUrl);
  const mainServiceIdNameUrls = {};
  for (let i = 0; i < mainServiceIds.length; i++) {
    const id = mainServiceIds[i];
    const nameUrl = mainServiceNameUrls[i];
    mainServiceIdNameUrls[id] = nameUrl;
  }

  /* ----------------- subServices ----------------- */
  // const mainServiceIds = mainServices.map(child => child.id);
  const [subServices, setSubServices] = useState([]);

  useEffect(() => {
    // return null
    const fetchSubServices = async () => {
      try {
        const subServicePromises = mainServiceIds.map((id) =>
          axios.get(
            `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${id}`,
            {
              headers: {
                "Accept-Language": chosenLang,
              },
            }
          )
        );

        const subServiceResponses = await Promise.all(subServicePromises);
        const subServiceData = subServiceResponses
          .map((response) => response.data.result)
          .flat();

        setSubServices(subServiceData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubServices();
  }, [mainServices, chosenLang]);

  /* ----------------- search functionality ----------------- */
  // ekranda gorunen updatedSubServiceObject.It updates in each search
  const updatedSubServiceObject = subServices;
  // const [updatedSubServiceObject, setUpdatedSubServiceObject] =
  //   useState(subServices);
  // // the value that will search elements
  const [searchVal, setSearchVal] = useState("");
  // useEffect(() => {
  //   const filteredArray = subServices.filter((obj) => {
  //     return obj.serviceNames[0].name
  //       .toLowerCase()
  //       .includes(searchVal.toLowerCase());
  //   });

  //   setUpdatedSubServiceObject(filteredArray);
  // }, [searchVal, subServices]); // Only run this effect when searchVal changes

  function handleInputChange(event) {
    // const inputValue = event.target.value;
    setSearchVal(event.target.value);
  }

  const [trendServices, seTrendServices] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.cagir.az/api/service/getShortCutServicesNew`, {
        headers: {
          "Accept-Language": chosenLang,
        },
      })
      .then((response) => {
        // Handle the response data
        seTrendServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [chosenLang]);

  const [exitBtnClicked, setExitBtnClicked] = useState(false);

  const exitBtn = () => {
    router.back();

    // Toggle the local state to indicate "exit"
    // setExitBtnClicked((prev) => !prev);

    // Use the callback to inform the parent
    // onExit(exitBtnClicked);
  };

  const [searchServices, setsearchServices] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/search/getServiceBySearch?searchString=${searchVal}`,
        {
          headers: {
            "Accept-Language": chosenLang,
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setsearchServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [searchVal, chosenLang]);
console.log(searchServices)
  return (
    <div className="py-[15px] lg:py-[30px]">
      <div className="relative flex flex-row justify-between sm:justify-center mb-[15px] lg:mb-[30px]">
        <h2 className="my-h2  text-center">
          {messages["which-service-looking"]}
        </h2>
        <button
          onClick={() => {
            exitBtn();
          }}
        >
          <Image
            src={close}
            alt="close_icon"
            className="w-[20px] h-[20px] sm:absolute sm:top-0 sm:right-0"
          />
        </button>
      </div>
      {/*  */}

      {/*  */}
      <div className="flex flex-col gap-y-[5px] items-center justify-center mt-[15px] mb-[15px]">
        <SearchInputMd
          {...{ messages, chosenLang, searchServices }}
          onChange={handleInputChange}
          value={searchVal}

          // sendDataToParent={receiveDataFromChild}
        />
        <div
          className={`${
            searchServices
              ? "flex flex-col justify-start border border-gray900 rounded-[20px] px-[10px] py-[5px]"
              : "hidden"
          }`}
        >
          {searchServices?.map(
            ({ index, name, parentTitleUrl, serviceId, titleUrl }) => {
              return (
                <div key={index}>
                  {/* {`/${parentTitleUrl}/${titleUrl}`} */}
                  <Link href={`/${parentTitleUrl}/${titleUrl}`}>{name}</Link>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* <div className="flex flex-col gap-y-[5px] items-center justify-center ">
        {searchServices?.map(
          ({ index, name, parentTitleUrl, serviceId, titleUrl }) => {
            return (
              <div key={index}>
                <a href={`/${parentTitleUrl}/${titleUrl}`}>{name}</a>
              </div>
            );
          }
        )}
      </div> */}
      {searchServices === null ? (
        <div className="flex flex-row justify-center gap-x-[5px] lg:gap-x-[15px]">
          {trendServices.map((item, index) => (
            <div key={index}>
              <div className="border border-cagiraz rounded-lg">
                <a className="" href={`/${item.nameUrl}`}>
                  <p className="font-semibold text-[10px] leading-[15px] text-cagiraz px-[10px] py-[4px]">
                    {item.serviceNames[0].name}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {/* all services */}
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
          {updatedSubServiceObject.map(
            ({
              id,
              parentId,
              imageUrl,
              nameUrl,
              price,
              serviceNames,
              isServiceTrend,
            }) => {
              return (
                <li
                  className="drop-shadow-cardAlt lg:drop-shadow-none lg:hover:drop-shadow-cardAlt transition duration-300 rounded-[10px] bg-white"
                  key={id}
                >
                  <Link
                    href={`/${mainServiceIdNameUrls[parentId]}/${nameUrl}`}
                    className=" 
                            flex flex-row sm:flex-col rounded-[10px] sm:rounded-[25px]
                          p-[10px] sm:p-[15px] space-x-[15px] sm:space-x-0"
                  >
                    <Image
                      width={272}
                      height={205}
                      src={`https://api.cagir.az${imageUrl}`}
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
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchComponents;
