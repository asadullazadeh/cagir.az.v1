import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import { FormattedMessage, useIntl } from "react-intl";
import NavbarDesktop from "@/src/components/header/navbarDesktop";
import NavbarMobile from "@/src/components/header/navbarMobile";
import Footer from "@/src/components/main/footer";
import TabBar from "@/src/components/mobile/tab_bar";
import ModalStandart from "@/src/components/modal/modal_stand";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import CallIncmngWp from "@/src/components/buttons/call_incmng_wp";
import SearchServices from "@/src/components/main/search_services";
export default function Layout({ children }) {
  // pass data from NavbarMobile
  const [ifSearchIconClicked, setifSearchIconClicked] = useState(false);
  // Callback function to be passed to the child component
  const SearchIconIsClickInNavbar = (data) => {
    setifSearchIconClicked(data);
  };

  // pass data from NavbarDesktop
  const [ifSearchIconClickedDesktop, setIfSearchIconClickedDesktop] =
    useState(false);
  // Callback function to be passed to the child component
  const SearchIconIsClickInNavbarDesktop = (data) => {
    setIfSearchIconClickedDesktop(data);
  };
  //
  const router = useRouter();
  //
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.cagir.az/api/service/getAllForFront", {
        headers: {
          "Accept-Language": "az",
        },
      })
      .then((response) => {
        // Handle the response data
        setResponseData(response.data.result);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  console.log(responseData);

  // add home page with account to this array
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let visiblePages = [
    "/",
    "/blog",
    "/media",
    "/xidmet",
    "/haqqimizda",
    "/elaqe",
  ]; // Add the paths of the pages where the element should be visible

  const [isElementVisible, setisElementVisible] = useState(false);
  useEffect(() => {
    if (!router.query.subService && router.query.mainService) {
      setisElementVisible(true);
    } else if (visiblePages.includes(router.asPath)) {
      setisElementVisible(true);
    } else {
      setisElementVisible(false);
    }
  }, [
    router.query.subService,
    router.query.mainService,
    router.asPath,
    visiblePages,
  ]);

  //
  const { locales } = useRouter();
  const intl = useIntl();
  const chosenLang = intl.locale
  const messages = intl.messages

  return (
    <div className="screen1700:max-w-[1512px]">
      <Head>{/* <title>Cagir.az</title> */}</Head>
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavbarDesktop {...{messages}} ifSearchIconClicked={SearchIconIsClickInNavbarDesktop} />
        <NavbarMobile {...{messages}} ifSearchIconClicked={SearchIconIsClickInNavbar} />
      </div>
      <main
        className={`flex flex-col px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full ${
          ifSearchIconClicked || ifSearchIconClickedDesktop ? "hidden" : ""
        }`}
      >
        {/* Content */}
        {children}
      </main>

      <div
        className={`${
          ifSearchIconClicked || ifSearchIconClickedDesktop
            ? "block px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full"
            : "hidden"
        }`}
      >
        <SearchServices {...{messages}} {...{chosenLang}} />
      </div>

      <div className={isElementVisible ? "flex justify-center" : "hidden"}>
        <div className="z-90 flex justify-center items-center lg:hidden">
          <SifarishBtn classNames="bottom-[62px] fixed" />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center ">
        <CallIncmngWp classNames="bottom-[80px] fixed" />
      </div>
      {/* TabBar/footer */}
      <div className="">
        <TabBar {...{messages}} classNames="fixed bottom-0 left-0 z-50 lg:hidden" />
        <Footer {...{messages}} />
      </div>
    </div>
  );
}
