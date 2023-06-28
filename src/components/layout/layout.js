import React from "react";
import { useRouter } from "next/router";
import NavbarDesktop from "@/src/components/header/navbarDesktop";
import NavbarMobile from "@/src/components/header/navbarMobile";
import Footer from "@/src/components/main/footer";
import TabBar from "@/src/components/mobile/tab_bar";
import ModalStandart from "@/src/components/modal/modal_stand";
import SifarishBtn from "@/src/components/buttons/sifarish_btn";
import CallIncmngWp from "@/src/components/buttons/call_incmng_wp";

export default function Layout({ children }) {
  const router = useRouter();

  const visiblePages = ["/", "/usta", "/blog", "/haqqimizda", "/elaqe"]; // Add the paths of the pages where the element should be visible

  const isElementVisible = visiblePages.includes(router.pathname);

  return (
    <div className="">

      {/* navbar */}
      <div className="sticky top-0 z-50">
        <NavbarDesktop />
        <NavbarMobile />
      </div>

      <main className="px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen w-full">
        {/* Content */}
        {children}

        

      </main>
      {isElementVisible && (
        <div className="z-90 flex justify-center items-center lg:hidden">
          <SifarishBtn classNames="bottom-[62px] fixed" />
        </div>
      )}

      <div className="hidden lg:flex justify-center items-center ">
        <div className="bottom-[80px] fixed"><CallIncmngWp /></div>
          
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
