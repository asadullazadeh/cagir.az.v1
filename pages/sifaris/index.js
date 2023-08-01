import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Toggle from "@/src/components/form/toggle";
import Qiymet from "@/src/components/form/qiymet";
import Dropdown from "@/src/components/form/dropdown";
import CheckBox from "@/src/components/buttons/checkbox";
import CustomInput from "@/src/components/input/multiNumber_input";
import Textarea from "@/src/components/input/textarea";
import Download_image from "@/src/components/form/download_image";
import Promocode from "@/src/components/input/promocode";
import PaymentMethod from "@/src/components/form/payment_method";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";
import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import LinkSmBtn from "@/src/components/buttons/link_sm_btn";
import info_btn from "@/icons/form/info_btn.svg";
import Map_Image from "@/public/Map_Image.png";
import InputCustomized from "@/src/components/input/input";
import RadioButton from "@/src/components/buttons/radio_button";
import InputPlusMinus from "@/src/components/input/input_plus_minus";
import MapBtn from "@/src/components/buttons/map_btn";
import Calendar from "@/src/components/form/datepicker";
import ModalStandart from "@/src/components/modal/modal_stand";

function Sifaris() {
  // mainServices functionality starts here
  const [selectedMain, setSelectedMain] = useState("");
  const handleMainSelect = (mainService) => {
    setSelectedMain(mainService);
  };
  const [getMainServices, setgetMainServices] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
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
  // console.log(selectedMain);
  const findIdByName = (mainService, name) =>
    (getMainServices.find((obj) => obj.serviceNames[0].name === name) || {})
      .id || null;
  const chosenMainServiceId = findIdByName(getMainServices, selectedMain);

  const findTextByName = (mainService, name) =>
    getMainServices.find((obj) => obj.serviceNames?.[0]?.name === name)
      ?.serviceNames?.[0]?.text || null;
  const chosenMainServiceText = findTextByName(getMainServices, selectedMain);

  // console.log(chosenMainServiceText);
  // mainServices functionality finishes here

  // subServices functionality starts here
  const [selectedSub, setSelectedSub] = useState("");
  const handleSubSelect = (subService) => {
    setSelectedSub(subService);
  };
  const [getSubServices, setgetSubServices] = useState([]);

  // When there is a change in first dropdown, it makes third dropdown elements as default
  useEffect(() => {
    setgetSub2Services([]);
  }, [selectedMain]);

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${chosenMainServiceId}`,
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setgetSubServices(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [chosenMainServiceId]);
  // console.log(getSubServices);
  const findSubIdByName = (subService, name) =>
    (getSubServices.find((obj) => obj.serviceNames[0].name === name) || {})
      .id || null;
  const chosenSubServiceId = findSubIdByName(getSubServices, selectedSub);

  const findSubTextByName = (subService, name) =>
    getSubServices.find((obj) => obj.serviceNames?.[0]?.name === name)
      ?.serviceNames?.[0]?.text || null;
  const chosenSubServiceText = findSubTextByName(getSubServices, selectedSub);
  // console.log(chosenSubServiceText);
  // subServices functionality finishes here

  // sub2Services functionality starts here
  const [selectedSub2, setSelectedSub2] = useState("");
  const [getSub2Services, setgetSub2Services] = useState([]);
  const handleSub2Select = (sub2Service) => {
    setSelectedSub2(sub2Service);
  };
  // console.log(getSub2Services);

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${chosenSubServiceId}`,
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setgetSub2Services(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [chosenSubServiceId]);

  const findSub2TextByName = (sub2Service, name) =>
    getSub2Services.find((obj) => obj.serviceNames?.[0]?.name === name)
      ?.serviceNames?.[0]?.text || null;
  const chosenSub2ServiceText = findSub2TextByName(
    getSub2Services,
    selectedSub2
  );

  //getting chosen Sub2 id
  const findSub2IdByName = (sub2Service, name) =>
    getSub2Services.find((obj) => obj.serviceNames?.[0]?.name === name)?.id ||
    null;
  const chosenSub2ServiceId = findSub2IdByName(getSub2Services, selectedSub2);
  // console.log(chosenSub2ServiceId);
  // sub2Services functionality finishes here
  // select criterias starts here
  const [getServiceCriterias, setgetServiceCriterias] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://api.cagir.az/api/serviceCriteria/getAllWithParent",
        [chosenSub2ServiceId],
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setgetServiceCriterias(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [chosenSub2ServiceId]);
  console.log(getServiceCriterias);

  // getting custom input-multinumber-FilterType=5 value for service criteria
  // multiNumberArray takes all the information of multi number input for pricing
  const [multiNumberValue, setMultiNumberValue] = useState(0);
  const [multiNumberId, setMultiNumberId] = useState("");
  const [multiNumberArray, setMultiNumberArray] = useState([]);
  // console.log(multiNumberArray);
  const handleDataUpdate = (value) => {
    setMultiNumberValue(value);
  };

  const handleCriteriaId = (id) => {
    setMultiNumberId(id);
  };

  useEffect(() => {
    // Check if multiNumberId is not null
    if (multiNumberId !== "") {
      // Check if an object with the same "multiNumberId" exists in multiNumberArray
      const existingObjectIndex = multiNumberArray.findIndex(
        (obj) => obj.serviceCriteriaId === multiNumberId
      );

      if (existingObjectIndex !== -1) {
        // If the object with the same "multiNumberId" exists, update its key-values
        setMultiNumberArray((prevArr) =>
          prevArr.map((obj, index) =>
            index === existingObjectIndex
              ? { ...obj, count: multiNumberValue }
              : obj
          )
        );
      } else {
        // If the object with the "multiNumberId" doesn't exist, add a new object to multiNumberArray
        setMultiNumberArray((prevArr) => [
          ...prevArr,
          { serviceCriteriaId: multiNumberId, count: multiNumberValue },
        ]);
      }
    }
  }, [multiNumberId, multiNumberValue]);

  //radio button functionality
  const [selectedRadioName, setSelectedRadioName] = useState(null);
  const [selectedRadioId, setSelectedRadioId] = useState("");
  const [radioBtnObject, setRadioBtnObject] = useState({}); // Define it in the component's scope

  const handleChange = (value, criteriaId) => {
    setSelectedRadioName(value);
    setSelectedRadioId(criteriaId);
  };
  // console.log(selectedRadioName,selectedRadioId);
  // detting data from radio button to calculate the price
  useEffect(() => {
    // Move the 'radioBtnObject' conditional inside the useEffect callback
    const radioBtnObject = selectedRadioId
      ? { serviceCriteriaId: selectedRadioId, count: 1 }
      : {};

    setRadioBtnObject(radioBtnObject); // Update the radioBtnObject state with the new value
    // Your other useEffect logic here that depends on 'radioBtnObject'
    // ...

    // Clean-up function (if needed)
    return () => {
      // Clean-up logic here
      // ...
    };
  }, [selectedRadioId]); // Add any other dependencies if necessary

  // console.log(radioBtnObject);
  // select criterias finishes here

  // checkmarks, to see more info-customized inputs in form section
  const [showSecondChild, setShowSecondChild] = useState(false);
  const toggleSecondChild = () => {
    setShowSecondChild(!showSecondChild);
  };
  const [checkboxId, setCheckboxId] = useState(null);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [checkedCheckboxArray, setCheckedCheckboxArray] = useState([]);

  const handleDataFromChild = (criteriaId, isChecked) => {
    setCheckboxId(criteriaId);
    setCheckboxIsChecked(isChecked);
  };

  useEffect(() => {
    if (checkboxIsChecked && checkboxId) {
      // Create the object with two key-value pairs
      const newObj = {
        serviceCriteriaId: checkboxId,
        count: 1,
      };

      // Add the object to the array if checkboxIsChecked is true
      setCheckedCheckboxArray((prevArray) => [...prevArray, newObj]);
    } else {
      // Remove the object from the array if checkboxIsChecked is false
      setCheckedCheckboxArray((prevArray) =>
        prevArray.filter((obj) => obj.serviceCriteriaId !== checkboxId)
      );
    }
  }, [checkboxIsChecked, checkboxId]);
  // console.log(checkedCheckboxArray);

  // Calculate Price
  // console.log(calculatePrice);
  const [getPrice, setGetPrice] = useState(0);
  // Log the current value of getPrice
  // console.log(getPrice);
  useEffect(() => {
    const calculatePrice = [
      radioBtnObject,
      ...checkedCheckboxArray,
      ...multiNumberArray,
    ];

    // it gets rid of an element which its length is 0
    const filteredCalculatePrice = calculatePrice.filter(
      (item) => Object.keys(item).length !== 0
    );
    console.log(filteredCalculatePrice);

    axios
      .post(
        "https://api.cagir.az/api/serviceCriteria/calculate",
        [...filteredCalculatePrice],
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setGetPrice(response.data.result.amount);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [checkedCheckboxArray, multiNumberArray, radioBtnObject]); // Add 'calculatePrice' as a dependency

  // when selectMain is updated,elements which go to calculate price become empty
  useEffect(() => {
    setCheckedCheckboxArray([]);
    setMultiNumberArray([]);
    setRadioBtnObject([]);
    setGetPrice(0); // Set getPrice to 0 when selectMain is updated
  }, [selectedMain]);
  // console.log(getPrice);

  // Textarea
  const [showTextarea, setshowTextarea] = useState(true);
  const toggleTextarea = () => {
    setshowTextarea(!showTextarea);
  };

  // Toggle part
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // toggleProps.Selected Services and description for each category
  const toggleProps = {
    selectedMain,
    descMain: chosenMainServiceText,
    selectedSub,
    descSub: chosenSubServiceText,
    selectedSub2,
    descSub2: chosenSub2ServiceText,
  };

  // dropdownProps.to pass data from one dropdown to other one and selected service
  const dropdownProps = {
    onSelectMainService: handleMainSelect,
    getMainServices: getMainServices,
    onSelectSubService: handleSubSelect,
    getSubServices: getSubServices,
    onSelectSub2Service: handleSub2Select,
    getSub2Services: getSub2Services,
  };

  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-x-[30px] xl:gap-x-[40px] 2xl:gap-x-[60px]
    lg:pt-[30px] lg:pb-[90px] w-full"
    >
      {/* Left side of first part in Sifaris */}
      <div className="z-40 sticky top-[20px] lg:top-[110px] lg:h-screen overflow-y-auto flex flex-col lg:w-1/3 xl:w-1/4 2xl:w-1/5 lg:gap-y-[25px] space-y-[25px]">
        <div className="z-20 sticky top-[0px] bg-white py-[10px] px-[15px] mt-[10px] mb-[20px] lg:m-0 lg:p-0 shadow-dropblack25 lg:shadow-none rounded-[10px]">
          <Qiymet price={getPrice} />
        </div>
        {/* Toggle part is only  desktop */}
        {chosenMainServiceText ? (
          <div className="z-10 hidden lg:block sticky ">
            <Toggle {...toggleProps} />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Right side of first part in Sifaris */}
      <div className="w-full z-[10] lg:z-auto">
        <h4
          className="font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
      text-black500 text-center pb-[15px] lg:pb-[15px]"
        >
          Sifarişi yarat
        </h4>
        {/* Dropdowns for services */}
        <div className="">
          <Dropdown {...dropdownProps} />
        </div>
        {/* criterias example */}

        <div className="flex flex-col pt-[30px]">
          {getServiceCriterias.map(
            ({ serviceCriteria, serviceCriteries, index }) => (
              <div key={index}>
                <h5 className="font-semibold text-[12px] leading-[18px] text-black500">
                  {serviceCriteria.serviceCriteriaNames[0].name}
                </h5>
                <div className="flex flex-wrap gap-[15px] py-0 lg:py-[5px]  lg:order-1">
                  {serviceCriteries.map(
                    ({ serviceCriteriaNames, filterType, index, id }) => (
                      <div key={index}>
                        {filterType === 3 || filterType === 0 ? (
                          <CheckBox
                            name={serviceCriteriaNames[0].name}
                            criteriaId={id}
                            sendDataToParent={handleDataFromChild}
                          />
                        ) : filterType === 4 ? (
                          <RadioButton
                            name={serviceCriteriaNames[0].name}
                            checked={
                              selectedRadioName === serviceCriteriaNames[0].name
                            }
                            handleChange={(value, criteriaId) =>
                              handleChange(serviceCriteriaNames[0].name, id)
                            }
                            criteriaId={id}
                          />
                        ) : filterType === 5 ? (
                          <CustomInput
                            name={serviceCriteriaNames[0].name}
                            updateCriteriaValue={handleDataUpdate}
                            updateCriteriaId={handleCriteriaId}
                            // citeriaIdToBack
                            criteriaId={id}
                          />
                        ) : (
                          serviceCriteriaNames[0].name
                        )}
                      </div>
                    )
                  )}
                </div>
                <div className="flex flex-row gap-x-[5px] py-[15px] lg:py-0 lg:order-2">
                  <button>
                    <Image src={info_btn} alt="info_btn" />
                  </button>
                  <p className="font-medium text-[10px] leading-[15px] text-gray900">
                    50-101kv seçdiyinizə görə + 20AZN əlavə olundu
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col lg:flex-row ">
          {isOpen && <Textarea />}
          <button
            className={`pl-[10px] mx-auto lg:m-0 font-medium lg:font-extrabold text-[12px] lg:text-[14px] 
            leading-[18px] lg:leading-[21px] text-cagiraz ${
              isOpen ? "hidden" : ""
            }`}
            onClick={handleToggle}
          >
            {isOpen ? "" : "Əlavə qeydlər"}
          </button>
        </div>

        {/* Sifarisi tamamla */}
        <h4
          className="font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
        text-black500 pb-[20px] lg:pb-[30px] pt-[30px]"
        >
          Sifarişi tamamla
        </h4>

        <div className="flex flex-col">
          {/* inputs and map part */}
          <div className="flex flex-col xl:flex-row lg:gap-x-[30px] xl:gap-x-[30px] 2xl:gap-x-[40px] w-full">
            {/* inputs and map for mobile */}
            <div className="flex flex-col gap-y-[15px] xl:gap-y-0 lg:justify-between w-full xl:w-1/2">
              <Calendar />
              <InputCustomized />
              {/* Calendar,data picker */}
              <div className="flex flex-col blcok lg:hidden space-y-[5px]">
                <MapBtn />
                <Image
                  src={Map_Image}
                  alt="map_image"
                  className="w-full aspect-[666/365]"
                />
              </div>
              <Download_image />
              <Promocode />
              <PaymentMethod />
            </div>
            {/* map section for desktop */}
            <div className="hidden lg:flex flex-col space-y-[5px] w-full aspect-[666/365]">
              <MapBtn />
              {/* <Map  />  */}
              <Image
                src={Map_Image}
                alt="map_image"
                className="w-full aspect-[666/365]"
              />
            </div>
          </div>

          {/* tesdiqle part */}
          <div className="flex flex-row w-full justify-between xl:w-1/3 pt-[20px]">
            <LinkSmBtn
              btnName="Geri"
              // classNames="hidden lg:block"
            />
            <PrimaryOutlineSmBtn
              btnName="Sıfırla"
              // classNames="hidden lg:block"
            />
            <PrimarySmBtn btnName="Təsdiqlə" classNames="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sifaris;
