import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_cagiraz.png";
export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            <Link href="/">
              <Image
                src={logo}
                className="h-12 w-12 mr-3 sm:h-9"
                alt="Cagir.az logo"
              />
            </Link>
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link href="#" className=" hover:underline">
                {" "}
                icon + Number
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Insta, fb, in
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Razilasma muq
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                2023 Cagir.az
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Faydali kecidler
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Haqqimizda
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Suallar
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Elaqe
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Bloq
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Media
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Xidmetler
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Xidmetler
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Temizlik xidmeti
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Usta
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Masaj xidmeti
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Hamisi
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Pul qazan
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Bizimle isle
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Yeniliklerden xeberdar ol
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Email yaz
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Telegram icon and animation
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Windows
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                MacOS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
