import { Navbar1 } from "../header/navbar1";
import { Footer } from "../footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar1 />
      <main>{children}</main>
      <Footer />
    </>
  );
}
