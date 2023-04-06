import { Navbar } from "../header/navbar";
import { Footer } from "../footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-[60px]" >{children}</main>
    </>
  );
}
