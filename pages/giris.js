import React, { useEffect, useState } from "react";
import axios from "axios";
// import PrimaryOutlineSmBtn from "@/src/components/buttons/primary_outline_sm_btn";
import Link from "next/link";
import views from "@/icons/bloq/views.svg";
import Image from "next/image";
import Head from "next/head";
import InputCustomized from "@/src/components/input/input";
import InputPassword from "@/src/components/input/input_password";
import InputNumber from "@/src/components/input/input_number";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';


import {
  CheckBox,
  PrimarySmBtn,
  // PrimaryMdBtn,
  PrimaryOutlineSmBtn,
  LinkSmBtn,
} from "@/src/components/buttons";

function SignIn() {
  //

  const [email, setEmail] = useState("");
  const [mainPagePassword, setMainPagePassword] = useState("");

  const handleEmailUpdate = (criteriaId, value) => {
    setEmail(value);
  };

  const handlePasswordChange = (password) => {
    setMainPagePassword(password);
  };

  console.log("email:", email);
  console.log("mainPagePassword:", mainPagePassword);
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigates back to the previous page
  };

  /* ----------------------------------- Sign Api ---------------------------------- */
  const [signin, setSignIn] = useState("");

  const btnIsClicked = () => {
    axios
      .post(
        "https://api.cagir.az/api/user/login",
        {
          username: email,
          password: mainPagePassword,
        }, // Make sure you define `objectDetails` before using it
        {
          headers: {
            "Accept-Language": "az",
          },
        }
      )
      .then((response) => {
        // Handle the response data
            setSignIn(response.data);
        
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  console.log(signin.isSuccess);

  // After successful login
//   const token = signin.result?.token;
// console.log(token);

useEffect(() => {
    const token = signin.result?.token;
    
    if (token) {
      // Store the token in localStorage
      localStorage.setItem('token', token);
    }
    console.log(localStorage);
  }, [signin]);


  return (
    <div>
            <Head><title>Cagir.az - Daxil ol</title></Head>

    <div className="flex flex-col items-center min-h-screen justify-center">
      <h2 className="my-h2 text-center pb-[15px] lg:pb-[60px]">Daxil ol</h2>
      <div className="flex flex-col justify-between w-full gap-y-[20px] lg:gap-y-[20px] lg:3/4 xl:w-2/3 2xl:w-1/2">
        <InputCustomized
          label="Email"
          type="email"
          updateInputText={handleEmailUpdate}
        />
        <InputPassword
          changePswrdClasses="hidden"
          onPasswordChange={handlePasswordChange}
          label="Şifrə"
        />
        <p className="hidden lg:block font-semibold text-[10px] leading-[15px] pl-[15px]">
          Hələ də qeydiyyatdan keçməmisən?
          <span className="font-medium text-[12px] leading-[18px] text-cagiraz pl-[5px]">
            <Link href="/qeydiyyat">Qeydiyyat</Link>
          </span>
        </p>

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
    </div>
  );
}

export default SignIn;
