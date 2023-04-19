import Navbar from "@/src/components/header/navbar";
import Footer from "@/src/components/footer/footer";

export default function Layout({ children }) {
  return (
    <>
    <div>
      <div className="w-[1392px] px-[60px]">
        <Navbar />
        <main >{children}</main>
      </div>

      <div className="w-[1512px] ">
        < Footer />
      </div>
      </div>
    
    </>
  );
}
