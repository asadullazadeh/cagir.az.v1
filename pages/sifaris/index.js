import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Toggle from "@/src/components/form/toggle";
import Qiymet from "@/src/components/form/qiymet";
import Dropdown1 from "@/src/components/form/dropdown1";
import Dropdown2 from "@/src/components/form/dropdown2";
import Dropdown3 from "@/src/components/form/dropdown3";
import CheckBox from "@/src/components/buttons/checkbox";
import CustomInput from "@/src/components/input/custom_input";
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
import MapBtn from "@/src/components/buttons/map_btn";
import Calendar from "@/src/components/form/datepicker";
import ModalStandart from "@/src/components/modal/modal_stand";

const firstChoices = [
  "50 kv. metrə qədər",
  "50-101 kv. metrə qədər",
  "101-150 kv. metr",
  "150 kv. metrdən çox",
];
const secondChoices = {
  checkmarks: [
    "Nərdivan",
    "Ütüləmə",
    "Qabları yuma",
    "Pərdələrin yuyulması + ütü",
    "Əlavə hamam / tualet var",
    "Mebelin daxildən təmizlənməsi",
  ],
  customInputs: [
    "Nərdivan",
    "Ütüləmə",
    "Qabları yuma",
    "Pərdələrin yuyulması + ütü",
    "Əlavə hamam / tualet var",
    "Mebelin daxildən təmizlənməsi",
  ],
};
const infosToKnow = [
  "Ev əşyalıdır",
  "Hamam / tualetin kimyəvi dərmanlara qarşı həssaslığı",
  "Oboyun suya qarşı həssaslığı",
];

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
  // console.log(getMainServices);
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
  // console.log(chosenSub2ServiceText);
  // sub2Services functionality finishes here

  // checkmarks, to see more info-customized inputs in form section
  const [showSecondChild, setShowSecondChild] = useState(false);
  const toggleSecondChild = () => {
    setShowSecondChild(!showSecondChild);
  };

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
  // console.log(chosenMainServiceText);
  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-x-[30px] xl:gap-x-[40px] 2xl:gap-x-[60px]
    lg:pt-[30px] lg:pb-[90px] w-full"
    >
      {/* Left side of first part in Sifaris */}
      <div className="z-40 sticky top-[20px] lg:top-[110px] lg:h-screen overflow-y-auto flex flex-col lg:w-1/3 xl:w-1/4 2xl:w-1/5 lg:gap-y-[25px] space-y-[25px]">
        <div className="z-20 sticky top-[0px] bg-white py-[10px] px-[15px] mt-[10px] mb-[20px] lg:m-0 lg:p-0 shadow-dropblack25 lg:shadow-none rounded-[10px]">
          <Qiymet />
        </div>
        {/* Toggle part is only  desktop */}
        {chosenMainServiceText ? (
          <div className="z-10 hidden lg:block sticky ">
            <Toggle
              selectedMain={selectedMain}
              descMain={chosenMainServiceText}
              selectedSub={selectedSub}
              descSub={chosenSubServiceText}
              selectedSub2={selectedSub2}
              descSub2={chosenSub2ServiceText}
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
          Sifarişi yarat
        </h4>
        {/* Dropdowns for services */}
        <div className="">
          <Dropdown1
            onSelectMainService={handleMainSelect}
            getMainServices={getMainServices}
            onSelectSubService={handleSubSelect}
            getSubServices={getSubServices}
            onSelectSub2Service={handleSub2Select}
            getSub2Services={getSub2Services}
          />

          {/* <Dropdown2
            onSelectSubService={handleSubSelect}
            getSubServices={getSubServices}
          />
          <Dropdown3
            onSelectSub2Service={handleSub2Select}
            getSub2Services={getSub2Services}
          /> */}
        </div>
        {/* Checmark */}
        {/* ex:Neçə kv.m sahə təmizlənəcək?-First choices */}
        <div className="flex flex-col pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] text-black500">
            Neçə kv.m sahə təmizlənəcək?
          </h5>
          <div className="flex flex-row gap-x-[5px] py-[15px] lg:py-0 lg:order-2">
            <button>
              <Image src={info_btn} alt="info_btn" />
            </button>
            <p className="font-medium text-[10px] leading-[15px] text-gray900">
              50-101kv seçdiyinizə görə + 20AZN əlavə olundu
            </p>
          </div>
          <div className="flex flex-wrap gap-[15px] py-0 lg:py-[5px]  lg:order-1">
            {firstChoices.map((firstChoice, index) => (
              <div key={index}>
                <CheckBox name={firstChoice} />
              </div>
            ))}
          </div>
        </div>

        {/* Əlavə istəklərinizi seçin-Second choices */}
        <div className="flex flex-col pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] text-black500">
            Əlavə istəklərinizi seçin
          </h5>
          <div className="flex flex-row py-[15px] gap-x-[5px] lg:py-0 lg:order-2">
            <button>
              <Image src={info_btn} alt="info_btn" />
            </button>
            <p className="font-medium text-[10px] leading-[15px] text-gray900">
              Ütüləmə punktunu seçdiyinizə görə + 10AZN əlavə olundu
            </p>
          </div>

          <div className="flex flex-col pb-[15px] gap-y-[15px] py-0 lg:py-[5px] lg:order-1">
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
              {secondChoices.checkmarks.map((checkmark, index) => (
                <div key={index}>
                  <CheckBox name={checkmark} />
                </div>
              ))}
              <button
                className="font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
                onClick={toggleSecondChild}
              >
                {showSecondChild ? "" : "Daha çox gör"}
              </button>
            </div>

            <div
              className={`${
                showSecondChild ? "flex" : "hidden"
              } flex-col lg:flex-row lg:flex-auto lg:flex-wrap  lg:gap-x-[15px] gap-y-[15px] lg:pr-[15px]`}
            >
              {secondChoices.customInputs.map((customInput, index) => (
                <div key={index}>
                  <CustomInput name={customInput} />
                </div>
              ))}
              <button
                className="mx-auto lg:m-0  font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
                onClick={toggleSecondChild}
              >
                {showSecondChild ? "Bağla" : ""}
              </button>
            </div>
          </div>
        </div>
        {/* ex:Bilməli olduğumuz detallar-Third choices */}
        <div className="flex flex-col pt-[50px] lg:pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] pb-[15px] lg:pb-[5px] text-black500">
            Bilməli olduğumuz detallar
          </h5>
          <div className="flex flex-wrap pb-[15px] gap-y-[15px] lg:order-1">
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
              {infosToKnow.map((info, index) => (
                <div key={index}>
                  <CheckBox name={info} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ex:Bilməli olduğumuz detallar-Third choices/more info section */}
        <div className="flex flex-col lg:flex-row ">
          {isOpen && <Textarea />}
          <button
            className="pl-[10px] mx-auto lg:m-0 font-medium lg:font-extrabold text-[12px] lg:text-[14px] 
            leading-[18px] lg:leading-[21px] text-cagiraz "
            onClick={handleToggle}
          >
            {isOpen ? "" : "Əlavə qeydlər"}
          </button>
        </div>
        {/* second part of sifaris section-Sifarisi tamamla */}

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
