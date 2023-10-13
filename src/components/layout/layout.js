import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useIntl } from "react-intl";
import NavbarDesktop from "@/src/components/header/navbarDesktop";
import NavbarMobile from "@/src/components/header/navbarMobile";
import Footer from "@/src/components/main/footer";
import TabBar from "@/src/components/mobile/tab_bar";
import ModalStandart from "@/src/components/modal/modal_stand";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import CallIncmngWp from "@/src/components/buttons/call_incmng_wp";
import SearchServices from "@/src/components/main/search_services";

export default function Layout({ children }) {
  //
  const [isExited, setIsExited] = useState(false);

  const handleExit = () => {
    setIsExited(true);
  };
  //
  const [isSearchIconClickedMobile, setSearchIconClickedMobile] =
    useState(false);
  const [isSearchIconClickedDesktop, setSearchIconClickedDesktop] =
    useState(false);

  useEffect(() => {
    if (!isSearchIconClickedMobile || !isSearchIconClickedDesktop) {
      setIsExited(false);
    }
  }, [isSearchIconClickedMobile, isSearchIconClickedDesktop]);

  // useEffect(() => {
  //   if(isExited){
  //   setSearchIconClickedMobile(false)
  //   setSearchIconClickedDesktop(false)
  //   }
  // },[isExited])
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
    const hasMainService = !router.query.subService && router.query.mainService;
    const isInVisiblePages = visiblePages.includes(router.asPath);
    const hasKeywordsInPath = ["/xidmet", "/blog", "/media"].some((keyword) =>
      router.asPath.includes(keyword)
    );

    setElementVisible(hasMainService || isInVisiblePages || hasKeywordsInPath);
  }, [router.query.subService, router.query.mainService, router.asPath]);
  console.log("isSearchIconClickedMobile:", isSearchIconClickedMobile);
  console.log("isSearchIconClickedDesktop:", isSearchIconClickedDesktop);
  console.log("isExited:", isExited);

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  useEffect(() => {
    if (
      !isSearchIconClickedMobile &&
      !isSearchIconClickedDesktop &&
      !isExited
    ) {
      setIsSearchVisible(false);
    } else if (
      (isSearchIconClickedMobile || isSearchIconClickedDesktop) &&
      !isExited
    ) {
      setIsSearchVisible(true);
    } else if (
      (!isSearchIconClickedMobile || !isSearchIconClickedDesktop) &&
      isExited
    ) {
      setIsSearchVisible(false);
    }
  }, [isExited, isSearchIconClickedDesktop, isSearchIconClickedMobile]);
  console.log(isSearchVisible);
  return (
    <div className="screen1700:max-w-[1512px] bg-white">
      <Head>{/* <title>Cagir.az</title> */}</Head>

      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <NavbarDesktop
          {...{ messages }}
          ifSearchIconClicked={setSearchIconClickedDesktop}
        />
        <NavbarMobile
          {...{ messages }}
          ifSearchIconClicked={setSearchIconClickedMobile}
        />
      </div>

      {/* Main Content */}
      <main
        className={`flex flex-col px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full  ${
          isSearchVisible ? "hidden" : ""
        }`}
      >
        {children}
      </main>

      {/* Search Services */}
      <div
        className={
          isSearchVisible
            ? "block px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full"
            : "hidden"
        }
      >
        <SearchServices
          {...{ messages }}
          chosenLang={locale}
          onExit={handleExit}
        />
      </div>

      {/* Buttons */}
      <div className={isElementVisible ? "flex justify-center" : "hidden"}>
        <SifarishBtn
          {...{ messages }}
          classNames="lg:hidden bottom-[62px] fixed"
        />
      </div>

      {/* Call Button */}
      <div className="hidden lg:flex justify-center items-center">
        <CallIncmngWp classNames="bottom-[80px] fixed" {...{ messages }} />
      </div>

      {/* TabBar & Footer */}
      <div>
        <TabBar
          {...{ messages }}
          classNames="fixed bottom-0 left-0 z-50 lg:hidden"
        />
        <Footer {...{ messages }} />
      </div>
    </div>
  );
}
