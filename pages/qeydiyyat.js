import React, { useEffect, useState } from "react";
import axios from "axios";
// import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import Link from "next/link";
import Head from "next/head";
import views from "@/icons/bloq/views.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import InputCustomized from "@/src/components/input/input";
import InputPassword from "@/src/components/input/input_password";
import InputNumber from "@/src/components/input/input_number";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

import {
  CheckBox,
  PrimarySmBtn,
  PrimaryOutlineSmBtn,
  LinkSmBtn,
} from "@/src/components/buttons";

function Registration() {
  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [mainPagePassword, setMainPagePassword] = useState("");

  const handleFirstNameUpdate = (criteriaId, value) => {
    setFirstName(value);
  };

  const handleLastNameUpdate = (criteriaId, value) => {
    setLastName(value);
  };

  const handleEmailUpdate = (criteriaId, value) => {
    setEmail(value);
  };

  const handleNumberUpdate = (value) => {
    setNumber(value);
  };

  const handlePasswordChange = (password) => {
    setMainPagePassword(password);
  };


  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigates back to the previous page
  };

  /* ----------------------------------- Register Api ---------------------------------- */
  const [register, setRegister] = useState("");

  const btnIsClicked = () => {
    axios
      .post(
        "https://api.cagir.az/api/user/register",
        {
          firstName: firstName,
          lastName: lastName,
          password: mainPagePassword,
          email: email,
          phoneNumber: number,
        }, // Make sure you define `objectDetails` before using it
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
        setRegister(response);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  const { locales } = useRouter();
  const intl = useIntl();
  const messages = intl.messages;

  useEffect(() => {
    if (register?.data?.token) {
      router.replace("/giris");
    }
  }, [register?.data?.token, router]);

  return (
    <div>
      <Head>
        <title>Cagir.az - Qeydiyyat</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen lg:justify-center pt-[20px] lg:pt-0">
        <h2 className="my-h2 text-center pb-[15px] lg:pb-[20px]">Qeydiyyat</h2>
        <div className="flex flex-col justify-between w-full gap-y-[20px] lg:w-2/5">
          <InputCustomized
            label={messages.name}
            type="text"
            updateInputText={handleFirstNameUpdate}
          />
          <InputCustomized
            label={messages.surname}
            type="text"
            updateInputText={handleLastNameUpdate}
          />
          <InputPassword
            changePswrdClasses="hidden"
            onPasswordChange={handlePasswordChange}
            label={messages.password}
          />
          <InputCustomized
            label={messages.email}
            type="email"
            updateInputText={handleEmailUpdate}
          />
          <InputNumber
            updatedInputNumberValue={handleNumberUpdate}
            label={messages.phone}
            changeNbrClasses="hidden"
          />

          <div className="flex flex-col justify-center lg:justify-end place-items-end	">
            <PrimaryMdBtn
              btnName={messages["do-confirm"]}
              onClick={btnIsClicked}
              classNames="w-full lg:w-1/3 lg:w-auto"
            />
            <LinkSmBtn
              onClick={goBack}
              btnName={messages["btn-back"]}
              classNames="lg:hidden w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
