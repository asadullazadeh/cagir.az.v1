import Navbar from "@/src/components/header/navbar";
import Footer from "@/src/components/footer/footer";
import TabBar from "@/src/components/mobile/tab_bar";



export default function Layout({ children }) {
  
  return (
    <>
    <div className="">
      <div className="">
        {/* <Navbar /> */}
        <main>{children}</main>
      </div>

      

      {/* <div>
        < Footer />
      </div> */}

      </div>
    
    </>
  );
}
