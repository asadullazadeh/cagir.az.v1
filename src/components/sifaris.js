import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Success_Page from "@/src/components/others/success_page";

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
import Receipt from "@/src/components/payment_result";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";

/* -------------------------------------------------------------------------- */
/*                                   Sifaris                                  */
/* -------------------------------------------------------------------------- */
function Sifaris({
  defaultMain,
  defaultSub,
  sendSubUrl,
  onSelectedNamesArray,
  onSelectedMainChange,
}) {
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;
  // passing selectedService names from dropdown to sifaris
  const [selectedNamesArray, setSelectedNamesArray] = useState("");
  const handleSelectedNamesArray = (data) => {
    setSelectedNamesArray(data);
    onSelectedNamesArray(selectedNamesArray);
  };

  /* ----------------- mainServices functionality ----------------- */
  const [selectedMain, setSelectedMain] = useState(
    defaultMain ? defaultMain.serviceNames?.[0].name : ""
  );
  const [getMainServices, setgetMainServices] = useState([]);

  const handleMainSelect = (mainService) => {
    setSelectedMain(mainService);
  };

  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
        headers: {
          "Accept-Language": chosenLang,
        },
      })
      .then((response) => {
        setgetMainServices(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [chosenLang]);

  const findInfoByName = (mainServices, name) => {
    const { id, serviceNames } =
      mainServices.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: id || null,
      text: serviceNames?.[0]?.text || null,
    };
  };

  const selectedMainService = findInfoByName(getMainServices, selectedMain);

  useEffect(() => {
    if (typeof onSelectedMainChange === "function") {
      onSelectedMainChange(selectedMain);
    }
  }, [onSelectedMainChange, selectedMain]);

  /* ------------------ subServices functionality ----------------- */
  const [selectedSub, setSelectedSub] = useState(
    defaultSub ? defaultSub.serviceNames?.[0].name : ""
  );
  const handleSubSelect = (subService) => {
    setSelectedSub(subService);
  };
  const [getSubServices, setgetSubServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${selectedMainService.id}`,
        {
          headers: {
            "Accept-Language": chosenLang,
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
  }, [selectedMainService.id, chosenLang]);
  const findSubInfoByName = (subServices, name) => {
    const subService =
      subServices.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: subService?.id || null,
      text: subService?.serviceNames?.[0]?.text || null,
    };
  };
  // to get id and text of selected main service, selectedMainService.id or selectedMainService.text
  const selectedSubService = findSubInfoByName(getSubServices, selectedSub);
  // console.log(selectedSubService)
  // findind previous SubNameUrl and pass it to Sifaris page to change the url
  const findSubNameUrlByName = (subServices, name) => {
    const subService =
      subServices.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return subService?.nameUrl || null;
  };
  const selectedSubNameUrl = findSubNameUrlByName(getSubServices, selectedSub);
  const [subUrlToMainPage, setSubUrlToMainPage] = useState("");

  // Use useEffect to call the callback whenever subUrlToMainPage changes
  useEffect(() => {
    if (typeof sendSubUrl === "function") {
      sendSubUrl(selectedSubNameUrl);
      setSubUrlToMainPage(selectedSubNameUrl);
    }
  }, [sendSubUrl, selectedSubNameUrl]);

  useEffect(() => {
    setSelectedMain(selectedMain);
    setSelectedSub(defaultSub?.serviceNames?.[0]?.name);
  }, [defaultSub, getSubServices, selectedMain]);
  /* ----------------------- sub2Services functionality ----------------------- */
  const [selectedSub2, setSelectedSub2] = useState("");
  const [getSub2Services, setgetSub2Services] = useState([]);
  const handleSub2Select = (sub2Service) => {
    setSelectedSub2(sub2Service);
  };

  // checking if sub2 element is exist after choosing sub element
  const isSub2ElementsExist = getSub2Services.length > 0;
  // selectedSub || (selectedNamesArray[1] !== "" && getSub2Services.length > 0);
  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${selectedSubService.id}`,
        {
          headers: {
            "Accept-Language": chosenLang,
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
  }, [selectedSubService.id, chosenLang]);

  const findSub2InfoByName = (sub2Services, name) => {
    const sub2Service =
      sub2Services.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: sub2Service?.id || null,
      text: sub2Service?.serviceNames?.[0]?.text || null,
    };
  };
  //
  useEffect(() => {
    setSelectedSub2("");
    setgetSub2Services([]);
  }, [selectedMain, selectedSub]);
  //
  // to get id and text of selected main service, selectedMainService.id or selectedMainService.text
  const selectedSub2Service = findSub2InfoByName(getSub2Services, selectedSub2);

  /* ---------------------- Select criterias ---------------------- */
  const [getServiceCriterias, setgetServiceCriterias] = useState([]);
  console.log("selectedSub2Service:", selectedSub2Service.id);
  console.log("selectedSubService:", selectedSubService.id);
  // console.log(isSub2ElementsExist)

  useEffect(() => {
    const serviceId = isSub2ElementsExist
      ? selectedSub2Service.id
      : selectedSubService.id;
    console.log(serviceId);
    axios
      .post(
        "https://api.cagir.az/api/serviceCriteria/getAllWithParent",
        [serviceId],
        {
          headers: {
            "Accept-Language": chosenLang,
          },
        }
      )
      .then((response) => setgetServiceCriterias(response.data.result))
      .catch((error) => console.error(error));
  }, [
    isSub2ElementsExist,
    selectedSubService.id,
    selectedSub2Service.id,
    chosenLang,
  ]);
  console.log(getServiceCriterias);

  /* --------------------- Multinumber input functionality-FilterType=5 --------------------- */
  // multiNumberArray takes all the information of multi number input for pricing
  const [multiNumberValue, setMultiNumberValue] = useState(0);
  const [multiNumberId, setMultiNumberId] = useState("");
  const [multiNumberName, setMultiNumberName] = useState("");
  const [multiNumberArray, setMultiNumberArray] = useState([]);
  const handleDataUpdate = (value) => {
    setMultiNumberValue(value);
  };

  const handleCriteriaId = (id) => {
    setMultiNumberId(id);
  };

  const handleNameForMultiNumber = (name) => {
    setMultiNumberName(name);
  };

  useEffect(() => {
    if (!multiNumberId) return;

    const existingObjectIndex = multiNumberArray.findIndex(
      (obj) => obj.serviceCriteriaId === multiNumberId
    );

    if (existingObjectIndex !== -1) {
      setMultiNumberArray((prevArr) =>
        prevArr.map((obj, index) =>
          index === existingObjectIndex
            ? { ...obj, name: multiNumberName, count: multiNumberValue }
            : obj
        )
      );
    } else {
      setMultiNumberArray((prevArr) => [
        ...prevArr,
        {
          serviceCriteriaId: multiNumberId,
          name: multiNumberName,
          count: multiNumberValue,
        },
      ]);
    }
  }, [multiNumberName, multiNumberId, multiNumberValue]);

  /* --------------------- Plus-Minus input functionality-FilterType=1 --------------------- */
  const [plusMinusValue, setPlusMinusValue] = useState(0);
  const [plusMinusId, setPlusMinusId] = useState("");
  const [plusMinusArray, setPlusMinusArray] = useState([]);

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
    if (!inputTextId) return;

    setInputTextObject({
      serviceCriteriaId: inputTextId,
      count: Number(inputTextValue),
    });
  }, [inputTextId, inputTextValue]);

  const handleDataUpdateForInputText = (criteriaId, value) => {
    setInputTextId(criteriaId);
    setInputTextValue(value);
  };

  // const handleCriteriaIdForInputText = (id) => {
  //   setInputTextId(id);
  // };

  /* --------------------- Radio button functionality-FilterType=4 --------------------- */
  const [selectedRadioName, setSelectedRadioName] = useState(null);
  const [selectedRadioId, setSelectedRadioId] = useState("");
  const [radioBtnObject, setRadioBtnObject] = useState({});

  const handleChange = (value, criteriaId) => {
    setSelectedRadioName(value);
    setSelectedRadioId(criteriaId);
  };

  useEffect(() => {
    setRadioBtnObject(
      selectedRadioId
        ? {
            name: selectedRadioName,
            serviceCriteriaId: selectedRadioId,
            count: 1,
          }
        : {}
    );
    // If you have other logic within useEffect, place it here

    // If you need a clean-up function, keep it
    return () => {
      // Clean-up logic here
    };
  }, [selectedRadioName, selectedRadioId]);

  /* --------------------- Checkbox functionality-FilterType=4 --------------------- */
  // checkmarks, to see more info-customized inputs in form section
  const [showSecondChild, setShowSecondChild] = useState(false);
  const toggleSecondChild = () => {
    setShowSecondChild(!showSecondChild);
  };
  const [checkboxId, setCheckboxId] = useState(null);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [checkedCheckboxName, setCheckedCheckboxName] = useState("");
  const [checkedCheckboxArray, setCheckedCheckboxArray] = useState([]);

  const handleDataFromChild = (name, criteriaId, isChecked) => {
    setCheckboxId(criteriaId);
    setCheckboxIsChecked(isChecked);
    setCheckedCheckboxName(name);
  };

  useEffect(() => {
    if (checkboxIsChecked && checkboxId) {
      // Create the object with two key-value pairs
      const newObj = {
        name: checkedCheckboxName,
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
  }, [checkedCheckboxName, checkboxIsChecked, checkboxId]);

  /* --------------------- Calculating Price of the Service --------------------- */
  // const priceBeforePromo = 100;
  const [priceBeforePromo, setPriceBeforePromo] = useState(0);
  //
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

  useEffect(() => {
    // calculating the price
    axios
      .post(
        "https://api.cagir.az/api/serviceCriteria/calculate",
        [...filteredCalculatePrice],
        {
          headers: {
            "Accept-Language": "",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setPriceBeforePromo(response.data.result.amount);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [filteredCalculatePrice]); // when one of these dependencies is updated, the filteredCalculatePrice becomes null

  //price after promocode
  const [priceAfterPromo, setPriceAfterPromo] = useState(0);

  const handlePriceUpdate = (value) => {
    setPriceAfterPromo(value); // Update the receivedValue state in the parent component
  };

  // when selectMain is updated,elements which go to calculate price become empty
  useEffect(() => {
    setgetServiceCriterias([]);
    setCheckedCheckboxArray([]);
    setMultiNumberArray([]);
    setRadioBtnObject([]);
    setPlusMinusArray([]);
    setInputTextObject({});
    setPriceAfterPromo(0);
    setPriceBeforePromo(0); // Set priceBeforePromo to 0 when selectMain,selectedSub,selectedSub2 is updated
  }, [selectedMain, selectedSub, selectedSub2]);

  /* -------------------------------- Textarea functionality -------------------------------- */
  const [showTextarea, setshowTextarea] = useState(true);
  const [receivedMessage, setReceivedMessage] = useState("");
  const toggleTextarea = () => {
    setshowTextarea(!showTextarea);
  };
  // Define the callback function to receive the "message" data from the Textarea component
  const handleMessage = (message) => {
    setReceivedMessage(message);
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
    selectedSub: selectedSub ?? selectedNamesArray[1],
    descSub: selectedSubService.text,
    selectedSub2,
    descSub2: selectedSub2Service.text,
    selectedNamesArray,
    messages,
    chosenLang,
  };

  // dropdownProps.to pass data from one dropdown to other one and selected service
  const dropdownProps = {
    onSelectMainService: handleMainSelect,
    getMainServices,
    onSelectSubService: handleSubSelect,
    getSubServices,
    onSelectSub2Service: handleSub2Select,
    getSub2Services,
    defaultMain,
    defaultSub,
    messages,
    chosenLang,
  };
  // Callback function to which service service Category from the Dropdown component
  //checking which service category is selected.Main-1,sub-2,sub2-2
  const [whichServiceCategory, setWhichServiceCategory] = useState(null);
  const handleCategoryLevelFromDropdown = (data) => {
    setWhichServiceCategory(data);
  };
  /* -------------------------------- Creating order -------------------------------- */
  const [tesdiqleButton, setTesdiqleButton] = useState(false);
  const handleTesdiqleClicked = () => {
    setTesdiqleButton(true);
    fetchData();
  };

  // upload image
  const [childUploadImage, setChildUploadImage] = useState({
    imageData: null,
    imageBase64: "",
  });

  const handleChildImageUpload = useCallback((uploadImage) => {
    setChildUploadImage(uploadImage);
  }, []);

  //add address
  const [address, setaddress] = useState("");

  const handleAddressUpdate = (criteriaId, value) => {
    setaddress(value);
  };

  // add number
  const [addNumber, setaddNumber] = useState("");

  const handleDataInputNumber = (data) => {
    setaddNumber(data);
  };

  //
  const objectDetails = {
    amount: priceBeforePromo,
    payType: 2,
    address: address,
    note: receivedMessage,
    phoneNumber: addNumber,
    startDate: "2023-08-30T10:00:00",
    orderDetails: [...filteredCalculatePrice],
    orderImages: [
      { imageBase64: childUploadImage.imageBase64 },
      { imageExtension: childUploadImage.imageData?.name },
    ],
  };

  const [isOrderPassed, setIsOrderPassed] = useState(false);
  const [orderPassed, setOrderPassed] = useState(null);
  // const [receivedData, setReceivedData] = useState(null);

  const handleDataFromChildBtn = (data) => {
    setIsOrderPassed(data);
  };

  if (isOrderPassed) {
    axios
      .post(
        "https://api.cagir.az/api/order/v3/create",
        objectDetails, // Make sure you define `objectDetails` before using it
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setOrderPassed(response.data.isSuccess);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  // const fetchData = () => {
  // axios
  //   .post(
  //     "https://api.cagir.az/api/order/v3/create",
  //     objectDetails, // Make sure you define `objectDetails` before using it
  //     {
  //       headers: {
  //         "Accept-Language": "az",
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     // Handle the response data
  //     setIsOrderPassed(response.data.isSuccess);
  //   })
  //   .catch((error) => {
  //     // Handle any errors
  //     console.error(error);
  //   });
  // };
  // console.log(isOrderPassed);

  /* -------------------------------- data to receipt -------------------------------- */
  const dataReceipt = {
    amount: priceBeforePromo,
    payType: 2,
    address: "42, rue Antoine Charial,69003",
    note: receivedMessage,
    phoneNumber: "+994556984869",
    startDate: "2023-08-30T10:00:00",
    selectedNamesArray,
    criterias: [...filteredCalculatePrice],
  };

  // Geri button
  const router = useRouter();
  const goBack = () => {
    router.back(); // Navigates back to the previous page
  };

  // const sifirla = () => {
  //   // router.replace("/temizlik-xidmeti/ev-temizliyi")
  //   // router.reload()
  //   // router.reload(window.location.pathname)
  // }

  const [succesPage, setSuccesPage] = useState(false);

  useEffect(() => {
    if (isOrderPassed) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setSuccesPage(true);
      }, 500);
    }
  }, [isOrderPassed]);

  return (
    <div>
      {!isOrderPassed && (
        <div
          className={`flex flex-col lg:flex-row lg:gap-x-[30px] xl:gap-x-[40px] 2xl:gap-x-[60px]
      pb-[20px] lg:pt-[30px] lg:pb-[90px] w-full ${succesPage ? "" : ""}`}
        >
          {/* Left side of first part in Sifaris */}
          <div className="z-40 sticky top-[30px] lg:top-[110px] lg:h-screen overflow-y-auto flex flex-col lg:w-1/3 xl:w-1/4 gap-y-[25px] lg:gap-y-[25px] px-[5px]">
            <div className="z-20 sticky top-[0px] bg-white py-[10px] px-[15px] mt-[10px] mb-[20px] lg:m-0 lg:p-0 shadow-dropblack25 lg:shadow-none rounded-[10px]">
              <Qiymet {...{ priceBeforePromo, priceAfterPromo, messages }} />
            </div>
            {/* Toggle part is only  desktop */}
            {selectedMainService.text ? (
              <div className="z-10 hidden lg:block sticky ">
                <Toggle
                  {...toggleProps}
                  whichServiceCategory={whichServiceCategory}
                />
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
              {messages["order-create"]}
            </h4>
            {/* Dropdowns for services */}
            <div className="">
              <Dropdown
                {...dropdownProps}
                onDataCallback={handleCategoryLevelFromDropdown}
                onSelectedServiceNames={handleSelectedNamesArray}
              />
            </div>
            {/* criterias example */}

            <div className="flex flex-col pt-[30px] gap-y-[30px]">
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
                          label="Kv.m"
                          type="number"
                          inputTextId={serviceCriteria.id}
                          updateInputText={handleDataUpdateForInputText}
                          // updateInputTextId={handleCriteriaIdForInputText}
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
                                  selectedRadioName ===
                                  serviceCriteriaNames[0].name
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
                                updateMultiNumberName={handleNameForMultiNumber}
                              />
                            ) : (
                              serviceCriteriaNames[0].name
                            )}
                          </div>
                        )
                      )}
                    </div>
                    {/* <div className="flex flex-row gap-x-[5px] py-[15px] lg:py-0 lg:order-2">
                    <button>
                      <Image src={info_btn} alt="info_btn" />
                    </button>
                    <p className="font-medium text-[10px] leading-[15px] text-gray900">
                      50-101kv seçdiyinizə görə + 20AZN əlavə olundu
                    </p>
                  </div> */}
                  </div>
                )
              )}
              <div className="flex flex-col lg:flex-row">
                {isOpen && <Textarea sendMessage={handleMessage} />}
                <button
                  className={`pl-[10px] mx-auto lg:m-0 font-medium lg:font-extrabold text-[12px] lg:text-[14px] 
            leading-[18px] lg:leading-[21px] text-cagiraz ${
              isOpen ? "hidden" : ""
            }`}
                  onClick={handleToggle}
                >
                  {isOpen ? "" : messages["additional-notes"]}
                </button>
              </div>
            </div>

            {/* Sifarisi tamamla */}
            <h4
              className="font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
        text-black500 pb-[20px] lg:pb-[30px] pt-[30px]"
            >
              {messages["complete-the-order"]}
            </h4>

            <div className="flex flex-col lg:flex-row  lg:justify-between ">
              {/* inputs and map part */}
              <div className="flex flex-col xl:flex-row lg:gap-x-[30px] xl:gap-x-[30px] 2xl:gap-x-[40px] w-full lg:max-w-[350px] xl:max-w-[450px] 2xl:max-w-[500px]">
                {/* inputs and map for mobile */}
                <div className="flex flex-col gap-y-[15px] xl:gap-y-[20px] lg:justify-between w-full ">
                  <div>
                    <p className="hidden lg:block font-semibold text-[12px] leading-[18px] pb-[5px]">
                      {messages["select-date"]}
                    </p>
                    <Calendar />
                  </div>

                  {/* <InputCustomized /> */}
                  {/* Calendar,data picker */}

                  <Download_image
                    onImageUpload={handleChildImageUpload}
                    {...{ messages }}
                  />
                  <Promocode
                    serviceId={selectedMainService.id}
                    {...{ priceBeforePromo }}
                    onPromoPriceChange={handlePriceUpdate}
                    {...{ messages }}
                  />
                  <div className="block lg:hidden">
                    <InputCustomized
                      label="Ünvanı qeyd et"
                      type="text"
                      updateInputText={handleAddressUpdate}
                      // inputTextId={serviceCriteria.id}
                      // updateInputText={handleDataUpdateForInputText}
                      // updateInputTextId={handleCriteriaIdForInputText}
                    />
                  </div>
                  <div className="lg:hidden">
                    <PaymentMethod />
                  </div>
                </div>
              </div>

              {/* tesdiqle part */}

              <div className="flex flex-col lg:justify-between w-full lg:max-w-[300px] 2xl:max-w-[400px]">
                <div className="hidden lg:block">
                  <InputCustomized
                    label="Ünvanı qeyd et"
                    type="text"
                    updateInputText={handleAddressUpdate}
                    // inputTextId={serviceCriteria.id}
                    // updateInputText={handleDataUpdateForInputText}
                    // updateInputTextId={handleCriteriaIdForInputText}
                  />
                </div>
                <div className="hidden lg:block">
                  <PaymentMethod {...{ messages }} />
                </div>
                <div className="flex flex-row w-full justify-between pt-[20px]">
                  <LinkSmBtn
                    onClick={goBack}
                    btnName={messages["btn-back"]}
                    classNames="hidden lg:block"
                  />
                  <Link
                    // onClick={sifirla}
                    href="/temizlik-xidmeti/ev-temizleme"
                  >
                    <PrimaryOutlineSmBtn
                      btnName={messages.reset}
                      classNames="hidden lg:block"
                    />
                  </Link>

                  <PrimarySmBtn
                    onClick={() => window.my_modal_10.showModal()}
                    btnName={messages["confirm"]}
                    classNames="w-full"
                  />
                  <ModalStandart
                    dialogId="my_modal_10"
                    content={
                      <InputBtnNbTransition
                        name="Sürətli sifariş"
                        numberToParent={handleDataInputNumber}
                        sendDataToParent={handleDataFromChildBtn}
                        {...{ messages }}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {succesPage && <Success_Page />}
    </div>
  );
}

export default Sifaris;
