import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import { useState } from "react";
import burger_menu from "@/icons/header/burger_menu.svg";
import close from "@/icons/header/close.svg";
import LangSection from "@/src/components/others/lang_section";
import search1 from "@/icons/header/search1.svg";

export default function NavbarMobile() {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(false)
  };

  return (
    <>
      <header className="block lg:hidden">
        <nav className="w-full bg-white fixed top-0 left-0 right-0 px-[10px] lg:px-[60px]">
          {/* 1st navbar */}
          <div className="flex items-center justify-between lg:block h-[40px] mx-auto">
            {/* LOGO */}
            <Link href="/" className="">
              <Image
                src={logo}
                alt="Cagir.az logo"
                className="w-[77px] h-[20px]"
              />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="flex flex-row items-center">
              {/* search button */}
              <div>
                {" "}
                <Image src={search1} alt="search_alt_1" className=" " />
              </div>
              {/* language section */}
              <div className="pl-[15px]">
                {" "}
                <LangSection />{" "}
              </div>
              <button
                className="p-2 text-gray-700 outline-none pl-[20px]"
                onClick={() => setNavbar(!navbar)}
              >
                <Image
                  src={navbar ? close : burger_menu}
                  width={13.75}
                  height={11.25}
                  alt="logo"
                  className={`w-[13.75px] h-[11.25px] ${
                    navbar
                      ? ""
                      : "focus:border-none active:border-none object-cover object-center"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* 2nd navbar */}
          <div className={` ${navbar ? "h-screen flex flex-col  " : "hidden"}`}>
            <ul
              className="flex flex-col justify-between font-medium h-4/5 mt-[17.5px] text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] xs:leading-[21px]
            sm:leading-[24px] leading-[27px] text-gray900 text-center "
            >
              <li>
                <Link href="/temizlik-xidmeti" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Təmizlik xidməti
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/kombi-ustasi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Kombi ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/santexnik-ustasi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Santexnik ustasi
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/kondisioner-ustasi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Kondisioner ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/soyuducu-ustasi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                  Soyuducu ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/elektrik-ustasi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Elektrik ustası
                  </p>
                </Link>
              </li>

              <li>
              <details className="dropdown dropdown-right dropdown-end">
                <summary className="transition duration-300 hover:text-black pb-[17.5px] border-b border-[#EAEAEA]">Digər xidmətlər</summary>
                <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li><Link href="/avto-servis">
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Avtomobil servisi
                  </p>
                </Link></li>
                <li><Link href="/meditasiya" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Yoga Meditasiya
                  </p>
                </Link></li>
                <li><Link href="/eylence-merkezi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Əyləncə
                  </p>
                </Link></li>
                <li><Link href="/masaj-xidmeti" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Masaj xidməti
                  </p>
                </Link></li>
                <li><Link href="/berber" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Bərbər
                  </p>
                </Link></li>
                <li><Link href="/psixoloq" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Psixoloq xidməti
                  </p>
                </Link></li>
                <li><Link href="/it-pisik-baximi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  İt Pişik baxımı
                  </p>
                </Link></li>
                <li><Link href="/gozellik-salonu" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Gözəllik xidməti
                  </p>
                </Link></li>
                <li><Link href="/dizayn-sirketi" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black pb-[17.5px]  border-[#EAEAEA]">
                  Dizayn xidməti
                  </p>
                </Link></li>
                </ul>
              </details>



              </li>

              {/* second part */}

              <li>
                <Link href="/" className="" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Axtar
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/payment" className="" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Ödəniş et
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/giris" className="" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Daxil ol
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/qeydiyyat" className="" onClick={handleClick}>
                  <p className="transition duration-300 hover:text-black">
                    Qeydiyyat
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/" className="" onClick={handleClick}>
                  <p className="transition duration-300 text-danger">
                    Çıxış et
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}