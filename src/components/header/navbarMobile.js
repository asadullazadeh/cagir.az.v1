import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import { useState } from "react";
import burger_menu from "@/icons/header/burger_menu.svg";
import close from "@/icons/header/close.svg";
import LangSection from "@/src/components/lang_section";
import search1 from "@/icons/header/search1.svg";

export default function NavbarMobile() {
  const [navbar, setNavbar] = useState(true);

  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleClick = () => {
    setShowSecondImage(!showSecondImage);
  };

  return (
    <>
      <header className=" h-[40px] block lg:hidden">
        <nav className="w-full bg-white fixed top-0 left-0 right-0 px-[10px] lg:px-[60px]">
          {/* 1st navbar */}
          <div className="justify-between mx-auto ">
            <div className="flex items-center justify-between lg:block">
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
                  {navbar ? (
                    <Image
                      src={close}
                      width={30}
                      height={30}
                      alt="logo"
                      className="w-[13.75px] h-[11.25px]"
                    />
                  ) : (
                    <Image
                      src={burger_menu}
                      width={30}
                      height={30}
                      alt="logo"
                      className="w-[13.75px] h-[11.25px] focus:border-none active:border-none object-cover object-center"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 2nd navbar */}
          <div className={` ${navbar ? "" : "hidden"}`}>
            <ul
              className="flex flex-col justify-between font-medium text-[12px] leading-[18px] text-gray900 pt-[20px] text-center min-h-[431px]
               "
            >
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Təmizlik xidməti
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Kombi ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Santexnik ustasi
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Kondisioner ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Paltaryuyan ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Elektrik ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="pb-[17.5px]">
                  <p className="transition duration-300 hover:text-black">
                    Digər xidmətlər
                  </p>
                </Link>
              </li>

              {/* second part */}
              <li>
                <Link href="/usta/kombi-ustasi" className="">
                  <p className="transition duration-300 hover:text-black">
                    Axtar
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="">
                  <p className="transition duration-300 hover:text-black">
                    Ödəniş et
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="">
                  <p className="transition duration-300 hover:text-black">
                    Daxil ol
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="">
                  <p className="transition duration-300 hover:text-black">
                    Qeydiyyat
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="">
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
