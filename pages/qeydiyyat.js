import React, { useEffect, useState } from "react";
import axios from "axios";
// import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import Link from "next/link";
import views from "@/icons/bloq/views.svg";
import Image from "next/image";
import InputCustomized from "@/src/components/input/input";
import InputPassword from "@/src/components/input/input_password";
import InputNumber from "@/src/components/input/input_number";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";
import { useRouter } from "next/router";

import {
  CheckBox,
  PrimarySmBtn,
  // PrimaryMdBtn,
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

  // console.log("firstName:", firstName);
  // console.log("lastName:", lastName);
  // console.log("email:", email);
  // console.log("number:", number);
  // console.log("mainPagePassword:", mainPagePassword);
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

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h2 className="my-h2 text-center pb-[15px] lg:pb-[60px]">Qeydiyyat</h2>
      <div className="flex flex-col justify-between w-full gap-y-[20px] lg:gap-y-[20px] lg:3/4 xl:w-2/3 2xl:w-1/2">
        <InputCustomized
          label="Ad"
          type="text"
          updateInputText={handleFirstNameUpdate}
        />
        <InputCustomized
          label="Soyad"
          type="text"
          updateInputText={handleLastNameUpdate}
        />
        <InputPassword
          changePswrdClasses="hidden"
          onPasswordChange={handlePasswordChange}
          label="Şifrə"
        />
        <InputCustomized
          label="Email"
          type="email"
          updateInputText={handleEmailUpdate}
        />
        <InputNumber
          updatedInputNumberValue={handleNumberUpdate}
          label="Telefon nömrəsi"
          changeNbrClasses="hidden"
        />

        <div className="flex flex-col justify-center lg:justify-end place-items-end	">
          <PrimaryMdBtn
            btnName="Təsdiq et"
            onclick={btnIsClicked}
            classNames="w-full lg:w-1/3 lg:w-auto"
          />
          <LinkSmBtn
            onClick={goBack}
            btnName="Geri"
            classNames="lg:hidden w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
