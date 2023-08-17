import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
import axios from "axios";
import NavbarDesktop from "@/src/components/header/navbarDesktop";
import NavbarMobile from "@/src/components/header/navbarMobile";
import Footer from "@/src/components/main/footer";
import TabBar from "@/src/components/mobile/tab_bar";
import ModalStandart from "@/src/components/modal/modal_stand";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import CallIncmngWp from "@/src/components/buttons/call_incmng_wp";

export default function Layout({ children }) {
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
  // console.log(responseData);

  // add home page with account to this array
  let visiblePages = ["/blog","/media", "/xidmet", "/haqqimizda", "/elaqe"]; // Add the paths of the pages where the element should be visible

  for (let i = 0; i < responseData.length; i++) {
    const nameUrl = responseData[i].nameUrl;
    visiblePages.push(nameUrl);
  }
console.log(router.query.mainService);


  let isElementVisible = visiblePages.includes(!router.query.subService ? router.query.mainService || "/elaqe"
  || "/media" || "/xidmet" || "haqqimizda" || "elaqe" : "");

  return (
    <div className="">  
    <Head>
        <title>Cagir.az</title>
      </Head>
      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavbarDesktop />
        <NavbarMobile />
      </div>
      <main className="flex flex-col px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full">
        {/* Content */}
        {children}
      </main>
      <div className={isElementVisible ? "flex justify-center" : "hidden"}>
       

          <div className="z-90 flex justify-center items-center lg:hidden">
            <SifarishBtn classNames="bottom-[62px] fixed" />
          </div>
      </div>
      <div className="hidden lg:flex justify-center items-center ">
        <div className="bottom-[80px] fixed">
          <CallIncmngWp />
        </div>
      </div>
      {/* TabBar/footer */}
      <div className="">
        <div className="">
          <TabBar />
        </div>
        <Footer />
      </div>
    </div>
  );
}
