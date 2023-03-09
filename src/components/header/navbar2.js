import Link from "next/link";
export const Navbar2 = () => {
  return (
    <header>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className=" px-4 py-3 mx-auto md:px-6">
          <div className="flex justify-between">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  href="/temizlik-xidmeti"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Təmizlik Xidməti
                </Link>
              </li>
              <li>
                <Link
                  href="/usta/kombi-ustasi"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Kombi ustası
                </Link>
              </li>
              <li>
                <Link
                  href="/usta/santexnk-ustasi"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Santexnik ustası
                </Link>
              </li>
              <li>
                <Link
                  href="/kondisioner-ustasi"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Kondisioner ustası
                </Link>
              </li>
              <li>
                <Link
                  href="/paltaryuyan-ustasi"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Paltaryuyan ustası
                </Link>
              </li>
              <li>
                <Link
                  href="/usta/elektrik-ustasi"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Elektrik ustası
                </Link>
              </li>
              <li>
                <Link
                  href="/xidmetler"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Digər xidmətlər
                </Link>
              </li>
            </ul>

            <div className="ml-auto">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Qeydiyyat
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
