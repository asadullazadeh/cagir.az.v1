// components/CustomDropdown.js
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import info_btn from "@/icons/form/info_btn.svg";
import { useRouter } from "next/router";

const Dropdown = ({
  getMainServices,
  onSelectMainService,
  onSelectSubService,
  getSubServices,
  onSelectSub2Service,
  getSub2Services,
  defaultMain,
  defaultSub,
  onDataCallback,
  messages,
}) => {
  const dropdownInfos = {
    0: {
      serviceInfos: getMainServices,
      onSelectService: onSelectMainService,
    },
    1: {
      serviceInfos: getSubServices,
      onSelectService: onSelectSubService,
    },
    2: {
      serviceInfos: getSub2Services,
      onSelectService: onSelectSub2Service,
    },
  };

  const router = useRouter();

  // State to manage the indices of expanded dropdowns
  const [expandedIndices, setExpandedIndices] = useState([]);

  // Toggle expanded state for a dropdown
  const toggleExpanded = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices((prev) => prev.filter((i) => i !== index));
    } else {
      setExpandedIndices((prev) => [...prev, index]);
    }
  };

  // dropdown options are set to false(closed).
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const myElementRef = useRef(null);

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => ({
      ...Object.fromEntries(
        Object.entries(prevState).map(([key]) => [key, false])
      ),
      [index]: !prevState[index], // Toggle the dropdown's state
    }));
  };

  const handleClick = (event) => {
    if (myElementRef.current && !myElementRef.current.contains(event.target)) {
      setClickedOutside(true);
    }
  };

  useEffect(() => {
    if (clickedOutside) {
      // Close all open dropdowns when clicked outside
      setIsOpen((prevState) =>
        Object.fromEntries(Object.keys(prevState).map((key) => [key, false]))
      );
      setClickedOutside(false); // Reset the clickedOutside state
    }
  }, [clickedOutside]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  // mainServiceName is set to false as default.
  const [mainServiceName, setMainServiceName] = useState(
    defaultMain?.serviceNames?.[0].name || ""
  );

  const [subServiceName, setSubServiceName] = useState(
    defaultSub?.serviceNames?.[0].name
  );
  const [sub2ServiceName, setSub2ServiceName] = useState("");
  const serviceNames = [
    mainServiceName,
    subServiceName || defaultSub?.serviceNames?.[0]["name"],
    sub2ServiceName,
  ];

  // Update subServiceName and sub2ServiceName when mainServiceName changes
  useEffect(() => {
    setSubServiceName("");
    setSub2ServiceName("");
    setExpandedIndices([]);
  }, [mainServiceName]);
  // Update sub2ServiceName when subServiceName changes
  useEffect(() => {
    setSub2ServiceName("");
  }, [subServiceName]);

  // description for mobile version
  const [descIsOpen, setdescIsOpen] = useState(false);
  const handleToggleDesc = (index) => {
    setdescIsOpen((prevState) => ({
      ...prevState,
      [index]: !descIsOpen[index],
    }));
  };

  const closeDesc = (index) => {
    setdescIsOpen((prevState) => ({
      ...prevState,
      [index]: !descIsOpen[index],
    }));
  };
  //finding main service Description by using Id
  const findDescById = (index) =>
    dropdownInfos[index].serviceInfos.find(
      (obj) => obj.serviceNames[0].name === serviceNames[index]
    )?.serviceNames[0].text ?? null;

  //
  let tremBlingObject = {
    0: false,
    1: false,
    2: true,
  };

  // which dropdown is trembling?
  // const trembling = tremBlingObject[index] && (typeof sub2ServiceName !=="undefined")

  function isTrembling(index) {
    return tremBlingObject[index] && sub2ServiceName?.length === 0;
  }

  // const trembling
  // const [trembling, setTrembling] = useState({ ...tremBlingObject[0] });
  const handleOptionClick = (mainIndex, serviceName) => {
    if (mainIndex == 0) {
      setMainServiceName(serviceName);
      onSelectMainService(serviceName);
    } else if (mainIndex == 1) {
      setSubServiceName(serviceName);
      onSelectSubService(serviceName);
    } else if (mainIndex == 2) {
      setSub2ServiceName(serviceName);
      onSelectSub2Service(serviceName);
    }

    setIsOpen(false);

    onDataCallback(mainIndex);
  };

  const isSub2ElementsExist = getSub2Services.length > 0;

  const findMainInfoByName = (mainServices, name) =>
    mainServices.find((obj) => obj.serviceNames[0].name === serviceNames[0]) ||
    {};
  const mainInfo = findMainInfoByName(getMainServices, serviceNames[0]);

  const findSubInfoByName = (subServices, name) =>
    subServices.find((obj) => obj.serviceNames[0].name === serviceNames[1]) ||
    {};
  const subInfo = findSubInfoByName(getSubServices, serviceNames[1]);

  // const {mainService:mainServiceUrl,subService:subServiceUrl} = router.query

  //   const findSubInfoByNameUrl = (subServices, nameUrl) =>
  //   subServices.find((obj) => obj.nameUrl === subServiceUrl) ||
  //   {};
  // const subInfo = findSubInfoByNameUrl(getSubServices, subServiceUrl);

  const pathMain = mainInfo.nameUrl;
  const pathSub = subInfo.nameUrl || getSubServices[0]?.nameUrl;
  const newPath = `/${pathMain}/${pathSub}`;

  const { mainService, subService } = router.query;


  // if page redirects from different page, it useEffect is not applied.
  const isInitialMount = useRef(true);

  useEffect(() => {
    // If it's the initial mount, we'll check if we're being redirected
    if (isInitialMount.current) {
      if (router.asPath !== newPath) {
        router.replace(`/${mainService}/${subService}`);
      }
      isInitialMount.current = false;
    } else {
      // For subsequent updates, always navigate
      router.replace(newPath);
    }
  }, [mainService, newPath, subService]);

  // useEffect(() => {
  //   router.replace(newPath);
  // }, [newPath]);

  return (
    <div
      ref={myElementRef}
      className="grid lg:grid-cols-3 justify-items-stretch lg:gap-x-[40px] gap-y-[15px]"
    >
      {/*  */}
      {Object.keys(dropdownInfos).map((index) => {
        if (index === "2" && !isSub2ElementsExist) {
          return null; // Skip this iteration
        }

        const serviceInfos = dropdownInfos[index].serviceInfos
          ? dropdownInfos[index].serviceInfos
          : "";
        const onSelectService = dropdownInfos[index].onSelectService;

        const mainIndex = index;

        return (
          <div key={index}>
            <div className="flex flex-col gap-y-[10px] lg:gap-y-0 relative ">
              <div className="hidden lg:flex flex-row justify-between pb-[5px]">
                <label
                  htmlFor="button"
                  className="font-semibold text-[12px] leading-[18px] text-black500"
                >
                  {messages["select-service"]}
                </label>
              </div>

              <div>
                <label
                  htmlFor="button"
                  className={`lg:hidden absolute px-[5px] ml-[10px] mt-[-6px] z-10 bg-white 
        
           font-medium text-[8px] leading-[12px] text-cagiraz ${
             isOpen[index] ? "block" : "hidden"
           }`}
                >
                  {serviceNames[index] || ""}
                </label>
                {/* {typeof Number(mainIndex)} */}
                <button
                  className={`dropdown-button relative flex items-center justify-between w-full px-[15px] py-[5px] lg:py-[10px] text-[10px] lg:text-[12px] leading-[15px] lg:leading-[12px] font-medium lg:font-semibold
         text-gray900  bg-white rounded-[10px] lg:rounded-[50px] focus:outline-none focus:border-cagiraz
         border-[1px] focus:border-[2px] border-solid border-gray900
         ${isTrembling(index) ? "animate-slide" : ""} `}
                  onClick={() => {
                    toggleDropdown(index);
                  }}
                >
                  <p
                    className={`text-black500 ${
                      isOpen[index] ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {serviceNames[mainIndex] || ""}
                  </p>

                  <svg
                    className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                      isOpen[index] ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 16a1 1 0 01-.7-.3l-5-5a1 1 0 011.4-1.4L10 13.6l4.3-4.3a1 1 0 011.4 1.4l-5 5a1 1 0 01-.7.3z" />
                  </svg>
                </button>
                {isOpen[index] && (
                  <div
                    className={`${
                      isOpen[index] ? "block" : "hidden"
                    } absolute z-10 w-full mt-[10px] rounded-[10px] border-[2px] border-solid border-cagiraz bg-white`}
                  >
                    {serviceInfos &&
                      serviceInfos
                        .slice(
                          0,
                          expandedIndices.includes(index)
                            ? serviceInfos.length
                            : 5
                        )
                        .map((item, sIndex) => (
                          <div
                            key={sIndex}
                            onClick={() =>
                              handleOptionClick(
                                mainIndex,
                                item.serviceNames[0].name
                              )
                            }
                            className="w-full hover:bg-blue-500 hover:bg-opacity-[15%]"
                          >
                            <div className="px-[15px] py-[5px] font-medium lg:font-semibold text-[12px] leading-[18px] text-black lg:text-black500">
                              {item.serviceNames[0].name}
                            </div>
                          </div>
                        ))}

                    {/* "See More" button */}
                    {!expandedIndices.includes(index) &&
                      serviceInfos &&
                      serviceInfos.length > 5 && (
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="font-medium lg:font-semibold text-[14px] leading-[21px]  ml-[15px] text-blue-500 hover:underline"
                        >
                          {messages.more}
                        </button>
                      )}
                  </div>
                )}
              </div>
              {/* info part */}
              {findDescById(index) && (
                <div className="flex lg:hidden flex-row gap-x-[10px]">
                  <Image
                    className="self-start w-[20px] h-[20px]"
                    src={info_btn}
                    alt="info_icon"
                  />

                  <div classNames="flex flex-col font-medium  text-gray900">
                    <div
                      onClick={() => closeDesc(index)}
                      className={`text-[12px] leading-[18px] ${
                        descIsOpen[index]
                          ? ""
                          : " truncate w-full h-[16px] max-w-[150px] xs:max-w-[260px] screen360:max-w-[295px] screen375:max-w-[310px] screen390:max-w-[320px] screen412:max-w-[350px] screen428:max-w-[380px] sm:max-w-[600px] md:max-w-[700px]  whitespace-nowrap overflow-hidden overflow-x-hidden"
                      } `}
                      dangerouslySetInnerHTML={{
                        __html: `${findDescById(index)
                          .replaceAll(
                            "<ul>",
                            '<ul class="list-disc list-inside pt-[3px] pb-[7px]">'
                          )
                          .replaceAll("<p", '<p class=""')}`,
                      }}
                    ></div>
                    <button
                      className="text-[10px] leading-[15px] font-semibold block text-cagiraz "
                      onClick={() => handleToggleDesc(index)}
                    >
                      {descIsOpen[index] ? "Bağla" : "Ətraflı oxu"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
