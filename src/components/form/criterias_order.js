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

function Criterias_Order() {
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

  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-x-[30px] xl:gap-x-[40px] 2xl:gap-x-[60px]
    lg:pt-[30px] lg:pb-[90px] w-full"
    >
      {/* Right side of first part in Sifaris */}
      <div className="w-full z-[10] lg:z-auto">
        {/* Dropdowns for services */}

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
      </div>
    </div>
  );
}

export default Criterias_Order;
