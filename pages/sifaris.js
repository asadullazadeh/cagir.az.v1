import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Toggle from "@/src/components/form/toggle";
import Qiymet from "@/src/components/form/qiymet";
import Dropdown from "@/src/components/form/dropdown";
import DropdownMob from "@/src/components/form/dropdownMob";

import Checkbox from "@/src/components/form/checkbox";
import CustomInput from "@/src/components/form/custom_input";
import Textarea from "@/src/components/form/textarea";
import Download_image from "@/src/components/form/download_image";
import Promocode from "@/src/components/form/promocode";
import PaymentMethod from "@/src/components/form/payment_method";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";
import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import LinkSmBtn from "@/src/components/buttons/link_sm_btn";

import info_btn from "@/icons/form/info_btn.svg";
import Map_Image from "@/public/Map_Image.png";
import RayonDesktop from "@/src/components/buttons/rayon_desktop";
import InputCustomized from "@/src/components/buttons/input";
import MapBtn from "@/src/components/buttons/map_btn";

function Sifaris() {
  const [showSecondChild, setShowSecondChild] = useState(false);

  const toggleSecondChild = () => {
    setShowSecondChild(!showSecondChild);
  };

  const [showTextarea, setshowTextarea] = useState(true);

  const toggleTextarea = () => {
    setshowTextarea(!showTextarea);
  };

  return (
    <div className="lg:grid lg:grid-cols-4 lg:space-x-[60px]">
      {/* sticky element-info button for mobile */}
      <div className="block lg:hidden fixed top-1/2 right-0 pr-[10px] ">
        {/* Content of the sticky element */}
        <Image src={info_btn} alt="info_btn" className="w-[25px] h-[25px]" />
      </div>
      {/* Left side of first part in Sifaris */}
      <div className="lg:col-span-1 min-w-[204px] lg:gap-y-[25px] space-y-[25px]">
        <div className="py-[10px] px-[15px] mt-[10px] mb-[20px] lg:m-0 lg:p-0 shadow-dropblack25 lg:shadow-none rounded-[10px]">
          <Qiymet />
        </div>
        <div className=" hidden lg:block">
          <Toggle />
        </div>
      </div>
      {/* Right side of first part in Sifaris */}

      <div className="col-span-3">
        <h4
          className="font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
      text-black500 text-center pb-[15px] lg:pb-[15px]"
        >
          Sifarişi yarat
        </h4>

        <div className="grid lg:grid-cols-3 justify-items-stretch lg:gap-x-[40px] gap-y-[15px]">
          <Dropdown />
          <DropdownMob />
          <Dropdown />
          <DropdownMob />
          <Dropdown />
          <DropdownMob />
        </div>
        {/* Checmark */}
        {/* ex:Neçə kv.m sahə təmizlənəcək? */}
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
            <Checkbox name="50 kv. metrə qədər" />
            <Checkbox name="50-101 kv. metrə qədər" />
            <Checkbox name="101-150 kv. metr" />
            <Checkbox name="150 kv. metrdən çox" />
          </div>
        </div>
        {/* Checkmark and custom input */}
        {/* ex:Əlavə istəklərinizi seçin*/}
        <div className="flex flex-col pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] text-black500">
            Əlavə istəklərinizi seçin
          </h5>
          <div className="flex flex-row py-[15px] gap-x-[5px] lg:py-0 lg:order-2">
            <button>
              <Image src={info_btn} alt="info_btn" />
            </button>
            <p className="font-medium text-[10px] leading-[15px]  text-gray900">
              Ütüləmə punktunu seçdiyinizə görə + 10AZN əlavə olundu
            </p>
          </div>
          <div className="flex flex-wrap pb-[15px] gap-y-[15px] py-0 lg:py-[5px] lg:order-1">
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
              <Checkbox name="Nərdivan" />
              <Checkbox name="Ütüləmə" />
              <Checkbox name="Qabları yuma" />
              <Checkbox name="Pərdələrin yuyulması + ütü" />
              <Checkbox name="Əlavə hamam / tualet var" />
              <Checkbox name="Mebelin daxildən təmizlənməsi" />
              <button
                className=" font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
                onClick={toggleSecondChild}
              >
                {showSecondChild ? "" : "Daha çox gör"}
              </button>
            </div>

            <div
              className={`${
                showSecondChild ? "block" : "hidden"
              } flex flex-wrap w-full lg:gap-x-[15px] gap-y-[15px] lg:pr-[15px]`}
            >
              <CustomInput name="Pəncərə (təmir sonrası (2 metrdən böyük)" />
              <CustomInput name="Şüşə təmizliyi (alpinist - sadə təmizləmə) kv.m" />
              <CustomInput name="Şüşə təmizliyi (təmir sonrası) kv.m" />
              <CustomInput name="Şüşə təmizliyi (sadə təmizləmə) kv.m" />

              <CustomInput name="Şüşə təmizliyi (alpinist-təmir) kv.m" />
              <CustomInput name="Şüşə təmizliyi (alpinist - sadə təmizləmə) kv.m" />
              <CustomInput name="Şüşə təmizliyi (təmir sonrası) kv.m" />
              <CustomInput name="Divan təmizliyi (1 oturacaq)" />
              <CustomInput name="Şüşə təmizliyi (təmir sonrası) kv.m" />
              <CustomInput name="Pəncərə (2 metrdən böyük)" />
              <button
                className="mx-auto lg:m-0  font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
                onClick={toggleSecondChild}
              >
                {showSecondChild ? "Bağla" : ""}
              </button>
            </div>
          </div>
        </div>
        {/* ex:Bilməli olduğumuz detallar */}
        <div className="flex flex-col pt-[50px] lg:pt-[30px]">
          <h5 className="font-semibold text-[12px] leading-[18px] pb-[15px] lg:pb-[5px] text-black500">
            Bilməli olduğumuz detallar
          </h5>
          <div className="flex flex-wrap pb-[15px] gap-y-[15px] lg:order-1">
            <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
              <Checkbox name="Ev əşyalıdır" />
              <Checkbox name="Hamam / tualetin kimyəvi dərmanlara qarşı həssaslığı" />
              <Checkbox name="Oboyun suya qarşı həssaslığı" />
              {/* for textarea/Diger button */}
              <button
                className="font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
                onClick={toggleTextarea}
              >
                {showTextarea ? "" : "Digər"}
              </button>
            </div>
          </div>
        </div>
        {/* more info section */}
        <div>
          <div
            className={`${
              showTextarea ? "block" : "hidden"
            } flex flex-col pt-[15px]`}
          >
            <Textarea />
            {/* for textarea/bagla button */}
            <button
              className="mx-auto font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-cagiraz "
              onClick={toggleTextarea}
            >
              {showTextarea ? "Bagla" : ""}
            </button>
          </div>
        </div>
        {/* second part of sifaris section-Sifarisi tamamla */}
        <div className="">
          <h4
            className="font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[14px] lg:leading-[30px] 
        text-black500 pb-[20px] lg:pb-[30px] pt-[30px]"
          >
            Sifarişi tamamla
          </h4>
          <div className="lg:grid lg:grid-cols-10 gap-x-[40px] ">
            <div className="col-span-3 ">
              <div className="flex flex-col h-full justify-between gap-y-[15px] lg:gap-y-0">
                <InputCustomized />
                {/* Tarixi sec */}
                <InputCustomized />
                {/* map section for mobile */}
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
            </div>

            <div className="col-span-7 ">
              {/* map section for desktop */}
              <div className="flex flex-col hidden lg:block space-y-[5px]">
                <MapBtn />
                <Image
                  src={Map_Image}
                  alt="map_image"
                  className="w-full aspect-[666/365]"
                />
              </div>
            </div>
            <div className="col-span-3 flex flex-row justify-between pt-[25px] lg:pt-[35px]">
              <LinkSmBtn btnName="Geri" classNames="hidden lg:block" />
              <PrimaryOutlineSmBtn
                btnName="Sıfırla"
                classNames="hidden lg:block"
              />
              <PrimarySmBtn btnName="Təsdiqlə" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sifaris;
