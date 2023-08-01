// components/CustomDropdown.js
import { useState, useEffect } from "react";
import Image from "next/image";
import info_btn from "@/icons/form/info_btn.svg";

const Dropdown = ({
  getMainServices,
  onSelectMainService,
  onSelectSubService,
  getSubServices,
  onSelectSub2Service,
  getSub2Services,
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

  console.log(dropdownInfos);

  // dropdown options are set to false(closed).
  const [isOpen, setIsOpen] = useState(false);
  // if "isOpen" is true, toggleDropdown works
  const toggleDropdown = (index) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !isOpen[index],
    }));
  };

  // mainServiceName is set to false as default.
  const [mainServiceName, setMainServiceName] = useState("");
  const [subServiceName, setSubServiceName] = useState("");
  const [sub2ServiceName, setSub2ServiceName] = useState("");
  const serviceNames = [mainServiceName, subServiceName, sub2ServiceName];
  console.log(subServiceName);
  // Update subServiceName and sub2ServiceName when mainServiceName changes
  useEffect(() => {
    setSubServiceName("");
    setSub2ServiceName("");
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
  //finding main service Description by using Id
  const findDescById = (index) =>
    dropdownInfos[index].serviceInfos.find(
      (obj) => obj.serviceNames[0].name === serviceNames[index]
    )?.serviceNames[0].text ?? null;

  //selected main service
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
    // console.log(serviceName);
  };

  // Function to check if sub2 object is empty to run third dropdown or not
  function isSub2Exist(obj) {
    return Object.keys(obj).length === 0;
  }
  const isSub2ElementsExist =
    !isSub2Exist(dropdownInfos[1].serviceInfos) &&
    isSub2Exist(dropdownInfos[2].serviceInfos) &&
    subServiceName !== ""
      ? false
      : true;

  return (
    <div className="grid lg:grid-cols-3 justify-items-stretch lg:gap-x-[40px] gap-y-[15px]">
      {Object.keys(dropdownInfos).map((index) => {
        if (index === "2" && !isSub2ElementsExist) {
          return null; // Skip this iteration
        }

        const serviceInfos = dropdownInfos[index].serviceInfos
          ? dropdownInfos[index].serviceInfos
          : "";
        const onSelectService = dropdownInfos[index].onSelectService;
        console.log(isSub2ElementsExist);

        // 0-main,1-sub,2-sub2
        const mainIndex = index;
        console.log(mainIndex);
        // console.log(serviceInfos);

        return (
          <div key={index}>
            <div className="flex flex-col gap-y-[10px] lg:gap-y-0 relative ">
              <div className="hidden lg:flex flex-row justify-between pb-[5px]">
                <label
                  htmlFor="button"
                  className="font-semibold text-[12px] leading-[18px] text-black500"
                >
                  Xidməti seç
                </label>
                <button>
                  <Image src={info_btn} alt="info_btn" />
                </button>
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
                <button
                  className="dropdown-button relative flex items-center justify-between w-full px-[15px] py-[5px] lg:py-[10px] text-[10px] lg:text-[12px] leading-[15px] lg:leading-[12px] font-medium lg:font-semibold
         text-gray900  bg-white rounded-[10px] lg:rounded-[50px] focus:outline-none focus:border-cagiraz
         border-[1px] border-solid border-gray900"
                  onClick={() => toggleDropdown(index)}
                >
                  <p
                    className={`lg:text-black500 ${
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
                  <ul
                    className={`${
                      isOpen[index] ? "block" : "hidden"
                    } absolute z-10 w-full mt-[10px] rounded-[10px] border-[1px] border-solid border-cagiraz bg-white`}
                  >
                    {serviceInfos &&
                      serviceInfos.map((item, index) => (
                        <div key={index}>
                          <li
                            className="px-[15px] py-[5px] font-medium lg:font-semibold text-[12px] leading-[18px] text-gray900 lg:text-black500"
                            onClick={() =>
                              handleOptionClick(
                                mainIndex,
                                item.serviceNames[0].name
                              )
                            }
                          >
                            {item.serviceNames[0].name}
                          </li>
                        </div>
                      ))}
                  </ul>
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

                  <div className="flex flex-col font-medium text-[10px] leading-[15px] text-gray900">
                    <div classNames="flex flex-row">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: descIsOpen[index]
                            ? `${findDescById(index)}`
                            : `${findDescById(index).slice(0, 200)}...`,
                        }}
                      />

                      <button
                        className="font-semibold block text-cagiraz"
                        onClick={() => handleToggleDesc(index)}
                      >
                        {descIsOpen[index] ? "Bağla" : "Ətraflı oxu"}
                      </button>
                    </div>
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
