import NavbarDesktop from "@/src/components/header/navbarDesktop";
import NavbarMobile from "@/src/components/header/navbarMobile";
import Footer from "@/src/components/footer/footer";
import TabBar from "@/src/components/mobile/tab_bar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col ">
        {/* navbar */}
        <div className="sticky top-0 z-50">
          <NavbarDesktop />
          <NavbarMobile />
        </div>
        {/*  */}
         <div className="sticky top-[40px] lg:top-[110px] z-40 flex flex-row justify-between mt-[40px] lg:mt-0 bg-cagiraz lg:bg-opacity-[0.15] px-[10px] lg:px-[25px] py-[11.5px] lg:py-[20px] lg:rounded-[25px] lg:mx-[60px] lg:mt-[10px]">
            <p className="font-semibold text-[10px] lg:text-[16px] leading-[15px] lg:leading-[24px] text-[#FFFFFF] lg:text-cagiraz">Sifariş icra olunacaq: 59:59</p>
            <p className="font-medium lg:font-extrabold text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] text-[#FFFFFF] lg:text-cagiraz">Düzəliş et</p>
          </div>

        <main className="px-[10px] lg:px-[60px] mt-[40px] lg:mt-0 min-h-screen">
          {/* Content */}
          {children}
        </main>
        {/* TabBar/footer */}
        <div className="">
          <div className="">
              <TabBar /> 
            </div>
           <Footer /> 
           
        </div>
      </div>
    </>
  );
}
