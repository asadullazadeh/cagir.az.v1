import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import InputCustomized from "@/src/components/input/input";
import InputNumber from "@/src/components/input/input_number";
import InputPassword from "@/src/components/input/input_password";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";
import client from "@/public/avatar.svg";

function Profil_settings() {
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale;
  const messages = intl.messages;
  const router = useRouter();

  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  /* --------------------------------- sign out -------------------------------- */

  /* --------------------------------- PROFILE DATA API -------------------------------- */
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    if (token.length > 0) {
      // Include the token in the request headers
      const headers = {
        Authorization: `Bearer ${token}`,
        "Accept-Language": "az",
      };

      axios
        .get("https://api.cagir.az/api/user/getCurrentUser", { headers })
        .then((response) => {
          setUserData(response.data.result);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);
  console.log(userData);

  function handleSignOut() {
    // Remove the token (or other authentication info) from storage
    localStorage.removeItem("token");

    // Redirect to a public page or the login page
    window.location.href = "/";
  }

  // if no profile is logged in, redirect to login page
  useEffect(() => {
    if (token.length === 0) {
      // router.replace('/giris');
    }
  }, [token, router]);

  return (
    <div>
      <Head>
        <title>Cagir.az - Daxil ol</title>
      </Head>
      <div className="flex flex-col items-center pt-[30px] pb-[60px] lg:pb-[70px] xl:pb-[80px] 2xl:pb-[90px]">
        <h2 className="my-h2 text-center pb-[15px] lg:pb-[90px]">
          Profil ayarları
        </h2>
        {/* Profil ayarlari */}
        <div className="flex flex-col lg:flex-row justify-between w-full lg:3/4 xl:w-2/3 2xl:w-1/2">
          <div className="flex flex-col items-center w-full lg:w-2/5">
            <Image
              src={client}
              alt="client"
              className="rounded-full object-cover object-center w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
            />
            <h5 className="my-h5 pt-[5px] pb-[15px] lg:pt-[5px] lg:pb-[20px]">
              {userData.firstName + " " + userData.lastName}
            </h5>
            <div className="hidden lg:flex flex-col gap-y-[30px] lg:pb-[30px]">
              <button
                onClick={() => {
                  handleSignOut();
                }}
                className="w-auto bg-white border-2 border-[#F64242] rounded-[30px] py-[10px] px-[26px]
                      font-extrabold text-[#F64242] text-[14px] leading-[21px] transition duration-400 transform hover:-translate-y-[5px]
                      "
              >
                Profildən çıx
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-[20px] lg:gap-y-[15px] justify-between lg:w-3/5">
            <InputCustomized label="Ad və soyad" />

            <InputNumber label="Nömrə" />
            <InputPassword label={messages.password} />
            <div className="flex lg:justify-end py-[30px]">
              <PrimaryMdBtn
                btnName={messages["btn-save"]}
                classNames="w-full lg:w-auto"
              />
            </div>
          </div>
        </div>
        {/* for mobile Profilden cix, profili sil buttons */}
        <div className="block lg:hidden pt-[30px] space-y-[30px] w-full border-t border-[#EAEAEA]">
          {/* Profilden cix button */}
          <button
            onClick={() => {
              handleSignOut();
            }}
            className="w-full lg:w-auto bg-white border-2 border-[#F64242] rounded-[30px] py-[10px] px-[26px]
                      font-extrabold text-[#F64242] text-[14px] leading-[21px] transition duration-400 transform hover:-translate-y-[5px]
                      "
          >
            Profildən çıx
          </button>
        </div>

        {/* Sifaris tarixcesi */}
        <h4 className="font-semibold lg:font-bold text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] pb-[55px] pt-[30px] lg:pb-[30px] border-t border-[#EAEAEA]">
          {messages["order-history"]}
        </h4>
        <div className="flex flex-col w-full lg:3/4 xl:w-2/3 2xl:w-1/2 ">
          {/* 1st */}
          <div className="flex flex-row justify-between pb-[15px] lg:pb-[10px]">
            <div className="flex flex-col">
              <p className="font-semibold text-[14px] leading-[21px]">
                Krosna xidməti
              </p>
              <p className="font-medium lg:font-medium text-[12px] leading-[18px]">
                1 May, 2023
              </p>
            </div>
            <p className="font-semibold text-[14px] lg:text-[18px] leading-[24px] lg:leading-[27px]>">
              45 AZN
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-row justify-between border-t border-[#EAEAEA] py-[15px] lg:py-[10px]">
            <div className="flex flex-col">
              <p className="font-semibold text-[14px] leading-[21px]">
                Dizayn xidməti
              </p>
              <p className="font-medium lg:font-medium text-[12px] leading-[18px]">
                5 Avqust, 2023
              </p>
            </div>
            <p className="font-semibold text-[14px] lg:text-[18px] leading-[24px] lg:leading-[27px]>">
              45 AZN
            </p>
          </div>
          {/* 3rd */}
          <div className="flex flex-row justify-between border-t border-[#EAEAEA] pt-[15px] lg:pt-[10px]">
            <div className="flex flex-col">
              <p className="font-semibold text-[14px] leading-[21px]">
                Təmizlik xidməti
              </p>
              <p className="font-medium lg:font-medium text-[12px] leading-[18px]">
                15 Iyun, 2023
              </p>
            </div>
            <p className="font-semibold text-[14px] lg:text-[18px] leading-[24px] lg:leading-[27px]>">
              45 AZN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil_settings;
