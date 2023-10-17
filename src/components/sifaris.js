import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Success_Page from "@/src/components/others/success_page";

import {
  CustomInput,
  Textarea,
  InputCustomized,
  InputPlusMinus,
} from "@/src/components/input";
import {
  CheckBox,
  PrimarySmBtn,
  PrimaryOutlineSmBtn,
  LinkSmBtn,
  RadioButton,
} from "@/src/components/buttons";
import {
  Toggle,
  Qiymet,
  Dropdown,
  Download_image,
  PaymentMethod,
  Calendar,
} from "@/src/components/form";
import ModalStandart from "@/src/components/modal/modal_stand";
import InputBtnNbTransition from "@/src/components/input/input_btn_nb_transition";

/* -------------------------------------------------------------------------- */
/*                                   Sifaris                                  */
/* -------------------------------------------------------------------------- */
function Sifaris({
  getMainServices,
  getSubServices,
  defaultMain,
  defaultSub,
  sendSubUrl,
  onSelectedNamesArray,
  onSelectedMainChange,
}) {
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;
  const [selectedNamesArray, setSelectedNamesArray] = useState("");
  const handleSelectedNamesArray = (data) => {
    setSelectedNamesArray(data);
    onSelectedNamesArray(selectedNamesArray);
  };

  /* ---------------------------------- mainServices functionality ---------------------------------- */
  const [selectedMain, setSelectedMain] = useState(
    defaultMain.serviceNames?.[0].name || ""
  );

  const handleMainSelect = (mainService) => {
    setSelectedMain(mainService);
  };

  useEffect(() => {
    onSelectedMainChange(selectedMain);
  }, [onSelectedMainChange, selectedMain]);

  /* ---------------------------------- subServices functionality ---------------------------------- */
  const [selectedSub, setSelectedSub] = useState(
    defaultSub ? defaultSub.serviceNames?.[0].name : ""
  );
  const handleSubSelect = (subService) => {
    setSelectedSub(subService);
  };

  // to get id and text of selected main service, defaultMain.id or defaultMain.text
  const selectedSubNameUrl = defaultSub["nameUrl"];
  const findSubServiceInfoByName = (subServices, name) =>
  subServices.find((obj) => obj.serviceNames[0].name === selectedSub) || {}
  const subService = findSubServiceInfoByName(getSubServices, selectedSub);

  // Use useEffect to call the callback whenever subUrlToMainPage changes
  useEffect(() => {
    sendSubUrl(subService["nameUrl"]);
  }, [subService, sendSubUrl]);

  useEffect(() => {
    setSelectedMain(selectedMain);
    setSelectedSub(subService?.serviceNames?.[0]?.name);
  }, [defaultSub, getSubServices, selectedMain]);

  /* ----------------------------------  sub2Services functionality ---------------------------------- */
  const [selectedSub2, setSelectedSub2] = useState("");
  const [getSub2Services, setgetSub2Services] = useState([]);
  const handleSub2Select = (sub2Service) => {
    setSelectedSub2(sub2Service);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.cagir.az/api/service/getSubServicesByParentId?parentId=${defaultSub.id}`,
        {
          headers: {
            "Accept-Language": chosenLang,
          },
        }
      )
      .then((response) => {
        setgetSub2Services(response.data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [defaultSub.id, chosenLang]);

  const isSub2ElementsExist = getSub2Services.length > 0;

  const findSub2InfoByName = (sub2Services, name) => {
    const sub2Service =
      sub2Services.find((obj) => obj.serviceNames?.[0]?.name === name) || {};
    return {
      id: sub2Service?.id || null,
      text: sub2Service?.serviceNames?.[0]?.text || null,
    };
  };

  useEffect(() => {
    setSelectedSub2("");
    setgetSub2Services([]);
  }, [selectedMain, selectedSub]);

  // to get id and text of selected main service, defaultMain.id or defaultMain.text
  const selectedSub2Service = findSub2InfoByName(getSub2Services, selectedSub2);

  /* ----------------------------------  Select criterias ---------------------------------- */
  const [getServiceCriterias, setgetServiceCriterias] = useState([]);

  useEffect(() => {
    const serviceId = isSub2ElementsExist
      ? selectedSub2Service.id
      : defaultSub.id;

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
  }, [isSub2ElementsExist, defaultSub.id, selectedSub2Service.id, chosenLang]);

  /* ----------------------------------  Multinumber input functionality-FilterType=5 ---------------------------------- */

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

  /* ----------------------------------  Plus-Minus input functionality-FilterType=1 ---------------------------------- */
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

  /* ---------------------------------- Text input functionality-FilterType=2 ---------------------------------- */
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

  /* ---------------------------------- Radio button functionality-FilterType=4 ---------------------------------- */
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
  }, [selectedRadioName, selectedRadioId]);

  /* ---------------------------------- Checkbox functionality-FilterType=4 ---------------------------------- */
  // checkmarks, to see more info-customized inputs in form section
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

  /* ---------------------------------- Calculating Price of the Service ---------------------------------- */
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
        setPriceBeforePromo(response.data.result.amount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [filteredCalculatePrice]); // when one of these dependencies is updated, the filteredCalculatePrice becomes null

  // when selectMain is updated,elements which go to calculate price become empty
  useEffect(() => {
    setgetServiceCriterias([]);
    setCheckedCheckboxArray([]);
    setMultiNumberArray([]);
    setRadioBtnObject([]);
    setPlusMinusArray([]);
    setInputTextObject({});
    setPriceBeforePromo(0);
  }, [selectedMain, selectedSub, selectedSub2]);

  /* ---------------------------------- Textarea functionality ---------------------------------- */
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
    descMain: defaultMain.serviceNames[0].text,
    selectedSub: selectedSub ?? selectedNamesArray[1],
    descSub: defaultSub.serviceNames?.[0].text,
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

  /* ---------------------------------- Creating order ---------------------------------- */

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
        setOrderPassed(response.data.isSuccess);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /* ----------------------------------  data to receipt ---------------------------------- */
  // const dataReceipt = {
  //   amount: priceBeforePromo,
  //   payType: 2,
  //   address: "42, rue Antoine Charial,69003",
  //   note: receivedMessage,
  //   phoneNumber: "+994556984869",
  //   startDate: "2023-08-30T10:00:00",
  //   selectedNamesArray,
  //   criterias: [...filteredCalculatePrice],
  // };

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
              <Qiymet {...{ priceBeforePromo, messages }} />
            </div>
            {/* Toggle part is only  desktop */}
            {defaultMain.serviceNames[0].text ? (
              <div className="z-10 hidden lg:block sticky ">
                <Toggle {...toggleProps} {...{ whichServiceCategory }} />
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
              Sorğunu tamamla
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

                  <Download_image
                    onImageUpload={handleChildImageUpload}
                    {...{ messages }}
                  />
                  <div className="lg:hidden">
                    <PaymentMethod />
                  </div>
                </div>
              </div>

              {/* tesdiqle part */}
              <div className="flex flex-col lg:justify-between w-full lg:max-w-[300px] 2xl:max-w-[400px]">
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
                    btnName="Sorğu göndər"
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
