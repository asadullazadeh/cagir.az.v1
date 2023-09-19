import React, { useState, useEffect } from "react";
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
  const [isSearchIconClickedMobile, setSearchIconClickedMobile] =
    useState(false);
  const [isSearchIconClickedDesktop, setSearchIconClickedDesktop] =
    useState(false);
  const [isElementVisible, setElementVisible] = useState(false);

  const router = useRouter();
  const { locales } = router;
  const { locale, messages } = useIntl();

  const visiblePages = [
    "/",
    "/blog",
    "/media",
    "/xidmet",
    "/haqqimizda",
    "/elaqe",
  ];

  useEffect(() => {
    if (!router.query.subService && router.query.mainService) {
      setElementVisible(true);
    } else if (visiblePages.includes(router.asPath)) {
      setElementVisible(true);
    } else {
      setElementVisible(false);
    }
  }, [router.query.subService, router.query.mainService, router.asPath]);

  return (
    <div className="screen1700:max-w-[1512px] bg-white">
      <Head>{/* <title>Cagir.az</title> */}</Head>

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <NavbarDesktop
          messages={messages}
          ifSearchIconClicked={setSearchIconClickedDesktop}
        />
        <NavbarMobile
          messages={messages}
          ifSearchIconClicked={setSearchIconClickedMobile}
        />
      </div>

      {/* Main Content */}
      <main
        className={`flex flex-col px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full ${
          isSearchIconClickedMobile || isSearchIconClickedDesktop
            ? "hidden"
            : ""
        }`}
      >
        {children}
      </main>

      {/* Search Services */}
      <div
        className={
          isSearchIconClickedMobile || isSearchIconClickedDesktop
            ? "block px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full"
            : "hidden"
        }
      >
        <SearchServices messages={messages} chosenLang={locale} />
      </div>

      {/* Buttons */}
      <div className={isElementVisible ? "flex justify-center" : "hidden"}>
        <SifarishBtn classNames="lg:hidden bottom-[62px] fixed" />
      </div>

      {/* Call Button */}
      <div className="hidden lg:flex justify-center items-center">
        <CallIncmngWp classNames="bottom-[80px] fixed" />
      </div>

      {/* TabBar & Footer */}
      <div>
        <TabBar
          messages={messages}
          classNames="fixed bottom-0 left-0 z-50 lg:hidden"
        />
        <Footer messages={messages} />
      </div>
    </div>
  );
}
