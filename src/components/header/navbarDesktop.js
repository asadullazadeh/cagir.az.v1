import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import search from "@/icons/header/search.svg";
import search1 from "@/icons/header/search1.svg";
import profile from "@/icons/header/profile.svg";
import profile1 from "@/icons/header/profile1.svg";
import wallet from "@/icons/header/wallet.svg";
import wallet1 from "@/icons/header/wallet1.svg";
import LangSection from "@/src/components/others/lang_section";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";

export default function NavbarDesktop() {
  return (
    <>
      <header className="hidden lg:block ">
        <nav className="relative w-full bg-white top-0 left-0 right-0 px-[10px] lg:px-[60px]">
          {/* 1st navbar */}
          <div className="py-[12px] justify-between mx-auto items-center flex relative">
            {/* 1st navbar-left side-LOGO */}
            <Link href="/" className="">
              <Image
                src={logo}
                alt="Cagir.az logo"
                className="w-[106px] h-[27px]"
              />
            </Link>

            {/* 1st navbar-right side */}
            <ul className="flex flex-row justify-center items-center space-x-[30px] h-full z-10">
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
                    className="mt-[8px] rounded-[5px] py-[4px] px-[6px] font-medium
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
                    className="mt-[9px] rounded-[5px] py-[4px] px-[6px] font-medium
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
                    className="mt-[9px] rounded-[5px] py-[4px] px-[6px] font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0 whitespace-nowrap"
                  >
                    Giriş et
                  </span>
                </Link>
              </li>
              {/* Language choice section */}
              <li>
                <LangSection />
              </li>
            </ul>
          </div>

          {/* 2nd navbar */}
          <div className="flex justify-between relative z-0">
            {/* 2nd navbar-1st part */}
            <ul
              className=" flex flex-row  
           items-center font-semibold text-[10px] xl:text-[12px] 2xl:text-[14px] leading-[21px] text-gray500 space-x-[35px] xl:space-x-[40px]"
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
                <Link href="/usta/kombi-ustasi">
                  <p className="transition duration-300 hover:text-black">
                    Digər xidmətlər
                  </p>
                </Link>
              </li>
            </ul>
            {/* 2nd navbar-2nd part- Qeydiyyat button */}
            <div className="py-[7px]">
              <PrimarySmBtn btnName="Qeydiyyat" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
