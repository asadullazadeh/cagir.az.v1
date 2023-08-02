import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import {
  CustomInput,
  Textarea,
  Promocode,
  InputCustomized,
  InputPlusMinus,
} from "@/src/components/input";
import {
  CheckBox,
  PrimarySmBtn,
  PrimaryOutlineSmBtn,
  LinkSmBtn,
  RadioButton,
  MapBtn,
} from "@/src/components/buttons";
import {
  Toggle,
  Qiymet,
  Dropdown,
  Download_image,
  PaymentMethod,
  Calendar,
} from "@/src/components/form";
import info_btn from "@/icons/form/info_btn.svg";
import Map_Image from "@/public/Map_Image.png";
import ModalStandart from "@/src/components/modal/modal_stand";
/* -------------------------------------------------------------------------- */
/*                                   Sifaris                                  */
/* -------------------------------------------------------------------------- */
function Sifaris() {
  /* ----------------- mainServices functionality ----------------- */
  const [selectedMain, setSelectedMain] = useState("");
  const [getMainServices, setgetMainServices] = useState([]);
  const handleMainSelect = (mainService) => {
    setSelectedMain(mainService);
  };
  
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

  const findInfoByName = (mainServices, name) => {
    const mainService = mainServices.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: mainService?.id || null,
      text: mainService?.serviceNames?.[0]?.text || null
    };
  };
  // to get id and text of selected main service, selectedMainService.id or selectedMainService.text
  const selectedMainService = findInfoByName(getMainServices, selectedMain);

  /* ------------------ subServices functionality ----------------- */
  const [selectedSub, setSelectedSub] = useState("");
  const handleSubSelect = (subService) => {
    setSelectedSub(subService);
  };
  const [getSubServices, setgetSubServices] = useState([]);

  // When there is a change in first dropdown, it makes third dropdown elements empty
  useEffect(() => {
    setgetSub2Services([]);
  }, [selectedMain]);

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${selectedMainService.id}`,
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
  }, [selectedMainService.id]);

  const findSubInfoByName = (subServices, name) => {
    const subService = subServices.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: subService?.id || null,
      text: subService?.serviceNames?.[0]?.text || null
    };
  };
  // to get id and text of selected main service, selectedMainService.id or selectedMainService.text
  const selectedSubService = findSubInfoByName(getSubServices, selectedSub);
  console.log(selectedSubService);

  /* ----------------------- sub2Services functionality ----------------------- */
  const [selectedSub2, setSelectedSub2] = useState("");
  const [getSub2Services, setgetSub2Services] = useState([]);
  const handleSub2Select = (sub2Service) => {
    setSelectedSub2(sub2Service);
  };

  // checking if sub2 element is exist after choosing sub element
  const isSub2ElementsExist = selectedSub !== "" && getSub2Services.length > 0;

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${selectedSubService.id}`,
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
  }, [selectedSubService.id]);


  const findSub2InfoByName = (sub2Services, name) => {
    const sub2Service = sub2Services.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: sub2Service?.id || null,
      text: sub2Service?.serviceNames?.[0]?.text || null
    };
  };
  // to get id and text of selected main service, selectedMainService.id or selectedMainService.text
  const selectedSub2Service = findSub2InfoByName(getSub2Services, selectedSub2);
  console.log(selectedSub2Service);

  /* ---------------------- Select criterias ---------------------- */
  const [getServiceCriterias, setgetServiceCriterias] = useState([]);
  useEffect(() => {
    axios
      .post(
        "https://api.cagir.az/api/serviceCriteria/getAllWithParent",
        [!isSub2ElementsExist ? selectedSubService.id : selectedSub2Service.id],
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
  }, [isSub2ElementsExist, selectedSubService.id, selectedSub2Service.id]);
  // console.log(getServiceCriterias);

  /* --------------------- Multinumber input functionality-FilterType=5 --------------------- */
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

  /* --------------------- Plus-Minus input functionality-FilterType=1 --------------------- */
  const [plusMinusValue, setPlusMinusValue] = useState(0);
  const [plusMinusId, setPlusMinusId] = useState("");
  const [plusMinusArray, setPlusMinusArray] = useState([]);
  // console.log(multiNumberArray);
  const handleDataUpdateForMinusPlus = (value) => {
    setPlusMinusValue(value);
  };

  const handleCriteriaIdForMinusPlus = (id) => {
    setPlusMinusId(id);
  };

  useEffect(() => {
    // Check if multiNumberId is not null
    if (plusMinusId !== "") {
      // Check if an object with the same "plusMinusId" exists in plusMinusArray
      const existingObjectIndex = plusMinusArray.findIndex(
        (obj) => obj.serviceCriteriaId === plusMinusId
      );

      if (existingObjectIndex !== -1) {
        // If the object with the same "plusMinusId" exists, update its key-values
        setPlusMinusArray((prevArr) =>
          prevArr.map((obj, index) =>
            index === existingObjectIndex
              ? { ...obj, count: plusMinusValue }
              : obj
          )
        );
      } else {
        // If the object with the "plusMinusId" doesn't exist, add a new object to plusMinusArray
        setPlusMinusArray((prevArr) => [
          ...prevArr,
          { serviceCriteriaId: plusMinusId, count: plusMinusValue },
        ]);
      }
    }
  }, [plusMinusId, plusMinusValue]);
  //

  /* --------------------- Text input functionality-FilterType=2 --------------------- */
  const [inputTextValue, setInputTextValue] = useState(0);
  const [inputTextId, setInputTextId] = useState("");
  const [inputTextObject, setInputTextObject] = useState({});

  useEffect(() => {
    setInputTextObject(
      inputTextId
        ? {
            serviceCriteriaId: inputTextId,
            count: inputTextValue ? inputTextValue : 0,
          }
        : {}
    );
  }, [inputTextId, inputTextValue]);

  const handleDataUpdateForInputText = (value, criteriaId) => {
    setInputTextId(criteriaId);
    setInputTextValue(value);
  };

  const handleCriteriaIdForInputText = (id) => {
    setInputTextId(id);
  };

  /* --------------------- Radio button functionality-FilterType=4 --------------------- */
  const [selectedRadioName, setSelectedRadioName] = useState(null);
  const [selectedRadioId, setSelectedRadioId] = useState("");
  const [radioBtnObject, setRadioBtnObject] = useState({}); // Define it in the component's scope

  const handleChange = (value, criteriaId) => {
    setSelectedRadioName(value);
    setSelectedRadioId(criteriaId);
  };
  // getting data from radio button to calculate the price
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

  /* --------------------- Checkbox functionality-FilterType=4 --------------------- */
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

  /* --------------------- Calculating Price of the Service --------------------- */
  const [getPrice, setGetPrice] = useState(0);

  useEffect(() => {
    const calculatePrice = [
      radioBtnObject,
      ...checkedCheckboxArray,
      ...multiNumberArray,
      ...plusMinusArray,
      inputTextObject,
    ];

    // it gets rid of an element which its length is 0
    const filteredCalculatePrice = calculatePrice.filter(
      (item) => Object.keys(item).length !== 0
    );
    console.log(filteredCalculatePrice);

    // calculating the price
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
  }, [
    checkedCheckboxArray,
    multiNumberArray,
    radioBtnObject,
    plusMinusArray,
    inputTextObject,
  ]); // when one of these dependencies is updated, the filteredCalculatePrice becomes null

  // when selectMain is updated,elements which go to calculate price become empty
  useEffect(() => {
    setCheckedCheckboxArray([]);
    setMultiNumberArray([]);
    setRadioBtnObject([]);
    setPlusMinusArray([]);
    setInputTextObject({});
    setGetPrice(0); // Set getPrice to 0 when selectMain,selectedSub,selectedSub2 is updated
  }, [selectedMain, selectedSub, selectedSub2]);

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
    descMain: selectedMainService.text,
    selectedSub,
    descSub: selectedSubService.text,
    selectedSub2,
    descSub2: selectedSub2Service.text,
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
        {selectedMainService.text ? (
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
                  {/*  */}
                  {serviceCriteries.length === 0 &&
                  serviceCriteria.filterType === 1 ? (
                    <InputPlusMinus
                      updateCriteriaValue={handleDataUpdateForMinusPlus}
                      updateCriteriaId={handleCriteriaIdForMinusPlus}
                      criteriaId={serviceCriteria.id}
                    />
                  ) : serviceCriteries.length === 0 &&
                    serviceCriteria.filterType === 2 ? (
                    <InputCustomized
                      label="kv.m"
                      type="number"
                      inputTextId={serviceCriteria.id}
                      updateInputTextValue={handleDataUpdateForInputText}
                      updateInputTextId={handleCriteriaIdForInputText}
                    />
                  ) : (
                    ""
                  )}
                  {/*  */}
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
