
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import { useState } from "react";
import search from "@/icons/header/search.svg";
import search1 from "@/icons/header/search1.svg";
import profile from "@/icons/header/profile.svg";
import profile1 from "@/icons/header/profile1.svg";
import wallet from "@/icons/header/wallet.svg";
import wallet1 from "@/icons/header/wallet1.svg";
import burger_menu from "@/icons/header/burger_menu.svg";
import close from "@/icons/header/close.svg";
import LangSection from "@/src/components/lang_section";




export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <header>
        <nav className="w-full bg-white fixed top-0 left-0 right-0 px-[10px] desktop:px-[60px] ">
          {/* 1st navbar */}
          <div className="desktop:h-[50px] justify-between mx-auto desktop:items-center desktop:flex">
              <div className="flex items-center justify-between desktop:block">
                {/* LOGO */}
                <Link href="/" className="">
                  <Image
                    src={logo}
                    alt="Cagir.az logo"
                    className="w-[77px] h-[20px] desktop:w-[106px] desktop:h-[27px] "
                  />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="">
                  <button
                    className="p-2 text-gray-700 outline-none desktop:hidden"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src={close} width={30} height={30} alt="logo" className="w-[13.75px] h-[11.25px]" />
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
            
            <div>
              <div
                className={`bg-white flex-1 hidden justify-self-center desktop:block ${
                  navbar ? "p-12 desktop:p-0 block" : "hidden"
                }`}
              >
                <ul className="flex flex-row justify-center items-center space-x-[30px] ">                
                  {/* search icon */}
                  <li>
                    <Link className="group flex relative" href="/">
                      <span>
                        <div className="relative group">
                          <Image
                            src={search}
                            alt="search_alt"
                            className="transition duration-300 ease-in-out group-hover:opacity-0"
                          />
                          <Image
                            src={search1}
                            alt="search_alt_1"
                            className="absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                          />
                        </div>
                      </span>
                      <span
                        className="mt-[8px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0"
                      >
                        Axtarış
                      </span>
                    </Link>
                  </li>

                  {/* wallet icon */}
                  <li>
                    <Link className="group flex relative" href="/">
                      <span>
                        <div className="relative group">
                          <Image
                            src={wallet}
                            alt="wallet_alt"
                            className="transition duration-300 ease-in-out group-hover:opacity-0"
                          />
                          <Image
                            src={wallet1}
                            alt="wallet_alt_1"
                            className="absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                          />
                        </div>
                      </span>
                      <span
                        className="mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0"
                      >
                        Ödəniş
                      </span>
                    </Link>
                  </li>
                  {/* Profile icon */}
                  <li>
                    <Link className="group flex relative" href="/">
                      <span>
                        <div className="relative group">
                          <Image
                            src={profile}
                            alt="profile_alt"
                            className="transition duration-300 ease-in-out group-hover:opacity-0"
                          />
                          <Image
                            src={profile1}
                            alt="profile_alt_1"
                            className="absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"
                          />
                        </div>
                      </span>
                      <span
                        className="mt-[9px] rounded-[5px] py-[4px] px-[6px] font-poppins font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0 whitespace-nowrap"
                      >
                        Giriş et
                      </span>
                    </Link>
                  </li>

                  {/* Language choice section */}
                  <li>
                    < LangSection />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 2nd navbar */}
          <div className={`desktop:h-[58px] desktop:flex desktop:justify-between desktop:block ${
                  navbar ? "" : "hidden"}`} > 
           <ul className="flex desktop:flex-row flex-col
           desktop:items-center font-poppins font-medium desktop:font-semibold text-[12px] 
           desktop:text-[14px] leading-[18px] desktop:leading-[21px]
           text-gray900 desktop:text-gray500 desktop:space-x-[40px] mobile:space-y-[15px] mobile:pt-[20px] ">
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
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Digər xidmətlər
                  </p>
                </Link>
              </li>

              {/* second part */}
              <li  className="flex justify-between mobile:h-[30px] items-center overflow-hidden	">
                <Link href="/usta/kombi-ustasi" className="desktop:hidden">
                  <p className="transition duration-300 hover:text-black">
                    Axtar
                  </p>
                </Link>
                <div className="desktop:hidden" > <LangSection /> </div>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="desktop:hidden">
                  <p className="transition duration-300 hover:text-black">
                  Ödəniş et
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="desktop:hidden">
                  <p className="transition duration-300 hover:text-black">
                  Daxil ol
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="desktop:hidden">
                  <p className="transition duration-300 hover:text-black">
                  Qeydiyyat
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/usta/kombi-ustasi" className="desktop:hidden">
                  <p className="transition duration-300 text-danger">
                    Çıxış et
                  </p>
                </Link>
              </li>
                  </ul>
                  <div className="mt-[5px] mobile:hidden">
              <button
            className="phone:hidden w-[133px] h-[41px] bg-cagiraz rounded-[30px] py-[10px] px-[26px]
              font-poppins font-extrabold text-white text-[14px] leading-[21px] transition duration-400 transform hover:-translate-y-1
              shadow-btnShdw"
              >
            Qeydiyyat
              </button>
            </div> 
                  </div>
                  {/* mobile version second div elements */}
                  
        </nav>
      </header>
    </>
  );
}