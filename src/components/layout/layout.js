import NavbarDesktop from "@/src/components/header/navbarDesktop";
import NavbarMobile from "@/src/components/header/navbarMobile";
import Footer from "@/src/components/footer/footer";
import TabBar from "@/src/components/mobile/tab_bar";

export default function Layout({ children }) {
  return (
    <>
        <div className="flex flex-col gap-y-[15px]">
          {/* navbar */}
          <div className="px-[10px] lg:px-[60px] sticky top-0 z-50 ">
            <NavbarDesktop />
            <NavbarMobile />
          </div>

          <main className="px-[10px] lg:px-[60px] ">
            {/* Content */}
            {children}
          </main>
          {/* TabBar/footer */}
          <div className="">
            <Footer />
            <TabBar />
          </div>
        </div>

    </>
  );
}
