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
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const linkInfos = [
    {
      href: "/temizlik-xidmeti",
      text: messages["cleaning"],
      className: "",
      index: 0,
    },
    {
      href: "/kombi-ustasi",
      text: messages["usta-kombi"],
      className: "",
      index: 1,
    },
    {
      href: "/santexnik-ustasi",
      text: messages["usta-santexnik"],
      className: "",
      index: 2,
    },
    {
      href: "/kondisioner-ustasi",
      text: messages["usta-kondisioner"],
      className: "",
      index: 3,
    },
    {
      href: "/usta",
      text: "Usta xidmətləri",
      className: "",
      index: 4,
    },
    // {
    //   href: "/usta",
    //   text: "Usta xidmətləri",
    //   className: "",
    //   index: 5,
    // },
    { href: "/xidmetler", text: "Bütün xidmətlər", className: "" },
    {
      href: "/",
      text: messages[""],
      className: "border-b-2 border-opacity-10 border-[#959595] my-[-15px]",
      index: 6,
    },
    {
      href: "/xidmet",
      text: messages["service-description"],
      className: "",
      index: 7,
    },
    { href: "/korperativ", text: "Korperativ Əməkdaşlıq", className: "", index: 8 },
    { href: "/is-axtariram", text: messages["work-with-us"], className: "", index: 9 },
    
    { href: "/blog", text: messages["blog"], className: "", index: 10 },
    { href: "/haqqimizda", text: messages["about"], className: "", index: 11 },
    { href: "/elaqe", text: messages["contact"], className: "", index: 12 },
    { href: "/payment", text: messages["payment"], className: "", index: 13 },
    {
      href: "/giris",
      text: messages["login"],
      className: `${token ? "hidden" : ""}`,
      index: 14,
    },
    {
      href: "/qeydiyyat",
      text: messages["register"],
      className: `${token ? "hidden" : ""}`,
      index: 15,
    },
    {
      href: "/profile",
      text: messages["profile"],
      className: ` ${token ? "" : "hidden"}`,
      index: 16,
    },
    {
      href: "/",
      text: messages["logout"],
      className: `text-danger ${token ? "" : "hidden"}`,
      index: 17,
    },
  ];

  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => {
    setNavbar(!navbar);
  };
  useEffect(() => {
    if (navbar) {
      // document.body.style.overflow = "hidden";
      // Optionally, you can add a class to hide the scroll bar if needed
      // document.body.classList.add('overflow-hidden');
    } else {
      // document.body.style.overflow = "visible";
    }
  }, [navbar]);

  // if search input is clicked
  const [searchIconIsClicked, setSearchIconIsClicked] = useState(false);

  // const handleSearchInput = () => {
  //   setSearchIconIsClicked((prev) => !prev);
  //   setNavbar(false);
  // };

  const handleDeClickSearchIcon = async () => {
    setTimeout(() => {
      setSearchIconIsClicked(false);
    }, 1); // Delay for 0,001 second before reloading
  };

  useEffect(() => {
    ifSearchIconClicked(searchIconIsClicked);
  }, [ifSearchIconClicked, searchIconIsClicked]);

  //when logout button is clicked
  function logout(index) {
    if (index === 17) {
      // Remove the token (or other authentication info) from storage
      localStorage.removeItem("token");

      // Redirect to a public page or the login page
      window.location.href = "/";
    }
  }

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
              <Link href="/axtaris"
              //  onClick={handleSearchInput}
               >
                <Image
                  src={search1}
                  alt="search_alt_1"
                  className="w-[20px] h-[20px]"
                />
              </Link>
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
          <div
            className={` ${
              navbar ? "h-screen flex flex-col pb-[120px]" : "hidden"
            }`}
          >
            <ul
              className="flex flex-col justify-between font-medium h-screen  text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] xs:leading-[21px]
            sm:leading-[24px] md:leading-[27px] text-gray900 text-center"
            >
              {linkInfos.map(({ href, text, className, index }) => (
                <li key={index} className={className}>
                  <Link
                    passHref
                    href={href}
                    onClick={() => {
                      handleClick();
                      handleDeClickSearchIcon();
                      logout(index);
                    }}
                  >
                    <p className={`transition duration-300 hover:text-black`}>
                      {text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
