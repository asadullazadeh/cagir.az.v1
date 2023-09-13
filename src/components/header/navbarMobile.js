import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import burger_menu from "@/icons/header/burger_menu.svg";
import close from "@/icons/header/close.svg";
import LangSection from "@/src/components/others/lang_section";
import search1 from "@/icons/header/search1.svg";

export default function NavbarMobile({ ifSearchIconClicked, messages }) {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setNavbar(!navbar);
  };
  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden";

      // Optionally, you can add a class to hide the scroll bar if needed
      // document.body.classList.add('overflow-hidden');
    } else {
      document.body.style.overflow = "visible";
    }
  }, [navbar]);
  console.log(router.asPath);
  console.log(navbar);

  // if search input is clicked
  const [searchIconIsClicked, setSearchIconIsClicked] = useState(false);

  const handleSearchInput = () => {
    setSearchIconIsClicked(true);
    setNavbar(false);
  };

  const handleDeClickSearchIcon = async () => {
    setTimeout(() => {
      setSearchIconIsClicked(false);
    }, 1); // Delay for 0,001 second before reloading
  };

  useEffect(() => {
    ifSearchIconClicked(searchIconIsClicked);
  }, [ifSearchIconClicked, searchIconIsClicked]);
  console.log("navbar:", navbar);
  console.log("searchIconIsClicked:", searchIconIsClicked);

  const [token, setToken] = useState("");
  const { locale } = useRouter();
  console.log(token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <>
      <header className="block lg:hidden">
        <nav className="w-full bg-white fixed top-0 left-0 right-0 px-[10px] lg:px-[60px] drop-shadow-[0_2px_4px_rgba(32,32,32,0.10)]">
          {/* 1st navbar */}
          <div className="flex items-center justify-between lg:block h-[40px] mx-auto ">
            {/* LOGO */}
            <Link
              passHref
              onClick={() => {
                handleDeClickSearchIcon();
                router.asPath === "/" ? window.location.reload() : "";
              }}
              href="/"
              className=""
            >
              <Image
                src={logo}
                alt="Cagir.az logo"
                className="w-[120px] h-auto"
              />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="flex flex-row items-center">
              {/* search button */}
              <button onClick={handleSearchInput}>
                <Image
                  src={search1}
                  alt="search_alt_1"
                  className="w-[20px] h-[20px]"
                />
              </button>
              {/* language section */}
              <div className="pl-[15px]">
                {" "}
                <LangSection />{" "}
              </div>
              <button
                className="px-[6.25px] py-8.75px text-gray-700 outline-none pl-[20px]"
                onClick={() => setNavbar(!navbar)}
              >
                <Image
                  src={navbar ? close : burger_menu}
                  width={13.75}
                  height={11.25}
                  alt="logo"
                  className={`w-[16.5px] h-[13.5px] ${
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
            sm:leading-[24px] md:leading-[27px] text-gray900 text-center "
            >
              <li>
                <Link
                  passHref
                  href="/temizlik-xidmeti"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Təmizlik xidməti */}
                    {messages["cleaning"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/kombi-ustasi"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Kombi ustası */}
                    {messages["usta-kombi"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/santexnik-ustasi"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Santexnik ustasi */}
                    {messages["usta-santexnik"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/kondisioner-ustasi"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    Kondisioner ustası
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/soyuducu-ustasi"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Soyuducu ustası */}
                    {messages["usta-soyuducu"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/elektrik-ustasi"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Elektrik ustası */}
                    {messages["usta-elektrik"]}
                  </p>
                </Link>
              </li>

              <li className="">
                <Link
                  passHref
                  href="/xidmetler"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Digər Xidmətlər */}
                    {messages["other-services"]}
                  </p>
                </Link>
              </li>
              {/* <li className="border-b-2 border-opacity-10 border-[#959595]"></li> */}

              {/* second part */}

              <li
                className=""
                onClick={() => {
                  handleClick();
                  handleSearchInput();
                }}
              >
                <Link href="/xidmet">
                  <p className="transition duration-300 hover:text-black">
                    {/* Xidmətlər */}
                    {messages["services"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className=""
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Bloq */}
                    {messages["blog"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/haqqimizda"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Haqqımızda */}
                    {messages["about"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  passHref
                  href="/elaqe"
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Əlaqə */}
                    {messages["contact"]}
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className=""
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Ödəniş et */}
                    {messages["payment"]}
                  </p>
                </Link>
              </li>
              <li className={`${token ? "hidden" : ""}`}>
                <Link
                  href="/giris"
                  className=""
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Daxil ol */}
                    {messages["login"]}
                  </p>
                </Link>
              </li>
              <li className={`${token ? "hidden" : ""}`}>
                <Link
                  href="/qeydiyyat"
                  className=""
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className="transition duration-300 hover:text-black">
                    {/* Qeydiyyat */}
                    {messages["register"]}
                  </p>
                </Link>
              </li>
              <li className={`${token ? "" : "hidden"}`}>
                <Link
                  href="/"
                  className=""
                  onClick={() => {
                    handleClick();
                    handleDeClickSearchIcon();
                  }}
                >
                  <p className={`transition duration-300 text-danger`}>
                    {/* Çıxış et */}
                    {messages["logout"]}
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
