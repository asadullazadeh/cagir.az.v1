import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "@/public/logo.svg";
import search from "@/icons/header/search.svg";
import search1 from "@/icons/header/search1.svg";
import profile from "@/icons/header/profile.svg";
import profile1 from "@/icons/header/profile1.svg";
import wallet from "@/icons/header/wallet.svg";
import wallet1 from "@/icons/header/wallet1.svg";
import LangSection from "@/src/components/others/lang_section";
import PrimarySmBtn from "@/src/components/buttons/primary_sm_btn";
import avatar from "@/public/avatar.svg";
import placeholder from "@/public/placeholder.png"

export default function NavbarDesktop({ ifSearchIconClicked, messages }) {
  const linkInfos = [
    { href: "/temizlik-xidmeti", text: messages["cleaning"], className: "" },
    { href: "/kombi-ustasi", text: messages["usta-kombi"], className: "" },
    {
      href: "/santexnik-ustasi",
      text: messages["usta-santexnik"],
      className: "",
    },
    {
      href: "/kondisioner-ustasi",
      text: messages["usta-kondisioner"],
      className: "",
    },
    {
      href: "/usta/",
      text: "Usta xidmətləri",
      className: "",
    },
   
    
    { href: "/xidmetler", text: "Bütün xidmətlər", className: "" },
     {
      href: "/korperativ ",
      text: "Korperativ Əməkdaşlıq",
      className: "",
    }
  ];

  const [searchIconIsClicked, setSearchIconIsClicked] = useState(false);

  // const handleClick = () => {
  //   setSearchIconIsClicked((prev) => !prev);
  // };

  //set it to the false when other element is clicked
  // const handleDeClickSearchIcon = () => {
  //   setSearchIconIsClicked(false)
  // };
  const handleDeClickSearchIcon = async () => {
    // setTimeout(() => {
    setSearchIconIsClicked(false);
    // }, 1); // Delay for 0,001 second before reloading
  };
  //
  useEffect(() => {
    ifSearchIconClicked(searchIconIsClicked);
  }, [ifSearchIconClicked, searchIconIsClicked]);

  const [token, setToken] = useState("");
  const { locale } = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  console.log(token.length)

  return (
    <>
      <header className="hidden lg:block border-b-[1px] border-[#EAEAEA]">
        <nav className="relative w-full bg-white top-0 left-0 right-0 px-[10px] lg:px-[60px] ">
          {/* 1st navbar */}
          <div className="py-[12px] justify-between mx-auto items-center flex relative ">
            {/* 1st navbar-left side-LOGO */}
            <Link
              passHref
              onClick={handleDeClickSearchIcon}
              href="/"
              className=""
            >
              <Image
                src={logo}
                alt="Cagir.az logo"
                className="w-[140px] h-[38px]"
              />
            </Link>

            {/* 1st navbar-right side */}
            <ul className="flex flex-row justify-center items-center space-x-[30px] h-full z-10">
              {/* search icon */}
              <li key="search" className="">
                <Link href="/axtaris" className="group flex relative">
                  <button
                  //  onClick={handleClick}
                   >
                    <div className="relative group ">
                      <Image
                        src={search}
                        alt="search_alt"
                        className="transition duration-300 ease-in-out group-hover:opacity-0 w-[25px] h-[25px]"
                      />
                      <Image
                        src={search1}
                        alt="search_alt_1"
                        className="absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 w-[25px] h-[25px]"
                      />
                    </div>
                  </button>
                  <span
                    className="mt-[12px] rounded-[5px] py-[4px] px-[6px] font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0"
                  >
                    {messages.search}
                  </span>
                </Link>
              </li>

              {/* wallet icon */}
              <li key="wallet">
                <Link className="group flex relative" href="/payment">
                  <span>
                    <div
                      onClick={handleDeClickSearchIcon}
                      className="relative group"
                    >
                      <Image
                        src={wallet}
                        alt="wallet_alt"
                        className="transition duration-300 ease-in-out group-hover:opacity-0 w-[25px] h-[25px]"
                      />
                      <Image
                        src={wallet1}
                        alt="wallet_alt_1"
                        className="absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 w-[25px] h-[25px]"
                      />
                    </div>
                  </span>
                  <span
                    className="mt-[12px] rounded-[5px] py-[4px] px-[6px] font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0"
                  >
                    {messages.payment}
                  </span>
                </Link>
              </li>
              {/* Profile if not logged in */}
              <li key="profile">
                <Link
                  onClick={handleDeClickSearchIcon}
                  className={
                    token.length === 0 ? "group flex relative" : "hidden"
                  }
                  href="/giris"
                >
                  <span>
                    <div className="relative group">
                      <Image
                        src={profile}
                        alt="profile_alt"
                        className="transition duration-300 ease-in-out group-hover:opacity-0 w-[25px] h-[25px]"
                      />
                      <Image
                        src={profile1}
                        alt="profile_alt_1"
                        className="absolute top-0 left-0 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 w-[25px] h-[25px]"
                      />
                    </div>
                  </span>
                  <span
                    className="mt-[12px] rounded-[5px] py-[4px] px-[6px] font-medium
                  text-[10px] leading-[15px] bg-black500 text-white group-hover:opacity-100 transition-opacity absolute left-1/2
                  -translate-x-1/2 translate-y-full opacity-0 whitespace-nowrap"
                  >
                    {messages.login}
                  </span>
                </Link>

                <Link
                  href="/profile"
                  className={token.length === 0 ? "hidden" : ""}
                >
                  <Image
                    src={placeholder}
                    alt="profile_pic"
                    className="w-[25px] h-[25px] rounded-full"
                  />
                </Link>
              </li>
              {/* profile if logged in */}
              {/* Language choice section */}
              <li key="language">
                <LangSection />
              </li>
            </ul>
          </div>

          {/* 2nd navbar */}
          <div className="flex justify-between relative z-0">
            {/* 2nd navbar-1st part */}
            <ul
              className=" flex flex-row  
           items-center font-semibold text-[10px] xl:text-[12px] 2xl:text-[14px] leading-[21px] text-gray500 space-x-[35px] lg:space-x-[35px] xl:space-x-[55px] 2xl:space-x-[65px]"
            >
              {linkInfos.map(({ index, href, text }) => (
                // eslint-disable-next-line react/jsx-key
                <li key={href}>
                  <Link onClick={handleDeClickSearchIcon} href={href}>
                    <p className="transition duration-300 hover:text-black">
                      {text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {/* 2nd navbar-2nd part- Qeydiyyat button */}
            <Link
              href={token.length > 0 ? "is-axtariram" : "/qeydiyyat"}
              
              onClick={handleDeClickSearchIcon}
              className="py-[7px]"
            >
              <PrimarySmBtn btnName={token.length > 0 ? messages["work-with-us"] : messages.register} />

            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
