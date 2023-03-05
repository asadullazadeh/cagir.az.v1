import { Navbar1 } from "../header/navbar1";
import { Navbar2 } from "../header/navbar2";
import { Footer } from "../footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <main>{children}</main>
      <Footer />
    </>
  );
}
