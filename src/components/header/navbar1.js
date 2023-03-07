import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo_cagiraz.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faWallet,
  profile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar1 = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto ">
          <Link href="https://cagir.az" className="flex items-center">
            <Image
              src={logo}
              className="h-6 mr-3 sm:h-9 bg-black"
              alt="Cagir.az logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Cagir.az
            </span> */}
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-500 hover:text-black "
                />
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-gray-500 hover:text-black"
                />
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-500 hover:text-black "
                />
              </li>

              <li>
                <p className="text-gray-500 hover:text-black ">Dil Secimi</p>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
